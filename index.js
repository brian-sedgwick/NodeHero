//require('./app/index')
const express = require('express')
const app = express()
const port = 3000

app.use((request, response, next) => {
	console.log(request.headers)
	next()
})

app.use((request, response, next) => {
	request.chance = Math.random()
	next()
})

app.use((err, request, response, next) => {
	console.log(err)
	response.status(500).send('something broke!')
})

app.get('/', (request, response) => {
	throw new Error('oops')
})

app.listen(port)