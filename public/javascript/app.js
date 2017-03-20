var $visitedBars
var $nonVisitedBar
var $form
var $searchTerm
var yelpInfo

//
// var yelp = new Yelp ({
//   app_id: process.env.YELP_ID,
//   app_secret: process.env.YELP_SECRET
// })
//



$(document).ready(function(){
  $visitedBars = $('#visitedBars')
  $nonVisitedBar = $('nonVisitedBar')
  $form = $('#search')


  $form.on('submit', function(e) {
    $searchTerm = $('#searchTerm')
    $.ajax({
      url: 'https://api.yelp.com/v3/businesses/search?term=' + $searchTerm + '&categories=bars&location=90291&limit=5',
      headers: {'Authorization': 'Bearer fLveZdK9txmlU-Anng1LZlZAn2GLQyDZUPSjdWad-XXer34dGkZ7QkI3R590v9S1ESdnmWQPhNLNafb7-I6hclnw2j46EvS3ogU-SWqkf4UijCLZyC6TZnbcesTKWHYx'}
      .then(function (data) {
        yelpInfo = data
        console.log(data)
      })
      .catch(function (err) {
        console.log(err);
      })
    })
  })




})
