var path = require('path');

var reservations = require(path.join(__dirname, '../data/data.js'))

module.exports = function(app) {


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, "../html/index.html"));
});
app.get('/view', function(req, res) {
	res.sendFile(path.join(__dirname, "../html/view.html"));
});
app.get('/make', function(req, res) {
	res.sendFile(path.join(__dirname, "../html/make.html"));
});

app.get('/api', function(req, res) {
	res.json(reservations)
});

app.post('/api/new', function(req, res) {

	console.log(req.body)
	reservations.push(req.body)

	// var newCustomer = req.body
	// res.json(reservations)
});

	// app.post('/people/new', function(req, res) {
	// 	console.log(req.body)
	// 	newApplicant = req.body
	// 	newApplicant.scores = newApplicant.scores.map(parseFloat)
	// 	newApplicant.total = parseInt(newApplicant.total)
	// 	friends.push(newApplicant)

	// 	// res.json(friends)


	// });

	};