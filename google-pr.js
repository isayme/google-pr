var request = require('request');
var checksum = require('pagerank-checksum');

var pkg = require('./package');

var USER_AGENT = pkg.name + ' ' + pkg.version;

exports.query = function(domain, callback) {
  if ('string' != typeof domain) {
    throw new TypeError('domain must be string');
  }

  if ('function' != typeof callback) {
    throw new Error('callback required');
  }

  request({
    method: 'GET',
    url: 'http://toolbarqueries.google.com/tbr',
    qs: {
      client: 'navclient-auto',
      features: 'Rank',
      ch: checksum(domain),
      q: 'info:' + domain
    },
    headers: {
      'User-Agent': USER_AGENT
    },
    encoding: 'utf8',
    gzip: true
  }, function(error, response, body) {
    if (error) {
      return callback(error);
    }

    if (response.statusCode !== 200) {
      var msg = 'PR request fail with statusCode: ' + response.statusCode;
      error = new Error(msg);
      return callback(error);
    }

    var arr = body.split(':');
    var pr = parseInt(arr[arr.length - 1]);
    callback(null, pr);
  });
};
