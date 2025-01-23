## It Is A Documentation of Express.Js (1st)
** ALL PROCESSES WHICH ARE MENTiONED HERE ALL ARE DONE WRT, MY PC ONLY  

## 1. Installing

Step 1 : At first make a folder using the below command
```
mkdir myapp
```
Use the below command to enter the folder
```
cd myapp
```
Make the package.json in the myapp folder permanently


Step 2 : Use the npm init command to create a package.json file for your application. 
```
npm init
```

Step 3 : Install Express in the myapp directory and save it in the dependencies list. For example:
```
npm install express
```

## 2. Basic Program (Hello World)

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
For every other path, it will respond with a 404 Not Found.

First create a directory named myapp, change to it and run npm init. Then, install express as a dependency, as per the installation guide.

In the myapp directory, create a file named index.js and copy the code from the example above.

Then, load http://localhost:3000/ in a browser to see the output.

To run the terminal automatically at first run the program. Example :
```
node "c:\Users\debas\OneDrive\Desktop\Coding\All\EXPRESS\myapp\index.js"
```
Then convert the "node" into "nodemon". Example : 
```
nodemon "c:\Users\debas\OneDrive\Desktop\Coding\All\EXPRESS\myapp\index.js"
```


## 3. Express application generator

Step 1 : Use the application generator tool, express-generator, to quickly create an application skeleton.
```
npx express-generator
```

Step 2 : For earlier Node versions, install the application generator as a global npm package and then launch it:
```
npm install -g express-generator
```
```
express 
```

Step 3 : Display the command options with the -h option:
```
express -h
```
And the OUTPUT will be :
```
 Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
        --no-view       generate without view engine
    -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory
```
i.e, For an example suppose ejs run with the express for that the command will be :
```
express -e --ejs
```


## 4. Basic routing

Route definition takes the following structure:
```
app.METHOD(PATH, HANDLER)

Where:
    app is an instance of express.
    METHOD(get,post,delete...) is in lowercase.
    PATH is a path on the server.
    HANDLER is the function executed when the route is matched.
```
Respond with Hello World!
```
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```
Respond to POST request on the root route ( / ), the application’s home page:
```
app.post('/', (req, res) => {
  res.send('Got a POST request')
})
```
Respond to a PUT request to the /user route:
```
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
```
Respond to a DELETE request to the /user route:
```
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
```


## 5. Serving static files in Express

The function signature is :
```
express.static(root, [options])
```
For example, use the following code to serve images, CSS files, and JavaScript files in a directory named public :
```
app.use(express.static('public'))
```
Now, you can load the files that are in the public directory :
```
http://localhost:3000/images/kitten.jpg
http://localhost:3000/stylesheets/style.css
http://localhost:3000/javascripts/blog.js
```
However, the path that you provide to the express.static function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve :
```
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
```
## After //ExpressBasic.md file(2nd)
** ALL PROCESSES WHICH ARE MENTiONED HERE ALL ARE DONE WRT, MY PC ONLY

## 5. Routing
