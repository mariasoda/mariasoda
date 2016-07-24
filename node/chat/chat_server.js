var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');

var ChatArchive = [];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

io.on('connection', function(socket){
	console.log("New Client Connection");



    socket.on('chat message', function(msg){


      var msgSize=msg.text.length;
        if(msgSize >= 723){
            msgSize= math.floor(math.random()*(723-0)+0);
        }

      request("http://pokeapi.co/api/v2/pokemon/" + msgSize , function(err, resp, body){

        body=JSON.parse(body);
          msg.text = body.name;
          io.emit("chat message", msg);
          console.log(msgSize);
          ChatArchive.push(msg);
        });

    });

});

app.get('/get_archive', function(req, res){
	res.send(ChatArchive);
});

app.use(express.static('public'));
app.get('/chat', function(req,res){
  res.sendFile(__dirname + '/chat_client.html');
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});