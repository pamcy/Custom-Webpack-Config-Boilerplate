const paths = require('./paths');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // control how source maps are generated
  devServer: {
    port: 8080,
    open: true,
    compress: true,
    hot: true, // enable webpack's Hot Module Replacement
    watchContentBase: true, // watch for changes in all files that are located in contentBase dir.
    contentBase: paths.src,
  },
  plugins: [
    /**
     * HotModuleReplacementPlugin
     * Only update what has changed.
     */
    new webpack.HotModuleReplacementPlugin(),
  ]
});
