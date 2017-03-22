var passport  = require('passport'),
    yelpApiV3 = require("yelp-api-v3");
    
var yelp      = new yelpApiV3({
  app_id      : process.env.YELP_ID,
  app_secret  : process.env.YELP_SECRET
});

function index(req, res) {
  res.render('index.ejs');
}

function search(req, res) {
  console.log(req.query);
  var searchTerm = req.query.term,
      zipSearch  = req.query.zip === '' ? '90210' : req.query.zip;

  yelp.search({term: searchTerm, categories: 'bars', location: zipSearch, limit: 5})
  .then(function (data) {
    var jsonString = JSON.parse(data);
    res.render('search2', {bar: jsonString.businesses});

  })
  .catch(function (err) {
      console.error(err);
  });
}

function postSearch(req, res) {
  res.redirect('/search/?term=' + req.body.searchTerm + '&zip=' + req.body.zipSearch);
}

function barInfo(req, res) {
  res.render('barInfo.ejs');
}

module.exports = {
  index: index,
  search: search,
  barInfo: barInfo,
  postSearch: postSearch
}
