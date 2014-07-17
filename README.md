# node-identicon

[Identicon](https://github.com/donpark/identicon) generator on Node.js  
[![Build Status](https://travis-ci.org/Ajido/node-identicon.svg?branch=master)](https://travis-ci.org/Ajido/node-identicon)

## Installation

```bash
$ npm install identicon
```

## Example

```javascript
var identicon = require('identicon');
var fs = require('fs');

// Asynchronous API (base_string, size, callback)
identicon.generate('ajido', 150, function(err, buffer) {
    if (err) throw err;

    // buffer is identicon of the PNG format
    fs.writeFileSync(__dirname + '/identicon.png', buffer);
});

// Synchronous API (base_string, size)
var buffer = identicon.generateSync('ajido', 40);
```

![identicon](https://lh3.googleusercontent.com/-7UnAKWoGK8M/UMOSN2z5vII/AAAAAAA6oSE/GNi39ESzkWE/s150/identicon.png)

## License

(The MIT License)

Copyright (c) 2010-2012 Daiki Kuriyama &lt;dkuriyam@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

