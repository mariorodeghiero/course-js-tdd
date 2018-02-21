const webpack = require("webpack");
const nodeENV = process.env.NODE_ENV || "production";

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
          presets: [
            [
              "es2015",
              {
                modules: false
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify(nodeENV) }
    })
  ]
};
