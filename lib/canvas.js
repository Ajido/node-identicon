'use strict';

var Canvas = module.exports = function Canvas (w, h) {
  var canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  return canvas;
}

Canvas.Image = function () {
  return document.createElement('img');
}
