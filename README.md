google-pr
=========
A nodejs module to parse PR value of a specified domain.
  
~~But developers prefer to request the query in client side, I will refine it for RequireJS.~~  
Sorry, I tried for it, but failed. The methods I tried are :  

 1. AJAX. Google donot support it since Ajax is cross domain request, I mean google donot supoort cross domain request.
 2. JSONP. There will `SyntaxError` because the return value of google-pr is `Rank_1:1:9` like, not JavaScript syntax.

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