var assert = require('assert')
var gpr = require('../google-pr');

describe('Google PR', function() {
  it('shuold throw if domain not a string', function() {
    assert.throws(function() {
      gpr.query([], function(err, val) {});
    }, TypeError);
  });

  it('shuold throw if callback missed', function() {
    assert.throws(function() {
      gpr.query('test');
    }, Error);
  });

  it('PR of http://google.com should be 9', function(done) {
    gpr.query('http://google.com', function(err, val) {
      assert.equal(val, 9);
      done();
    });
  });

  it('PR of https://google.com should be 9', function(done) {
    gpr.query('https://google.com', function(err, val) {
      assert.equal(val, 9);
      done();
    });
  });

  it('PR of amazon.com should be 8', function(done) {
    gpr.query('amazon.com', function(err, val) {
      assert.equal(val, 8);
      done();
    });
  });

  it('PR of github.com should be 8', function(done) {
    gpr.query('github.com', function(err, val) {
      assert.equal(val, 8);
      done();
    });
  });
});
