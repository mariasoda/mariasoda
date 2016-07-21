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

    socket.on('poke message', function(msg){

      var pokeNum = "#poke-number"

      request("http://pokeapi.co/api/v2/pokemon") + pokeNum + "&type=id", function(err, resp, body){

        body = JSON.parse(body);
        console.log(body);

        if(body.pokemon.number <= 723){
          msg.username = "Chat Bot";
          msg.text = "No Pokemon with index number " + pokeNum;
          io.emit("chat message", msg);
          chat.push(msg);
        }else{
          $.ajax({
            type: "GET",
            url: "http://pokeapi.co/api/v2/pokemon",
            data: {id: pokeNum,
            name: "",
          },
          success: ajaxHandler
          });

          
          msg.text = 
          io.emit("poke message", msg);
          chat.push(msg);
        }
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