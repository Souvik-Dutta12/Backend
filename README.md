
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

# Express JS
Express is a npm package. It is a frame work. It manages everything from receving the request and giving the response.

## Documentation
[Express JS Documentation ](https://expressjs.com/)

## Installing
Install Express in your project folder and save it in the dependencies list. For example:
```javascript
npm i express
```
## Basic routing
With the help of routing we can send respond to the user.
```javascript
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```
Respond to POST request on the root route ( / ), the application’s home page:
```javascript
app.post('/', (req, res) => {
  res.send('Got a POST request')
})
```
Respond to a PUT request to the /user route:
```javascript
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
```
Respond to a DELETE request to the /user route:
```javascript
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
```


## Serving static files in Express

The function signature is :
```javascript
express.static(root, [options])
```
For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public :
```javascript
app.use(express.static('public'))
```
Now, you can load the files that are in the public directory :
```javascript
http://localhost:3000/images/kitten.jpg
http://localhost:3000/stylesheets/style.css
http://localhost:3000/javascripts/blog.js
```
However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve :
```javascript
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
```
## Error handler
Error handler are use for handling the errors
```javascript
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something Went Wrong, We don't have any idea");
})
```

## Cookie
Cookie is used for log in and log out from an form or portal. For this we use a pacakge name cookie-parser
```javascript
npm i cookie-parser
```
## ejs
ejs is similar to html but here we can do the calculations which is not possible in html.

For installation,
```javascript
npm i ejs
```
For contine with ejs make a views folder. In which you make ejs file and in index.js file you add,
```javascript
app.set('view engine', 'ejs');
```
## Dynamic routing
Suppose two routes have,
```javascript
/profile/souvik
/profile/suvo
```
here only name part is dynamic here we can use only one route instead of creating many routes.

Like that,
```javascript
app.get("/profile/:Username",(req,res)=>{
  res.send(req.params.Username);
});
```
Here with the help of "req.params" we can get the dynamic part at backend.

req.params is an Object.

# MongoDB
MongoDB is a database(noSQL format) which stores data in object format. 

The flow of mongodb is like that,
```javascript
Database  --> Collection  --> Document
```
In code,
```
CODE                            DATABASE
--------------------------------------------------------------------------------------------------
mongoose.connect  -->           database create
mongoose.model    -->           Collection(model create)
CREATE Code       -->           Document
```
## Documentation
[MongoDB Documentation ](https://www.mongodb.com/docs/manual/introduction/)

## Schema
Schema is a format in which we identify how the data become store in database. 
For example,
```javascript
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String
})
```
And with the help of that schema we made the models or collections.
```javascript
module.exports = mongoose.model("users", userSchema);
```
## CRUD Operations(Create, Read, Update, Delete Operations)

### Create Operation
With the help of create operation we crate users
```javascript
app.get('/create', async (req,res)=>{
    let createdUser = await userModel.create({
        name: "Souvik",
        email: "souvikdutta5122005@gmail.com",
        username: "Souvik-Dutta12"
    })
    res.send(createdUser);
})
```
### Read Operation
We can read all or particular one user at a time.
```javascript
app.get('/read', async (req,res)=>{
    
    let User = await userModel.find();
    res.send(User);
})
```
It read all the user and returns an array.i.e. find() method all ways return an array whether it is empty or not.
```javascript
app.get('/read', async (req,res)=>{
    
    let User = await userModel.findOne({username: "Souvik-Dutta12"});
    res.send(User);
})
```
It read only onr user whose username is "Souvik-Dutta12".And findOne() method allways return an object.
### Update Operation
It updates the user details.
```javascript
app.get('/update', async (req,res)=>{
    
    let updatedUser = await userModel.findOneAndUpdate({username: "suvo-512"}, {name: "suvo"}, {email: "suvo@gmail.com"});
    res.send(updatedUser);
})
```
### Delete Operation
It delete user details.
```javascript
app.get('/delete', async (req,res)=>{
    
    let User = await userModel.findOneAndDelete({username: "Souvik-Dutta12"});
    res.send(User);
})
```

# Authentication & Authorization
Authentication is the process by which you can identify, is the user be corect or not.
## Use of bcrypt
brcypt is a pacakage by which the password is encoded or decoded.Because anyone does not want give the password to the others.

### Installation
```javascript
npm i bcrypt
```

### Encryption of Password
```javascript
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("password", salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash);
        });
    });
``` 
Here hash is your encrytpted password.
### Decryption of Password
Actually here the main password and the hashed password are compared. If they are same it returns true otherwise it returns false.

```javascript
    bcrypt.compare("password", "hashed password", function(err, result) {
        // result == true or result == false
        console.log(result);
    });
``` 

## Cookies
Cookies are string which is automatically go with your respond by which you do not require to log in multiple times.

That type of string are created with the help of jwt(jsonwebtoken)

### Installation
```javascript
npm i cookie-parser jsonwebtoken
```

### Create the Token
```javascript
let token = jwt.sign({email: "abcd74@gmail.com"}, "secret");
```
That "sceret" should be secret Otherwise your data can be accessed by someone.

And that token we set as cookie.
```javascript
res.cookie("token",token);
```
```javascript
let data = jwt.verify(req.cookies.token,"secret");
```
Here req.cookies.token send the token and with the help of jwt.verify we got the "abcd74@gmail.com" email id.






