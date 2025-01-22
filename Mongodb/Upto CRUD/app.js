const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req,res)=>{
    res.send("hey");
})

// create
app.get('/create',async (req,res)=>{
    let createduser = await userModel.create({
        name:"harshika",
        email:"harsh@gmail.com",
        username:"harsh"
    })
    res.send(createduser);
})

// update
app.get('/update',async (req,res)=>{
    let updateduser = await userModel.findOneAndUpdate({username: "harsh"}, {name: "harsh"}, {new:true});
    res.send(updateduser);
})


// read
app.get('/read',async (req,res)=>{
    let users = await userModel.find();
    res.send(users);
})
// app.get('/read',async (req,res)=>{
//     let users = await userModel.findOne({username: harsh});
//     res.send(users);
// })



//delete
app.get('/delete',async (req,res)=>{
    let userdel = await userModel.findOneAndDelete({name: "harsh"});
    res.send(userdel);
})
app.listen(3000);