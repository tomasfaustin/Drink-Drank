var $visitedBars,
    $nonVisitedBars,
    yelpInfo

function addToList(bar) {
  return $(`<li id="bar-${bar._id}" class="index-items draggable"><div class="bar-box">${bar.name} <br> ${bar.location} </div><button class="delete"> </button></li>`).draggable({

    // <li id="bar-<%= user.bars[i]._id %>" class="index-items draggable">
    //     <div class="bar-box">
    //         <%= user.bars[i].name %> <br>
    //             <%= user.bars[i].location%>
    //     </div> <button class="delete"> </button></li>


    snap: 'ul',
    stop: updateHandler
  })
}

function updateHandler() {
  var html = $(this),
      id = html.attr('id').slice(4);

  $.ajax({
    type: 'PATCH',
    url: 'bar/' + encodeURIComponent(id),
    data: {}
  }).then(
    function(jsonBar) {
      html.remove();

      var barHTML = addToList(jsonBar);

      if(jsonBar.visited) {
        $visitedBars.append(barHTML);
      } else {
        $nonVisitedBars.append(barHTML);
      }
    }
  )
}

function deleteHandler() {
  var html = $(this).parent(),
      id = html.attr('id').slice(4);

  $.ajax({
    type: 'DELETE',
    url: '/bar/' + id
  }).then(
    function() {
      html.remove();
    }
  )
}


$(document).ready(function(){
  $visitedBars = $('#visitedBars');
  $nonVisitedBars = $('#nonVisitedBars');
  $searchButton = $('#search-button');

  // new droppable ul for visited bars
  $('#drank-list').droppable();

  // new droppable ul for unvisited bars
  $('#drink-list').droppable();

  $('.draggable').draggable({
    snap: 'ul',
    stop: updateHandler
  })

  $searchButton.on('click', function(e) {
    e.preventDefault();
    $searchTerm = $('#searchTerm').val();
    $zipSearch  = $('#zipSearch').val();

    $.ajax({
      url: `/search`,
      method: 'GET'
    })
      .done(function (data) {
        yelpInfo = data;

        $('#bars').append('<li>' + data.name + '</li>');
      })

  })

  $visitedBars.on('click', '.delete', deleteHandler);
  $nonVisitedBars.on('click', '.delete', deleteHandler);

})
