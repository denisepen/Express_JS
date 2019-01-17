var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send("You're on the home page!")
})

app.listen(3000, function(){
  console.log("Starting on Port 3000")
})
