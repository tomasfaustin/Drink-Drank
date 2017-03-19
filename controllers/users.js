function home(req, res) {
	res.render('home.ejs');
}

module.exports = {
	home : home
}