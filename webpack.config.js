'use strict';

const webpack = require('webpack');

module.exports = {
  entry: {
    'identicon': './identicon.js',
    'identicon.min': './identicon.js',
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
