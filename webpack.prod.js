const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '/public'), // assumes your bundle.js will also be in the root of your project folder
    filename: '[name].[contenthash].bundle.js',
  },

  optimization: {
    // minimize: true,
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin({ test: /\.js(\?.*)?$/i }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
});
