node-dank-csv
=============

A simple CSV file parser


example
=======

```js
var parse = require('dank-csv');

var data = 'col1, col2, col3\n1234, 1234, 1234\n1235, asdf, fds23';

console.log(parse(data));

/*

[ { col1: '1234',
    col2: '1234',
    col3: '1234' },
  { col1: '1235',
    col2: 'asdf',
    col3: 'fds23' } ]
*/

```

api
===

parse(<string> data, <regexp> columnSeparator);

* data is required and is the string value to be parsed
* columnSeparator is optional and defaults to `/,/gi`

license
=======

(MIT License)

Copyright (c) 2013 Dan VerWeire dverweire@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
