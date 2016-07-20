var express = require('express');
var app = express();
var http= require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.send('Hey, nerds!!');
});

io.on('connection', function(socket){
	console.log("New Client Connection");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});