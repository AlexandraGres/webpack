const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new TerserPlugin(),
    new HtmlWebpackPlugin({
      template: './pug/pages/index.pug',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './pug/pages/team.pug',
      filename: 'team.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './pug/pages/grid-page/grid.pug',
      filename: 'grid.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './pug/pages/flexbox-page/flexbox.pug', 
      filename: 'flexbox.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './pug/pages/posts/posts.pug', 
      filename: 'posts.html',
      minify: {
        collapseWhitespace: true
      }
    }),
  ]
});