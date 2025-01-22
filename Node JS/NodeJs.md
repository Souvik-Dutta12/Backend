
# Node JS

Node JS is a javasscript rutime environment



## Documentation

[Ndoe JS Documentation ](https://nodejs.org/api/fs.html)


## npm 
Borrow someones code

## Initailization
npm init is use to make a package.json file
```bash
  npm init
```


## fs Module

First you need to reuire fs module.
```javascript
const fs = require('fs');
```
### create a file
Syntax : fs.writeFile(filename,data,callback)

It create a file with the data
```javascript
fs.writeFile("hey.txt","I am do that again", function(err){
    if(err) console.error(err);
    else    console.log("done")
})
```
After run the above code hey.txt file will be created in which "I am di that again" is written.
### appendfile
Syntax : fs.appendFile(filename,data,callback)

It append more things in a file
```javascript
 fs.appendFile("hey.txt"," because, I forgot all backend", function(err){
    if(err) console.error(err);
    else    console.log("done")
})
```
After run this code " because, I forgot all backend" this line is also added in hey.txt file
### copyfile
Syntax : fs.copyFile(filename(whose copy you made),filename(in which you make the copy),callback)

It copy the file
```javascript
 fs.copyFile("hello.txt", "./copy/copy.txt",function(err){
    if(err) console.log(err);
    else    console.log("done")
})
```
Make a copy folder then run this code.
### rename 
Syntax : fs.rename(filename,new filename,callback)

It rename the file
```javascript
fs.rename("hey.txt", "hello.txt", function (err) {
    if (err) console.error(err);
    else console.log("done")
})
```
It change the name of hey.txt file to change.txt 
```javascript
fs.rename("hello.txt", "hey.txt", function (err) {
    if (err) console.error(err);
    else console.log("done")
})
```
It change the name of hey.txt file to change.txt
###unlink
Syntax : fs.unlink(filename,(,options),callback)

It delete file
```javascript
fs.unlink("hey.txt",function(err){
    if(err) console.log(err);
    else    console.log("done")
})
```
### createfoldre

```javascript
const fs = require('fs');
```
read file
```javascript
const fs = require('fs');
```
createfile
```javascript
const fs = require('fs');
```