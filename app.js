const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000
require('./config/mongoose')
const routes = require('./routes')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// Sever: listen
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})