const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/saludar", function(req,res){
    res.send("Holaaaaaa");
});

app.get("/imagen",function(req,res){
    res.sendFile(__dirname + "/sarange.jpg");
});

app.listen(3337);