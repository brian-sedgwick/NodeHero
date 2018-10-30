const express = require('express')
const rp = require('request-promise')
const exphbs = require('express-handlebars')

const app = express()

const port = 3000

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/:city', (req, res) => {
	rp({
		uri: 'http://apidev.accumweather.com/locations/v1/search',
		qs: {
			q: req.params.city,
			apiKey: '6s4vzIDOsLTgmpnD7qieU02B33sFhTfU'
		},
		json: true
	})
	.then((data) => {
		res.render('index', data)
	})
	.catch((err) => {
		console.log(err)
		res.render('error')
	})
})

app.listen(port)