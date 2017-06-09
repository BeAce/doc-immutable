var path = require("path");

module.exports = {
  entry: {
    list: "./src/list.js",
    map: "./src/map.js",
    seq: "./src/seq.js",
    fromJS: "./src/fromJS.js",
    convert2js: "./src/convert2js.js",
    compare: "./src/compare.js",
    mutation: "./src/mutation.js",
    range: "./src/range.js",
    repeat: "./src/repeat.js"
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: { plugins: ["transform-runtime"], presets: ["es2015"] }
      }
    ]
  }
};
