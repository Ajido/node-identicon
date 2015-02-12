'use strict';

var assert = require('assert');
var crypto = require('crypto');

var Image = require('canvas').Image;
var identicon = require('../identicon');

describe('generate', function() {
  it('should be generated 60x60 identicon', function(done) {
    identicon.gen({ id: 'test', size: 60 }, function(err, buffer) {
      if (err) return done(err);

      var img = new Image();
      img.src = buffer;

      assert.equal(img.width, 60);
      assert.equal(img.height, 60);

      var hash = crypto.createHash('md5').update(buffer).digest('hex');
      assert.equal(hash, '4f443f43407a07538bfeed292d230753');

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

        var hash = crypto.createHash('md5').update(buffer).digest('hex');
        assert.equal(hash, '9a1ac1f3a3350013a0e816c353cd9fdf');

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

      var hash = crypto.createHash('md5').update(buffer).digest('hex');
      assert.equal(hash, 'a8c15500bed9d09f59052c50b3be7fcd');

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

    var hash = crypto.createHash('md5').update(buffer).digest('hex');
    assert.equal(hash, '4f443f43407a07538bfeed292d230753');
  });

  it('should be generated 50x50 identicon', function() {
    var buffer = identicon.generateSync('test', 50);

    var img = new Image();
    img.src = buffer;

    assert.equal(img.width, 50);
    assert.equal(img.height, 50);

    var hash = crypto.createHash('md5').update(buffer).digest('hex');
    assert.equal(hash, '9a1ac1f3a3350013a0e816c353cd9fdf');
  });

  it('should be generated 40x40 identicon', function() {
    var buffer = identicon.genSync('test', 40);

    var img = new Image();
    img.src = buffer;

    assert.equal(img.width, 40);
    assert.equal(img.height, 40);

    var hash = crypto.createHash('md5').update(buffer).digest('hex');
    assert.equal(hash, 'a8c15500bed9d09f59052c50b3be7fcd');
  });
});
