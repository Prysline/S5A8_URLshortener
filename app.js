const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/shorting-url')
const db = mongoose.connection

db.on('error', ()=> {
  console.log('mongodb error!')
})
db.once('open', ()=> {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  console.log(`Connected index.`)
  res.send('Connected index.')
})

// Sever: listen
app.listen(port, ()=> {
  console.log(`Express is running on http://localhost:${port}`)
})