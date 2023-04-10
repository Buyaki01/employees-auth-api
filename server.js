const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const PORT = process.env.PORT || 3500 

//custom middleware logger
app.use(logger)

//Cross Origin Resourse Sharing
app.use(cors(corsOptions))

//Middleware to handle form data
app.use(express.urlencoded({ extended: false }))

//built-in middleware for JSON
app.use(express.json())

//Serve static files
app.use('/', express.static(path.join(__dirname, '/public')))

app.use('/', require('./routes/root'))
app.use('/employees', require('./routes/api/employees'))

//Route Handlers
app.get('/hello(.html)?', (req, res, next) => {
  console.log('attempted to load hello.html')
  next()
}, (req, res) => {
  res.send('Hello World!')
})

app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')){
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  }else if(req.accepts('json')){
    res.json({ error: "404 Not Found" })
  }else{
    res.type('txt').send("404 Not Found")
  }
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
