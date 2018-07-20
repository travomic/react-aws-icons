<!DOCTYPE html>
<html>
  <head>
    <title>%PACKAGE_NAME%</title>
    <meta name="author" content="%AUTHOR%">
    <meta name="description" content="%DESCRIPTION%">
    <meta name="keywords" content="%KEYWORDS%">
    <link rel="icon" type="image/ico" href="%FAVICON%">
    
    <style>
body { background: #EEE; font-family: sans-serif; padding: 2em; }
.icons > H2 { font-size: 1rem; color: #555; }
.icons > H2 SMALL { font-weight: normal; font-size: 0.8em; }
.icons > UL { list-style: none; margin: 0 0 2em 0; padding: 0; }
.icons > UL::after { content: ""; clear: both; display: table; }
.icons LI { float: left; position: relative; z-index: 1; }
.icons LABEL { display: none; }
.icons LI:hover, .icons LI:focus { background: #222; z-index: 2; border-radius: 4px; outline: none; }
.icons LI:hover SVG, .icons LI:focus SVG { transform: scale(1.25); }
.icons LI:hover LABEL, .icons LI:focus LABEL {
  display: block;
  position: absolute;
  padding: 0.5em;
  background: #111;
  color: #FFF;
  top: -2em;
  font-size: 11px;
  font-weight: bold;
  white-space: nowrap;
  border-radius: 4px 4px 4px 0;
}
    </style>
  </head>
  <body>
    <h1>%PACKAGE_NAME%</h1>
    
    <section class="icons">
      %CONTENT%
    </section>

    <strong>%ICON_COUNT%</strong> total icons
    &nbsp;–&nbsp;
    Sourced from: <a href="%SOURCE_URL%">%SOURCE_URL%</a>
    <br><br>
    <a href="%HOMEPAGE%">%HOMEPAGE%</a>
    <br>
    Version <var>%VERSION%</var>
    <br>
    License: <em>%LICENSE%</em>

  </body>
</html>
