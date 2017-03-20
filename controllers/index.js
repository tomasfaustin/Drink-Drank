var passport = require('passport');

function index(req, res) {
  res.render('index.ejs')
}

function search(req, res) {
  res.render('search.ejs')
}

function barInfo(req, res) {
  res.render('barInfo.ejs')
}

module.exports = {
  index: index,
  search: search,
  barInfo: barInfo
}
