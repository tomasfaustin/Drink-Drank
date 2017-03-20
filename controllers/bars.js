var Bar  = require('../models/bar'),
		User = require('../models/user');

function index(req, res) {
	User.find({}, function(err, bars) {
		if (err) throw err;

		res.json(bars);
	});
}

function createBar(req, res) {
	console.log('req.body is', req.body);
	User.findById(req.body.user, function(err, user) {
		if (err) throw err;

		console.log(user);
		user.bars.push({
			name: req.body.name,
			description: req.body.description
		})

		user.save(function(err, user) {
			if (err) throw err;

			res.redirect('/');
		})
	})


	// var newBar = new Bar(req.body);

	// newBar.save(function(err, savedBar) {
	// 	if (err) throw err;

	// 	res.json(savedBar);
	// });
}




module.exports = {}