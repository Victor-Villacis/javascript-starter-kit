import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin'; //eslint-disable-line
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    vendor: path.resolve(__dirname, './src/vendor.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),

    // Generate an HTML5 file that includes references to bundled JS.
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // Properties defined here will be available in index.html
      title: 'App Name',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      //Call this in the HTML using htmlWebpackPlugin.options.varName
      //Only used in production
      trackJSToken: '2060289379544c50a7d8f0e9177b8401',
    }),
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']},
    ],
  },
};
