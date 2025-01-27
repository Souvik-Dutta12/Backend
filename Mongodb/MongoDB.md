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



