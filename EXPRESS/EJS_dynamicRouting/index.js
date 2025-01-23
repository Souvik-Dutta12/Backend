const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
//for set up the ejs
app.set('view engine', 'ejs');


app.get("/", function(req, res){
    res.render("index");
});


//dynamic route
app.get("/profile/:username", function(req, res){
    res.send(`Welcome,${req.params.username}`);
});
app.get("/profile/:username/:age", function(req, res){
    // res.send(req.params);
    res.send(`Welcome,${req.params.username}, my age is ${req.params.age}`);
    
});


app.listen(3000, function(){
    console.log("Its running");
});