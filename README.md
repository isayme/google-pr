google-pr
=========
A nodejs module to parse PR value of a specified domain.
But developers prefer to request the query in client side, I will refine it for RequireJS.

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
