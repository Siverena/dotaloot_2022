// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); //to access built-in plugins

const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};
