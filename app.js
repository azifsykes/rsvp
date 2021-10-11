// Initialize express
const express = require('express')
const app = express()
// require handlebars
// const exphbs = require('express-handlebars')
// const Handlebars = require('handlebars')
// const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


// Use pug to render
app.set('view engine', 'pug');

// Tell our app to send the "hello world" message to our home page
// app.get('/', (req, res) => {
//   // res.send('Hello World!')
//   res.render('home', {msg: 'handlebars are cool!'})
// })

// Render the "home" layout for the main page and send the following msg
// app.get('/', (req, res) => {
//   res.render('home', { msg: 'Handlebars are Cool!' });
// })

var events = [
  {title: 'first event', desc: 'a great first event'},
  {title: 'second event', desc: 'a great second event'},
  {title: 'third event', desc: 'a great third event'},
]

app.get('/', (req, res) => {
  res.render('index', { events: events });
})

// Choose a port to listen on
const port = process.env.PORT || 3000;

// Tell the app what port to listen on
app.listen(port, () => {
  console.log('App listening on port 3000!')
})