var $visitedBars
var $nonVisitedBar
var Yelp = require('yelp-api-v3')

var yelp = new Yelp ({
  app_id: process.env.YELP_ID,
  app_secret: process.env.YELP_SECRET 
})




$(document).ready(function(){
  $visitedBars = $('#visitedBars')
  $nonVisitedBar = $('nonVisitedBar')
})
