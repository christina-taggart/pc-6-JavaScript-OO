$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    appendDiv()
  });

  $('#roller button.roll').on('click', function() {
    rollDice()
  });
});


function randomNumber() {
  return Math.floor((Math.random()*6)+1);
}

function appendDiv() {
  $('.dice').append('<div class="die">0</div>');
}

function rollDice() {
  $('.die').each(function(k, die) {
      $(die).text(randomNumber);
    });
}
