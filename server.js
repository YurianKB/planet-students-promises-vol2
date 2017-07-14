var express = require("express");
var app = express();
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
});

app.use("/data", express.static(__dirname + '/data'));
app.use("/static", express.static(__dirname + '/assets'));
app.use("/static", express.static(__dirname + '/node_modules'));


app.listen(1234);
