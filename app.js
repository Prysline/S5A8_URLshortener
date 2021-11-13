const express = require('express')

const app = express()
const port = 3000
require('./config/mongoose')

app.get('/', (req, res) => {
  console.log(`Connected index.`)
  res.send('Connected index.')
})

// Sever: listen
app.listen(port, ()=> {
  console.log(`Express is running on http://localhost:${port}`)
})