var $visitedBars
var $nonVisitedBar
var $form
var $searchTerm
var yelpInfo
var Yelp = require('yelp-api-v3')

var yelp = new Yelp ({
  app_id: process.env.YELP_ID,
  app_secret: process.env.YELP_SECRET
})




$(document).ready(function(){
  $visitedBars = $('#visitedBars')
  $nonVisitedBar = $('nonVisitedBar')
  $form = $('#search')
  $searchTerm = $('#searchTerm')

  $form.on('submit', function(e) {
    yelp.search({term: `${$searchTerm.val()}`, categories: 'bars', location: '90291', limit: 5})
      .then(function (data) {
        yelpInfo = data
      })


  })


})
