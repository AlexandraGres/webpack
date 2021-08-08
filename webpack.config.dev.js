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