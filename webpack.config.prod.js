import HtmlWebpackPlugin from 'html-webpack-plugin'; //eslint-disable-line
import path from 'path';

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
    // Generate an HTML5 file that includes references to bundled JS.
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
    ],
  },
};
