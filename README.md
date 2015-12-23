google-pr
=========
A nodejs module to parse google PR of a specified domain.

example
=======
The query is asynchronous, so you need add a callback function, otherwise we will return a error~

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