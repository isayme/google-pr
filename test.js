var gpr = require('./google-pr');

gpr.query('google.com', function(err, val){
  if (null != err) {
    console.log(err);
  } else {
    console.log('PR : ' + val);
  }
});