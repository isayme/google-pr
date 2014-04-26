var request = require('request')
  , util = require('util');
 
exports.query = function(domain, callback) {
  if ("string" != typeof domain) {
    var err = new Error('domain should be a string type!');
    return err;
  }
  
  if ("function" != typeof callback) {
    var err = new Error('no callback function found!');
    return err;
  }
  
  // Get PageRank Seed
  var GPR_HASH_SEED = "Mining PageRank is AGAINST GOOGLE'S TERMS OF SERVICE. Yes, I'm talking to you, scammer.";
  var magic = 0x1020345;
 
  for (var i = 0; i < domain.length; i++) {
    magic ^= GPR_HASH_SEED.charCodeAt(i % GPR_HASH_SEED.length) ^ domain.charCodeAt(i);
    magic = (magic >>> 23 | magic << 9) & 0x0ffffffff;
  }

  var checksum = "8" + magic.toString(16);
  var url = util.format("http://toolbarqueries.google.com/tbr?client=navclient-auto&features=Rank&ch=%s&q=info:%s", checksum, domain);

  request(url, function(error, response, body) {
    if (!error && 200 == response.statusCode) {
      var arr = body.split(":");
      callback(null, arr[arr.length - 1]);
    } else {
      var err = new Error('PR request failed!');
      callback(err, -1);
    };
  });
  
  return null;
};