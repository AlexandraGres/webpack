const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new TerserPlugin()
  ]
});