var path = require("path");
var webpack = require("webpack");

var packageInfo = require("./package.json");
var mode = process.env.MODE;

module.exports = {

  mode: mode,

  entry: "./lib/index.js",

  output: {

    path: path.resolve(__dirname, "dist"),
    filename: `${packageInfo.name}-${mode}.js`,
    library: "SdpTransform",
    libraryTarget: "umd",
    umdNamedDefine: true

  },

  devtool: "source-map"

};
