const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 4200
  },
  devtool:'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [   
    new HtmlWebpackPlugin({
      template: './pug/pages/index.pug',
      minify: false
    }),
    new HtmlWebpackPlugin({
      template: './pug/pages/team.pug',
      filename: 'team.html',
      minify: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ]
  }
});