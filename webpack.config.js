'use strict';

module.exports = {
  entry: './identicon.js',
  devtool: '#source-map',
  output: {
    path: './dist',
    filename: 'identicon.js',
    library: 'identicon',
    libraryTarget: 'umd'
  },
  externals: {
    canvas: 'canvas'
  },
  resolve: {
    extensions: ['', '.js']
  }
};
