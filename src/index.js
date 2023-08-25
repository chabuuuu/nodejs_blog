
const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const handlebars = require('express-handlebars')

const path = require('path')
const { log } = require('console')


app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}
))
app.use(express.json())

// HTTP LOG
// app.use(morgan('combined'))


//template engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'resources/views'))


//render
app.get('/', (req, res) => {
  res.render('home')
})

//render
app.get('/news', (req, res) => {
  console.log(req.query.q)
  res.render('news')
})

//search
app.get('/search', (req, res) => {
  res.render('search')
})


//search
app.post('/search', (req, res) => {
  console.log(req.body);
  res.render('search')
})




app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})