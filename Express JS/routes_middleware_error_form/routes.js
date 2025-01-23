const express = require('express');

const app = express();


//form handling
app.use(express.json());
app.use(express.urlencoded({extended: true}));



//middleware
app.use(function(req, res, next ){
    console.log('middleware chala');
    next();
});
app.use(function(req, res, next ){
    console.log('middleware chala aur akbar');
    next();
});



//routes 
app.get("/", function(req, res){
    res.send("Champian mera anuj");
});
app.get("/profile", function(req, res){
    res.send("Champian uska coach");
})
app.get("/about", function(req, res, next){
    return next(new Error("something went wrong"))
});



//error handleing
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something Went Wrong, We don't have any idea");
  })


app.listen(3000);