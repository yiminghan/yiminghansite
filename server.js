var path = require('path');
var express = require('express');

var app = express();

app.set('port', 3030);  
app.use(express.static(__dirname + '/public'));

app.listen(3030, function(err) {
  if (err) {
    return console.error(err);
  }
  
  console.log('Listening at http://localhost:3030/');
});
