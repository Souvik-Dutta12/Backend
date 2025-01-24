const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req,res)=>{
    res.send("hey");
})
app.get('/create', async (req,res)=>{
    let createdUser = await userModel.create({
        name: "Souvik",
        email: "souvikdutta5122005@gmail.com",
        username: "Souvik-Dutta12"
    })
    res.send(createdUser);
})
app.get('/update', async (req,res)=>{
    
    let updatedUser = await userModel.findOneAndUpdate({username: "suvo-512"}, {name: "suvo"}, {email: "suvo@gmail.com"});
    res.send(updatedUser);
})

//find return an array
//and findOneAndUpdate returns an object
app.get('/read', async (req,res)=>{
    
    let User = await userModel.find({username: "Souvik-Dutta12"});
    res.send(User);
})
app.get('/delete', async (req,res)=>{
    
    let User = await userModel.findOneAndDelete({username: "Souvik-Dutta12"});
    res.send(User);
})

app.listen(3000);