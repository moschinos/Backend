
import mysql from 'mysql';
import express from 'express';
import User from './models/user.js';

var app = express();

// Create the connection to MySQL
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'xyz'
});

// Start the server
var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log('Example app listening at http://localhost:%s', port);
});

// Configure our app to serve static files from the current directory
app.use(express.static('./'));

// Display `index.html` when `localhost:3000` is requested
app.get('/xyz', function (req, res) {
	console.log("Done!");
});

app.post('/add', (req, res) => {
	User.create({
 	   nama: req.body.nama,
	   password: req.body.password
	}).then((results) => {
 	res.json({status:200, error:null, response: results});
	})
})


