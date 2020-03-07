'use strict';

const path = require('path')
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    'identicon': path.join(__dirname, 'identicon.js'),
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'identicon',
    libraryTarget: 'umd'
  },
  externals: {
    canvas: 'canvas'
  },
  resolve: {
    extensions: ['.js']
  }
};
