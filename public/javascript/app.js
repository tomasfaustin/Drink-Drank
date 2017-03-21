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

// function addToList(bar) {
//   return $(`<li id="bar-${user.bar._id}" class="index-items"><button class="delBtn">X</button></li>`).draggable({
//     snap: 'ul',
//     stop: updateHandler
//   })
// }







$(document).ready(function(){
  $visitedBars = $('#visitedBars')
  $nonVisitedBar = $('#nonVisitedBar')
  $searchButton = $('#search-button')
  // new droppable ul for visited bars
  $drankList = $('#drank-list').droppable()
  // new droppable ul for unvisited bars
  $('#drink-list').droppable()
  $('.draggable').draggable()


  $searchButton.on('click', function(e) {
    e.preventDefault()
    $searchTerm = $('#searchTerm').val()
    console.log($searchTerm)
    $.ajax({
      url: '/search?term=' + $searchTerm,
      method: 'get'
    })
      .done(function (data) {
        yelpInfo = data
        console.log(data)
        $('#bars').append('<li>' + data.name + '</li>')
      })

  })




})
