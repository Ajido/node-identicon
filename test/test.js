'use strict';

var assert = require('assert');
var crypto = require('crypto');

var Image = require('canvas-browserify').Image;
var identicon = require('../identicon');

describe('generate', function() {
  it('should be generated 60x60 identicon', function(done) {
    identicon.gen({ id: 'test', size: 60 }, function(err, buffer) {
      if (err) return done(err);

      var img = new Image();
      img.src = buffer;

      assert.equal(img.width, 60);
      assert.equal(img.height, 60);

      done();
    });
  });

  it('should be generated 50x50 identicon', function(done) {
    identicon.generate('test', 50, function(err, buffer) {
        if (err) return done(err);

        var img = new Image();
        img.src = buffer;

        assert.equal(img.width, 50);
        assert.equal(img.height, 50);

        done();
    });
  });

  it('should be generated 40x40 identicon', function(done) {
    identicon.gen('test', 40, function(err, buffer) {
      if (err) return done(err);

      var img = new Image();
      img.src = buffer;

      assert.equal(img.width, 40);
      assert.equal(img.height, 40);

      done();
    });
  });
});

describe('generateSync', function() {
  it('should be generated 60x60 identicon', function() {
    var buffer = identicon.genSync({ id: 'test', size: 60 });

    var img = new Image();
    img.src = buffer;

    assert.equal(img.width, 60);
    assert.equal(img.height, 60);
  });

  it('should be generated 50x50 identicon', function() {
    var buffer = identicon.generateSync('test', 50);

    var img = new Image();
    img.src = buffer;

    assert.equal(img.width, 50);
    assert.equal(img.height, 50);
  });

  it('should be generated 40x40 identicon', function() {
    var buffer = identicon.genSync('test', 40);

    var img = new Image();
    img.src = buffer;

    assert.equal(img.width, 40);
    assert.equal(img.height, 40);
  });
});
