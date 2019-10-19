const paths = require('./paths');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // control how source maps are generated
  devServer: {
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true, // enable webpack's Hot Module Replacement
    port: 8080,
  },
  plugins: [
    /**
     * HotModuleReplacementPlugin
     * Only update what has changed.
     */
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader', // watch and reload HTML
      },
    ],
  },
});