// This Node shell script converts a folder of SVG files into JSX components.
// If provided a URL to a ZIP, it will download, and extract mapped SVGs.

const detectCharacterEncoding = require('detect-character-encoding');
const fs = require('fs-extra');
const https = require('https');
const unzipper = require('unzipper');
const CONFIG_PATH = './generate.config.json';
const PACKAGE_PATH = './package.json';
const ENCODING = 'utf8'
const log = console.log;

const cleanString = input => input.split('')
  .map(char => char.charCodeAt(0) <= 127 ? char : '', input)
  .join('');

const downloadTo = (url, write$) => {
  return new Promise((resolve) => {
    https.get(url, async (resp) => {
      resp.on('data', (chunk) => { write$.write(chunk); });
      resp.on('end', () => { write$.end(); setTimeout(() => resolve(true), 1000); });
      resp.on('error', () => { resolve(false); });
    });
  });
}

// Takes a file path, and gives back the output name with cleaned SVG content.
const svgToIcon = async (path, file) => {
  const name = file.replace(/\.svg$/, '');
  const pathKey = path.replace(/^\.\/svg\//, '').replace(/\W+/g, '-');
  let svg = await fs.readFile(`${path}/${file}`, ENCODING);
  const classDefs = {};
  const svgFills = {};
  
  // Turn the file name into a screen reader friendly title content.
  const title = name.replace(/([A-Z]+)/g, ' $1')
    .replace(/(_?\s+_?)/g, ' ')
    .replace(/^\s+/, '');

  // Clean out troublesome attributes from SVG source content.
  svg = svg
    .replace(/<!DOCTYPE [^>]+>/, '')
    .replace('xmlns:xlink="http://www.w3.org/1999/xlink" ', '')
    .replace(' style="enable-background:new 0 0 100 100;"', '')
    .replace(/ enable-background="[^"]+"/g, '')
    .replace(' xml:space="preserve"', '')
    .replace('id="Layer_1" ', '')
    .replace('data-name="Layer 1" ', '')
    .replace('viewbox', 'viewBox')
    .replace(/\r|\u2028|\u2029/g, '')
    .replace(/></g, '>\n<');

  // Make sure the SVG content has a TITLE tag.
  if (!svg.match('<title>')) {
    svg = svg.replace(
      '100 100">',
      `100 100">\n<title>_</title>\n`
    );
  }

  // Translate all inline style attributes to JSX compatible object format.
  const styles = svg.match(/style="[^"]+"/g);
  styles && styles.forEach(sty => {
    const sVal = sty.match(/style="([^"]+)/);
    const props = sVal[1].split(';');
    
    // Build up an object from each of the CSS string's key:value pairs. 
    let style = {};
    props && props.forEach(prop => {
      const kv = prop.split(':');
      if (kv.length) { style[kv[0]] = kv[1]; }
    });
    
    // Replace all instances of this exact style match with it's object form.
    const s = JSON.stringify(style);
    const sExpr = new RegExp(`style="${sVal[1]}"`, 'g');
    svg = svg.replace(sExpr, `style={${s}}`);
  });

  // Expand compound CSS selectors into separate declaration blocks.
  const complexMatches = svg.match(/\.(cls-|st)\d+,[^}]+{[^}]+}/g);
  complexMatches && complexMatches.forEach(complex => {
    const [ _, selector, declaration ] = complex.match(/^([^{]+){(.+)$/);
    const selectors = selector.split(',');
    const replacement = selectors.reduce((acc, sel) => {
      acc += `${sel}{${declaration}`;
      return acc;
    }, '');
    svg = svg.replace(complex, replacement);
  });

  // Convert known class definitions to an inline style object instead.
  const classes = svg.match(/\.(cls-|st)\d+{[^}]+/g);
  classes && classes.forEach(sty => {
    const cls = sty.match(/\.(cls-|st)(\d+)/);
    const [_, declaration] = sty.match(/{(.+)/);
    const fill = sty.match(/fill:([^;]+)/);
    const cName = `"${cls[1]}${cls[2]}"`;

    // Build up a list of unique fills to be hoised up to the component props.
    svgFills[fill] = 1;

    if (!classDefs[cName]) {
      classDefs[cName] = '';
    }

    classDefs[cName] += declaration;
  });

  // Convert matching classed tags to use an inline style object instead.
  classes && classes.forEach(sty => {
    const cls = sty.match(/\.(cls-|st)(\d+)/);
    const cName = `"${cls[1]}${cls[2]}"`;
    const tExpr = new RegExp(`<.+class=${cName}[^>]*`, 'gm');
    const tags = svg.match(tExpr);

    tags && tags.forEach(tag => {
      // Build up an object from each of the CSS string's key:value pairs. 
      let style = {};

      // Convert the CSS class into a style object.
      const props = classDefs[cName].split(';');
      props && props.forEach(prop => {
        const kv = prop.split(':');
        if (kv.length && kv[0] && kv[1]) { style[kv[0]] = kv[1]; }
      });

      // Extend any existing inline style object into the class defined styles.
      const styleAttr = tag.match(/style={[^}]+}}/g);
      if (styleAttr) {
        const [_, sty] = styleAttr[0].match(/style={([^}]+})}/);
        style = {...style, ...JSON.parse(sty)};
      }
    
      // Replace the tag's class with an inline style object attribute instead.
      const s = JSON.stringify(style);
      svg = svg.replace(tag, tag.replace(`class=${cName}`, `style={${s}}`));
    });
  });

  // Update the TITLE content, and drop troublesome markup from the SVG.
  svg = svg.replace(/<title>.*<\/title>/, `<title>${title}</title>`)
    .replace(/<style[\s\S]+<\/style>/, '')
    .replace(/<\?xml.*\?>/, '')
    .replace(/<\!--.*-->/g, '')
    .replace(
      /(linear|radial)-gradient/g, 
      `${pathKey}-${name.toLowerCase()}-$1-gradient`
    );
  
  // Convert remaining known attribute names to JSX format.
  svg = svg
    .replace(/height="\d+(px|%)?"/, 'height={size}')
    .replace(/width="\d+(px|%)?"/, 'width={size} size={size} {...otherProps}');

  // Note, the returned value is a list. 
  return [name, svg];
};

