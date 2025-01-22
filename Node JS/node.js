const fs = require('fs');
fs.writeFile("hey.txt","I am do that again", function(err){
    if(err) console.error(err);
    else    console.log("done")
})

/*

//Read File
fs.readFile("hey.txt",function (err,data) {
    if(err) console.error(err);
    else    console.log(data)
})


//Append File 
fs.appendFile("hey.txt"," because, I forgot all backend", function(err){
    if(err) console.error(err);
    else    console.log("done")
})


//Rename the File
fs.rename("hey.txt", "hello.txt", function (err) {
    if (err) console.error(err);
    else console.log("done")
})
fs.rename("hello.txt", "hey.txt", function (err) {
    if (err) console.error(err);
    else console.log("done")
})


//Copy any File
fs.copyFile("hello.txt", "./copy/copy.txt",function(err){
    if(err) console.log(err);
    else    console.log("done")
})


//remove the hello.txt file
fs.unlink("hello.txt",function(err){
    if(err) console.log(err);
    else    console.log("done")
})

//Delete Folder
fs.rm("./copy",{recursive: true},function(err){
    if(err) console.log(err);
    else    console.log("removed")
})


//Create a new folder
fs.mkdir("./copy/copy.txt", { recursive: true },function(err){
    if(err) console.error(err);
    else    console.log("done");
})


//Read a file
fs.readFile("hey.txt",function(err){
    if(err) console.error(err);
    else    console.log("done");
})
    */