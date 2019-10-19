const paths = require('./paths');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: paths.src + '/index.js',
  },
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
  },
  plugins: [
    /**
     * CopyWebpackPlugin
     * Copies files from target to destination folder.
     */
    new CopyWebpackPlugin([
      {
        from: paths.src + '/images',
        to: 'images',
        ignore: ['*.DS_Store'],
      }
    ]),
    /**
     * HtmlWebpackPlugin
     * Generates an HTML file from a template.
     */
    new HtmlWebpackPlugin({
      title: 'Custom Webpack 4 Config',
      favicon: paths.src + '/images/favicon.png',
      template: paths.src + '/template.html', // template file
      filename: 'index.html', // output file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(?:svg|gif|png|jpg|jpeg|webp|ico)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src', // prevent display of src/ in filename
          outputPath: 'images'
        },
      },
    ],
  },
}