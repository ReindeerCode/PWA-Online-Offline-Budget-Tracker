const config = {
  //*what should these ? be. Do I create a src folder and app.js file in it?
  entry: "./??????????",
  output: {
    //*do I create a dist folder?
    //* do i still need my manifest file after I do this?
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  mode: "development",
};

module.exports = config;
