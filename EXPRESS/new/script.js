const express = require('express');
const app = express();

//rouute
app.get("/",function(req,res){
  res.send("Champion mera subho");
})


app.get("/profile",function(req,res){
  res.send("Champion coach");
})

app.listen(3000);