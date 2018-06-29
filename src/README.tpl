# %PACKAGE_NAME%

A collection of Amazon's AWS Simple Icons to be used in React apps.

As stated on Amazon's website: https://aws.amazon.com/architecture/icons/

> AWS Simple Icons are an official icon set that includes icons for several AWS products and resources. Customers and partners are permitted by AWS to use them to create architecture diagrams.

This package was primarily inspired by the [`react-feather`](https://github.com/carmelopullara/react-feather) icon set, and attempts to follow the same convention allowing you to import specific SVG icons from a wide selection of iconic diagram images.

Alternatively, a similar package that you may consider is: [`aws-react-material-icons`](https://github.com/philcruz/aws-react-material-icons) however, it is reliant on having `material-ui` as a peer dependency, and only contains roughly 28 of the "Compute" subset of the AWS Simple Icons.

### Installation:
```bash
npm i %PACKAGE_NAME%
# Or, for consumers of yarn…
yarn add %PACKAGE_NAME%
```

### Usage:

```javascript
import AWSIcon from '%PACKAGE_NAME%/dist/aws/logo/AWS';

class MyClass extends React.Component {
  render() {
    return <AWSIcon />
  }
}
```

Icons can be configured with a custom size prop, but the fills of the SVG icons are hard-coded.
```html
<CloudFrontIcon size={48} />
```
Without a custom size they are **24**×**24** by default.

Here is a complete list of the icon filenames _(excluding the **.js** extension)_ that are provided in this collection.

You can [preview them as HTML here](https://travomic.github.io/react-aws-icons/aws.html).

%ICON_LIST%

These names are based on the SVG pathnames of the original [ZIP](https://s3-us-west-2.amazonaws.com/awswebanddesign/Architecture+Icons/AWS-Arch-Icon-Sets_Feb-18/PNG%2C+SVG%2C+EPS_18.02.22.zip) source file.  Liberties were taken to rename and normalize them into grouped directories. 

There will likely be changes and improvements in future releases of this package, but will follow semantic versioning guidelines to safeguard against breaking existing implementations.
