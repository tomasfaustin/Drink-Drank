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
  var searchTerm = req.query.term,
      openNow    = req.query.open === 'true' ? true : false,
      price      = String(req.query.price),
      zipSearch  = req.query.zip === '' || req.query.zip.length !== 5 ? '90401' : req.query.zip;

  console.log('price:', price);
  yelp.search({term: searchTerm, categories: 'bars', location: zipSearch, open_now: openNow, price: price})
  .then(function (data) {
    var jsonString = JSON.parse(data);
    res.render('search2', {bar: jsonString.businesses});

  })
  .catch(function (err) {
      console.log('not working')
      console.error(err);
  });
}

function postSearch(req, res) {
  // if (req.body.zipSearch === '')
  //   res.redirect('search/?term=' + req.body.searchTerm + '&open=' + req.body.openNow + '&price=' + req.body.price);

  res.redirect('/search/?term=' + req.body.searchTerm + '&zip=' + req.body.zipSearch + '&open=' + req.body.openNow + '&price=' + req.body.price);
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
