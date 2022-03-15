import HtmlWebpackPlugin from 'html-webpack-plugin'; //eslint-disable-line
import path from 'path';

export default {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    // Generate an HTML5 file that includes references to bundled JS.
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
    ],
  },
};
