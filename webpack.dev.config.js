const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:8080/'
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    proxy: { 
      '/**': {  //catch all requests
        target: "./src/server/index.html",  //default target
        secure: false,
        ignorePath: true,
        bypass: function(req, res, opt){
          //your custom code to check for any exceptions
          //console.log('bypass check', {req: req, res:res, opt: opt});
          if(req.path.indexOf('/img/') !== -1 || req.path.indexOf('/css/') !== -1){
            return req.path;
          }
          if (req.headers.accept.indexOf('html') !== -1) {
            return req.path;
          }
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/server/index.html",
      filename: "./index.html"
    })
  ]
}

module.exports = merge(baseConfig, config);
