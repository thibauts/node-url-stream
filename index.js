var es = require('event-stream');
var request = require('request');
var combine = require('stream-combiner');

function createStream() {
  var stream = combine(
    es.split('\n'),
    es.map(function(url, callback) {
      if(!url) return callback(null, '');
      var req = request(url, function(err, res, body) {
        if(err) stream.emit('error', err);
        callback(null, body);
      });
      req.on('error', stream.emit.bind(stream));
    }),
    es.join('\n')
  );
  return stream;
}

module.exports.createStream = createStream;

