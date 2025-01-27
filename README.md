
# Node JS

Node JS is a javasscript rutime environment.



## Documentation

[Ndoe JS Documentation ](https://nodejs.org/api/fs.html)


## npm (Node Package Manager)
Borrow someones code.

## Initailization
npm init is use to make a package.json file
```bash
  npm init
```


## fs Module

First you need to require fs module.
```javascript
const fs = require('fs');
```
### create a file
Syntax : fs.writeFile(filename,data,callback)

It creates a file with the data
```javascript
fs.writeFile("hey.txt","I am do that again", function(err){
    if(err) console.error(err);
    else    console.log("done");
})
```
After run the above code hey.txt file will be created in which "I am di that again" is written.
### appendfile
Syntax : fs.appendFile(filename,data,callback)

It appends more things in a file
```javascript
 fs.appendFile("hey.txt"," because, I forgot all backend", function(err){
    if(err) console.error(err);
    else    console.log("done");
})
```
After run this code " because, I forgot all backend" this line is also added in hey.txt file
### copyfile
Syntax : fs.copyFile(filename(whose copy you made),filename(in which you make the copy),callback)

It copy the file
```javascript
 fs.copyFile("hello.txt", "./copy/copy.txt",function(err){
    if(err) console.log(err);
    else    console.log("done");
})
```
Make a copy folder then run this code.
### rename 
Syntax : fs.rename(filename,new filename,callback)

It rename the file
```javascript
fs.rename("hey.txt", "hello.txt", function (err) {
    if (err) console.error(err);
    else console.log("done");
})
```
It change the name of hey.txt file to change.txt 
```javascript
fs.rename("hello.txt", "hey.txt", function (err) {
    if (err) console.error(err);
    else console.log("done");
})
```
It change the name of hey.txt file to change.txt
### unlink
Syntax : fs.unlink(filename,(,options),callback)

It delete file
```javascript
fs.unlink("hey.txt",function(err){
    if(err) console.log(err);
    else    console.log("done");
})
```
### rm
Syntax : fs.rm(path[,options],callback)

It deletes folder
```javascript
fs.rm("./copy",function(err){
    if(err) console.log(err);
    else    console.log("removed");
})
```
But it create problem, so we need to give the [option]
```javascript
fs.rm("./copy",{recursive: true},function(err){
    if(err) console.log(err);
    else    console.log("removed");
})
``` 

### mkdir
Syntax : fs.mkdir(path[,options],callback)

It creates a new folder
```javascript
fs.mkdir("./copy/copy.txt", { recursive: true },function(err){
    if(err) console.error(err);
    else    console.log("done");
})
```
### readFile
Syntax : fs.readFile(path[,options],callback)
```javascript
fs.readFile("hey.txt",function(err){
    if(err) console.error(err);
    else    console.log("done");
})
```

## http Module

First you need to require fs module.
```javascript
const http = require('http');
```
### Create a server

With the help of that code you can create a server
```javascript
const server =  http.createServer(function(req,res){
    res.end("hello world");

})
server.listen(3000);
```

## Installing & Uninstalling packages

### install package
For installing any pacakage use "npm i packagename" command for example,
```javascript
npm i express
```
with the help of that command express will install to your system and a folder(node_modules) will create.

### installing particular package
For installing any pacakage use "npm i packagename@version" command for example,
```javascript
npm i accessibility@3.0.9
```
with the help of that command accessibility of version 3.0.9 will install to your system.
### uninstall package
For uninstalling any pacakage use "npm uninstall packagename" command for example,
```javascript
npm uninstall express
```
with the help of that command express will be uninstalled.
