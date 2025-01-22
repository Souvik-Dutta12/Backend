const fs = require('fs');
fs.writeFile("hey.txt","hey hello kaise ho ", function(err){
    if(err) console.log(err);
    else    console.log("done")
})


fs.readFile("hey.txt",function (err,data) {
    if(err) console.error(err);
    else    console.log(data)
})

// fs.appendFile("hey.txt","mai to achha hu  ", function(err){
//     if(err) console.log(err);
//     else    console.log("done")
// })



// fs.rename("hey.txt", "hello.txt", function (err) {
//     if (err) console.log(err);
//     else console.log("done")
// })




// fs.copyFile("hello.txt", "./copy/copy.txt",function(err){
//     if(err) console.log(err);
//     else    console.log("done")
// })



// //remove the hello.txt file
// fs.unlink("hello.txt",function(err){
//     if(err) console.log(err);
//     else    console.log("done")
// })




// fs.rm("./copy",{recursive: true},function(err){
//     if(err) console.log(err);
//     else    console.log("removed")
// })