var passport = require('passport');

var yelpApiV3 = require("yelp-api-v3")

var yelp = new yelpApiV3({
  app_id: 'VI82LqJT6cMnePtHQvs0kQ',
  app_secret: 'unGVrhljw51FKvR11T4DV97qMiI5JQ5pMdcKUDOnUcsincEwLENFEqU3SEGqYr11'
});


function index(req, res) {
  res.render('index.ejs')
}

function search(req, res) {
  console.log(req.query)
  yelp.search({term: req.query.term, categories: 'bars', location: '90210', limit: 50})
  .then(function (data) {
      console.log(data);
    res.json(data)
  })
  .catch(function (err) {
      console.error(err);
  });
  // res.render('search.ejs')
}

function barInfo(req, res) {
  res.render('barInfo.ejs')
}

module.exports = {
  index: index,
  search: search,
  barInfo: barInfo
}
