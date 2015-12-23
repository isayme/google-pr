google-pr
=========
A nodejs module to parse google PR of a specified domain.

example
=======
```javascript
var gpr = require('google-pr');

gpr.query('google.com', function(err, val){
  if (null != err) {
    console.log(err);
  } else {
    console.log('PR : ' + val);
  }
});
```
