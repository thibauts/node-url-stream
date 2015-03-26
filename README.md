url-stream
==========
### Transforms a stream of URLs into a stream of their body content

Takes a stream of URLs separated by newlines as input, and outputs the corresponding body contents.


Installation
------------

``` bash
$ npm install url-stream
```


Usage
-----

``` javascript
var urlStream = require('url-stream');

var transform = urlStream.createStream();
transform.on('error', function(err) {
  console.error(err);
});

process.stdin.pipe(transform).pipe(process.stdout);
``` 

# level 1
## level 2
### level 3
#### level 4

