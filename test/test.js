var identicon = require('../identicon');
var Image = require('canvas').Image;

exports['identicon'] = {
    generate : function (test) {
        identicon.generate('test', 40, function(err, buffer) {
            if (err) throw err;

            var img = new Image;
            img.src = buffer;

            test.ok(img.width === 40);
            test.ok(img.height === 40);

            test.done();
        });
    },
    gen : function (test) {
        identicon.gen('test', 50, function(err, buffer) {
            if (err) throw err;

            var img = new Image;
            img.src = buffer;

            test.ok(img.width === 50);
            test.ok(img.height === 50);

            test.done();
        });
    },
    generateSync : function (test) {
        var img = new Image;
        img.src = identicon.generateSync('test', 40);

        test.ok(img.width === 40);
        test.ok(img.height === 40);

        test.done();
    },
    genSync : function (test) {
        var img = new Image;
        img.src = identicon.genSync('test', 50);

        test.ok(img.width === 50);
        test.ok(img.height === 50);

        test.done();
    }
}