const iconListToDiskAndHTML = (ico, dest, list) => {
  return list.map(([name, content]) => {
    // Inject the cleaned content into the Icon template.
    const jsx = ico.replace('%SVG_CONTENT%', content);
    fs.writeFile(`${dest}/${name}.jsx`, jsx, ENCODING);

    let html = content;

    // Find all JSX style objects, to be translated to inline CSS.
    const styles = html.match(/style={{[^}]+}}/g);
    styles && styles.forEach(style => {
      const sSty = style.match(/style={([^}]+})/);
      const sExpr = new RegExp(style, 'g');
      const sObj = JSON.parse(sSty[1]);
      const sStr = Object.keys(sObj)
        .reduce((acc, key) => `${acc}${key}:${sObj[key]};`, '');

      // Replace all macthing JSX style objects, with the CSS string equivilent.
      html = html.replace(sExpr, `style="${sStr}"`);
    });

    // Return a HTML list-item sample to be used in the preview template.
    return [name, html];
  });
}

// Here's where the side-effects happen, writing the JSX Icon files to disk.
const iconTreeToDisk = async (pkg, conf, key, tree) => {
  const ico = await fs.readFile(conf.iconTemplate, ENCODING);
  const pre = await fs.readFile(conf.previewTemplate, ENCODING);
  const jsxPath = `${conf.jsxPath}/${key}`;
  const previewDest = `${conf.previewPath}/${key}.html`;
  const { favicon, sourceURL } = conf.icons[key];

  const output = tree.reduce((acc, leaf) => {
    if (leaf.sub) {
      const subDest = `${jsxPath}${leaf.sub}`;
      fs.mkdirsSync(subDest);
      let list = iconListToDiskAndHTML(ico, subDest, leaf.list);
      acc.push({ path: leaf.sub, list });
    } else if (leaf.length) {
      acc[0].list.push(leaf);
    }
    return acc;
  }, [{ path: '/', list: [] }]);

  output[0].list = iconListToDiskAndHTML(ico, jsxPath, output[0].list);

  const preview = output.reduce((acc, sub) => {
    if (sub.list.length === 0) { return acc; }

    const items = sub.list.map(([name, html]) => `
      <li tabindex="0"><label>${name}</label><div>${html}</div></li>
    `).join('\n\n');

    return `${acc}
      <h2>
        ${key}${sub.path}
        <small>
          &nbsp;&mdash;&nbsp;
          <b>${sub.list.length}</b>
          icons
        </small>
      </h2>
      
      <ul>${items}</ul>
    `;
  }, '');

  const totalCount = output.reduce((acc, sub) => (acc + sub.list.length), 0);

  // Inject the generated SVG contents into the HTML preview template.
  const content = pre.replace('%CONTENT%', preview)
    .replace('%ICON_COUNT%', totalCount)
    .replace('%AUTHOR%', pkg.author)
    .replace('%DESCRIPTION%', pkg.description)
    .replace('%KEYWORDS%', pkg.keywords.join(','))
    .replace('%LICENSE%', pkg.license)
    .replace('%VERSION%', pkg.version)
    .replace('%FAVICON%', favicon)
    .replace(/%HOMEPAGE%/g, pkg.homepage)
    .replace(/%PACKAGE_NAME%/g, pkg.name)
    .replace(/%SOURCE_URL%/g, sourceURL)
    .replace(/\{size\}/g, 64);

  // Write the preview HTML page, with inlined SVG samples.
  fs.createFileSync(previewDest);
  fs.writeFile(previewDest, content, ENCODING);

  return output.reduce((acc, sub) => {
    if (sub.list.length === 0) { return acc; }
    const items = sub.list.map(([name]) => `- ${name}`).join('\n');
    return `${acc}\n### ${key}${sub.path}\n${items}\n---`;
  }, '');
};

