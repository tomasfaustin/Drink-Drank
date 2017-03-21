var passport = require('passport');

var yelpApiV3 = require("yelp-api-v3")

var yelp = new yelpApiV3({
  app_id: process.env.YELP_ID,
  app_secret: process.env.YELP_SECRET
});


function index(req, res) {
  res.render('index.ejs')
}



function search(req, res) {
  console.log(req.query)
  yelp.search({term: req.query.term, categories: 'bars', location: '90210', limit: 5})
  .then(function (data) {
      // console.log(data);
      var jsonString = JSON.parse(data);
      res.render('search2', {bar: jsonString.businesses[0]});
    // res.json(data);
  })
  .catch(function (err) {
      console.error(err);
  });
}
// put this back!
// function getSearch(req, res) {
//   res.render('search.ejs');
// }

//clean this up
function postSearch(req, res) {
  console.log(req.body)
  res.redirect('/search/?term=' + req.body.searchTerm);
}

function barInfo(req, res) {
  res.render('barInfo.ejs')
}

module.exports = {
  index: index,
  search: search,
  barInfo: barInfo,
  // getSearch: getSearch,
  postSearch: postSearch
  // postSearch: postSearch

}
