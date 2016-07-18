var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hey, nerds!!');
});

app.get('/goodbye', function (req, res) {
  res.send('Goodbye nerds!');
});

app.get('/wow', function (req, res) {
  res.send('This is a page <em>with</em> words B)');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});