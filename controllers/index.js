var passport = require('passport');

function index(req, res) {
  res.render('index.ejs')
}

module.exports = {
  index: index
}
