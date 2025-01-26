const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


app.use(cookieParser())                                              


//set the cookie
app.get("/",(req,res)=>{

    //create token as cookie
    let token = jwt.sign({email: "debasisdutta74@gmail.com"}, "secret");
    res.cookie("token",token);


    //encryption
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("Souvik2005", salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash);
        });
    });

    //decryption or compare
    bcrypt.compare("Souvik2005", "$2b$10$eZurYkrKhJnQ5kn8FroS1eTLYgwqWNaeLWs10BjEeI/lgzSnD/Fwi", function(err, result) {
        // result == true
        console.log(result);
    });

    res.send("done");
})
//read the cookie
app.get("/read",(req,res)=>{
    
    let data = jwt.verify(req.cookies.token,"secret");
    
    console.log(data);
    res.send("read page");


})

app.listen(3000);