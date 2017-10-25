var express = require('express')
var app = express()

const server = module.exports = { }

server.start = ( callback ) => {

	// respond with "getted world" when a GET request is made to the homepage
	app.get('/', function (req, res) {
		res.send('getted world')
	})

	// respond with "posted world" when a POST request is made to the homepage
	app.post('/', function (req, res) {
		res.send('posted world')
	})

	app.listen(3000);

	callback()

}
