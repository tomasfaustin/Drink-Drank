// var passport = require('passport')

function about(req, res) {
  res.render('about.ejs')
}

function profile(res, res) {
  res.render('profile.ejs')
}

module.exports = {
  about: about,
  profile: profile
}
