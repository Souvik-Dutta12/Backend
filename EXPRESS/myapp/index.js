const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World23')
// })

// GET method route
// app.all('/secret', (req, res, next) => {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
app.get('/about', (req, res) => {
  res.send('about')
})
app.get('/random.text', (req, res) => {
  res.send('random.text')
})
app.get(/a/, (req, res) => {
  res.send('/a/')
})
// app.get(/.*fly$/, (req, res) => {
//   res.send('/.*fly$/')
// })

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// app.METHOD(PATH, HANDLER)


//----------Routing------------
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })
// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })
// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })


//----------static----------
// app.use(express.static('public'))
// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))