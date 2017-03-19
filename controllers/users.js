var passport = require('passport');

//GET /signup
function getSignup(req, res) {
	res.render('signup.ejs', { message: req.flash('signupMessage') });
}







function home(req, res) {
	res.render('home.ejs');
}

module.exports = {
	home : home,
	signup: getSignup
}
