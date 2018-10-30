//require('./app/index')
const path = require('path')
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

app.engine('.hbs', exphbs({
defaultLayout: 'main',
extname: '.hbs',
layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
	response.render('home', {
		name: 'Brian'
	})
})

app.listen(port)