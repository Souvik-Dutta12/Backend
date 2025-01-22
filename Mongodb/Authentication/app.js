const cookieParser = require('cookie-parser');                       .1
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(cookieParser())                                              

app.get("/", function (req, res) {

    //-----cookie---------
    // res.cookie("name", "Souvik");                                    .1
    // res.send("done");





    //------bcrypt------
    /*bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("polololooooooo", salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash);
        });
    });
    //------compare---------
    bcrypt.compare("polololooooooo", "$2b$10$MSn30ZUksmewrCGOT9lga.GD6yn47U82tQdQq4deuPzy/6DNmyTUO", function(err, result) {
        console.log(result)
    });*/







    //--------dcrypt    OR      jwt--------
    let token = jwt.sign({email: "suvo@gmail.com"}, "secret");
    res.cookie("token", token);
    res.send("done");
    
    
})
app.get("/read", function (req, res) {
    let data = jwt.verify(req.cookies.token, "secret");                                        
    console.log(data);
})

app.listen(3000);