var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", 'ejs');


app.get('/', function(req, res){
  res.render('home')
  // res.send("You're on the home page!")
})

app.get('/review/:thing', function(req,res){
  var thing = req.params.thing;
  res.render('review', {thingVar: thing})
})

app.get('/posts', function(req, res) {
  var posts = [
    {title: "Post1", author: "Frank"},
    {title: "Ann's Post2", author: "Ann"},
    {title: "Tess' Post3", author: "Tess"}
  ]

  res.render('posts', {posts: posts})
})

app.listen(3000, function(){
  console.log("Starting on Port 3000")
})
