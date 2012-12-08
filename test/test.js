var identicon = require('../index');
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
    }
}
