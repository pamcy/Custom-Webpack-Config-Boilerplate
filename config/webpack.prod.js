const paths = require('./paths');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: paths.build,
    filename: '[name].[contenthash].bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    /**
     * CleanWebpackPlugin
     * Removes/cleans build folders and unused assets when rebuilding.
     */
    new CleanWebpackPlugin(),

    /**
     * MiniCssExtractPlugin
     * Extracts CSS into separate files.
     *
     * Note: style-loader is for development, MiniCssExtractPlugin is for production.
     * They cannot be used together in the same config.
     */
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].css',
    })
  ],
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../', // override output.publicPath, so css background-image path will be prepended with "../"
          },
        },
        'css-loader',
        'postcss-loader',
        'sass-loader',
      ],
    }],
  },
  optimization: {
    // Production minimizing of JavaSvript and CSS assets.
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
});
