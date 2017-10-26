const express = require('express')
const app = express()
const fs = require('fs')

const server = module.exports = { }

server.start = ( callback ) => {

	// respond with "getted world" when a GET request is made to the homepage
	app.get('/', function (req, res) {
		res.send('getted world')
	})

	// respond with "posted world" when a POST request is made to the homepage
	app.post('/', function (req, res) {

		// something to stub
		let fileContents = fs.readFileSync('names.json', 'utf8')
		// real json please
		fileContents = JSON.parse(fileContents)
		res.send(fileContents)

	})

	app.listen(3000);

	callback()

}

server.run = () => {
	server.start( foo => console.log('server started') )
}
