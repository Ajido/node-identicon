'use strict';

const path = require('path')
const webpack = require('webpack');

module.exports = {
  entry: {
    'identicon': path.join(__dirname, 'identicon.js'),
    'identicon.min': path.join(__dirname, 'identicon.js'),
  },
  devtool: '#source-map',
  output: {
    path: './dist',
    filename: '[name].js',
    library: 'identicon',
    libraryTarget: 'umd'
  },
  externals: {
    canvas: 'canvas'
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
