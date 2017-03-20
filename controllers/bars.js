var Bar  = require('../models/bar'),
		User = require('../models/user');

function index(req, res) {
	Bar.find({}, function(err, bars) {
		if (err) throw err;

		res.json(bars);
	});
}

function create (req, res) {
	var newBar = new Bar(req.body);

	newBar.save(function(err, savedBar) {
		if (err) throw err;

		res.json(savedBar);
	});
}




module.exports = {}