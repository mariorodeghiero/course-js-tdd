const webpack = require("webpack");

module.exports = {
  entry: {
    filename: "./app.js"
  },
  output: {
    filename: "./build.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // onde ele roda o teste, em todos arquivos js
        exclude: /node_modules/, // ignora a execuçao para os arquivos do node_modules
        loader: "babel-loader",
        query: {
          // query define o que vamos querer que rode
          presets: [["es2015", { modules: false }]]
        }
      }
    ]
  }
};
