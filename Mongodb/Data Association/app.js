const express = require('express');
const app =express();
const userModel = require("./models/user");
const postModel = require("./models/post");
const user = require('./models/user');

app.get("/", function(req, res){
    res.send("hey");
})
app.get("/create", async function(req, res){
    let user = await userModel.create({
        username: "Souvik",
        age: 20,
        email: "suvo@gmail.com"
    });
    res.send(user);
})
app.get("/post/create", async function(req, res){
    let post = await postModel.create({
        postdata: "hello saare log kaise ho",
        user: "67278849fd26dc2f61d7788c"
    })
    let user = await userModel.findOne({_id: "67278849fd26dc2f61d7788c"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
})

app.listen(3000);