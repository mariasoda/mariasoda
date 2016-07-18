var express = require("express");
var app = express();

var carPrice;
var carColor;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/set", function(req, res){
    console.log(req.query.price);
    carPrice = req.query.price;
    console.log(req.query.color);
    carColor = req.query.color;
});

app.get("/retrieve_price", function(req, res){
	var formResponse="";
	formResponse += "The car price is: ";
	formResponse += carPrice;
	formResponse += "The car color is: ";
	formResponse += carColor;

    res.send(formResponse);
    console.log(formResponse);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});