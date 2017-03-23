var User = require('../models/user'),
		Bar	 = require('../models/bar');

function indexApi(req, res) {
	User.find({}, function(err, users) {
		if (err) throw err;

		res.json(users);
	});
}

module.exports = {
	indexApi: indexApi
}