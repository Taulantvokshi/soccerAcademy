const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
module.exports = {
  entry: ['@babel/polyfill', './client/index.js'], // assumes your entry point is the index.js in the root of your project folder
  mode: 'development',
  output: {
    path: path.join(__dirname, '/public'), // assumes your bundle.js will also be in the root of your project folder
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/template.html',
    }),
    new RemovePlugin({
      before: {
        test: [
          {
            folder: './public',
            method: () => true,
          },
        ],
        exclude: ['./public/images'],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        // exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
