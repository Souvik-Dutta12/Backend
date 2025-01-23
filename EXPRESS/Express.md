# Express
Express is a npm package. It is a frame work. It manages everything from receving the request and giving the response.

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