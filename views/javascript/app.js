
var $visitedBars
var $nonVisitedBar

//add drag here

function createBar(bar){
  return $(`<li id="bar-${bar._id}" class="bar-item "`)> ${bar.name}<button class="delBtn">x</button></li>)
}
function updateHandler(){
  var html = $(this)

  var id = html.arrt('id').slice(5)

  $.ajax({
    type: "Patch"
  })
}








$(document).ready(function(){
  $visitedBars = $('#visitedBars')
  $nonVisitedBar = $('nonVisitedBar')
})