const writeREADME = async (pkg, conf, iconList) => {
  let readme = await fs.readFile(conf.readmeTemplate, ENCODING);
  readme = readme.replace(/%PACKAGE_NAME%/g, pkg.name)
    .replace('%ICON_LIST%', iconList);
  fs.writeFile('README.md', readme, ENCODING);
}

// Process each of the files and sub-folders found in the given source path.
const processPath = async (path, dest) => {
  const files = await fs.readdir(path);
  const pList = files.map(async (cur) => {
    if (cur.match(/\.svg$/)) {
      return svgToIcon(path, cur);
    } else {
      const subPath = `${path}${cur}`;
      const stats = await fs.stat(subPath);
      
      if (stats.isDirectory()) {
        return Promise.resolve({
          sub: subPath.replace(path, '/'),
          list: await processPath(subPath, dest)
        });
      } else {
        log('Unrecognized file, skipping:', subPath);
        return Promise.resolve();
      }
    }
  });
  return await Promise.all(pList);
}

// The config "icons" object can declare multiple sets by "key" name.
const processIconKey = async (conf, iconKey) => {
  const iconMap = conf.icons[iconKey].map;
  const iconMore = conf.icons[iconKey].more;
  const iconSrc = conf.icons[iconKey].src;
  const jsxPath = `${conf.jsxPath}/${iconKey}`;
  const svgPath = `${conf.svgPath}/${iconKey}`;
  const tmpPath = `${conf.tmpPath}/${iconKey}`;
  const zipFile = `${conf.zipPath}/${iconKey}.zip`;
  const zipPathPrefix = conf.icons[iconKey].zipPathPrefix || '';
  const prefixRegex = new RegExp(`^${zipPathPrefix}`);
  const suffixRegex = /\.svg$/;
  
  const svgExists = await fs.pathExists(svgPath);

  if (!svgExists && iconSrc.match(/\.zip$/)) {
    const zipExists = await fs.pathExists(zipFile);
    
    if (!zipExists && iconSrc.match(/^https?:/)) {
      log(`Downloading: ${iconSrc}`);

      const write$ = fs.createWriteStream(zipFile);
      const downloaded = await downloadTo(iconSrc, write$);

      if (!downloaded) {
        log(`Unable to get ZIP for [${iconKey}], skipping.`);
        return;
      }
    } else if (!zipExists) {
      log(`Unable to locate ZIP for [${iconKey}], skipping.`);
      return;
    }

    await fs.mkdirs(svgPath);
    await fs.createReadStream(zipFile)
      .pipe(unzipper.Parse())
      .on('entry', entry => {
        const { path } = entry;

        if (path.match(prefixRegex) && path.match()) {
          const toPath = path
            .replace(prefixRegex, '')
            .replace(suffixRegex, '');

          if (iconMap[toPath]) {
            const destSVG = `${svgPath}/${iconMap[toPath]}.svg`;

            fs.createFileSync(destSVG);
            entry.pipe(fs.createWriteStream(destSVG));

            log('Extracted SVG to:', destSVG);
          }
        }
        entry.autodrain();
      })
      .promise();
  }

  // Make sure the SVG dir has each of the declared "MORE" icons in it.
  if (iconMore) {
    fs.ensureDirSync(tmpPath);

    const pMore = await Object.keys(iconMore).map(async (moreSrc) => {
      const destName = iconMore[moreSrc];
      const tempFile = `${tmpPath}/${destName}.svg`;
      const moreFile = `${svgPath}/${destName}.svg`;
      const svgExists = fs.pathExistsSync(moreFile);

      if (!svgExists) {
        if (moreSrc.match(/^https?:.*\.svg$/)) {
          fs.ensureDirSync(tempFile.replace(/\/[^\/]+\.svg$/, ''));
          fs.ensureDirSync(moreFile.replace(/\/[^\/]+\.svg$/, ''));

          const write$ = fs.createWriteStream(tempFile, { encoding: ENCODING });
          const downloaded = await downloadTo(moreSrc, write$);

          if (downloaded) {
            const svgBuffer = fs.readFileSync(tempFile);
            const charset = detectCharacterEncoding(svgBuffer);

            // Convert UTF-16 SVG documents to UTF-8.
            if (charset.encoding !== 'UTF-8') {
              const content = fs.readFileSync(tempFile, { encoding: 'ucs2' });
              fs.writeFileSync(
                moreFile,
                cleanString(content).replace(' encoding="utf-16"', ''),
                { encoding: ENCODING }
              );
            } else {
              await fs.move(tempFile, moreFile);
            }
            log('Downloaded SVG to:', moreFile);
          } else {
            log('Unable to download SVG for:', destName, moreSrc);
          }
        } else {
          log('Invalid HTTPS URL for SVG, skipping...', destName, moreSrc);
        }
      }
    });
    await Promise.all(pMore);
    await fs.remove(conf.tmpPath);
  }

  // Recursively process source directory, and sub paths into JSX contents.
  const tree = await processPath(`${svgPath}/`, `${jsxPath}/`);
  return [iconKey, tree];
};

// Convert a source path of SVG files out to a collection of JSX files.
const generate = async (confPath, pkgPath, clear = false) => {
  const conf = await fs.readJson(confPath);
  const pkg = await fs.readJson(pkgPath);
 
  if (clear) {
    await fs.emptyDir(conf.svgPath);
  }

  // Remove any old generated files, and make sure the destination path exists.
  await fs.emptyDir(conf.tmpPath);
  await fs.emptyDir(conf.jsxPath);
  await fs.mkdirs(conf.jsxPath);
  await fs.mkdirs(conf.zipPath);

  const pKeyTrees = Object.keys(conf.icons).map(k => processIconKey(conf, k));
  const keyTrees = await Promise.all(pKeyTrees);

  // Lastly, write the JSX files out to disk, for each icon set key.
  const pIconLists = keyTrees.map(async ([key, tree]) => {
    return await iconTreeToDisk(pkg, conf, key, tree);
  });

  const iconLists = await Promise.all(pIconLists);

  await writeREADME(pkg, conf, iconLists.join('\n\n'));
};

// Alright, initialize the generate process now!
generate(CONFIG_PATH, PACKAGE_PATH, process.argv[2] === 'clean');