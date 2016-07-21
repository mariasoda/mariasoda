var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var ChatArchive = [];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});


app.get('/', function(req, res) {
  res.send('Hey, nerds!!');
});

io.on('connection', function(socket){
	console.log("New Client Connection");


	socket.on("chat message", function(msg){
		ChatArchive.push(msg);
		io.emit('chat message', msg);
	});

    socket.on('chat message', function(msg){


      var msgSize=msg.text.length;


      request("http://pokeapi.co/api/v2/pokemon") + msgSize + "&type=id", function(){

        if(msgSize >= 723){
            msgSize= math.floor(math.random()*(723-0)+0);
        }


          msg.text = 
          io.emit("chat message", msg);
          console.log(msgSize);
          chat.push(msg);
        }

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