var passport = require('passport');

//GET /signup
function getSignup(req, res) {
	res.render('signup.ejs', { message: req.flash('signupMessage') });
}

function postSignup(req, res) {
	console.log(req.params)

	var signUpStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	});

	return signUpStrategy(req, res)
}







function home(req, res) {
	res.render('home.ejs');
}

module.exports = {
	home : home,
	getSignup: getSignup,
	postSignup: postSignup
}
