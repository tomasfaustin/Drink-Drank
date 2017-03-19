// var passport = require('passport')

function about(req, res) {
  res.render('about.ejs')
}

module.exports = {
  about: about
}
