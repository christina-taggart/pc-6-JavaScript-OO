$(document).ready(function() {

  $('.add').on('click', newDie)

  $('.roll').on('click', function() {
    $('.die').each(rollDice)
  });
  });

var rollDice =  function(k, die) {
      $(die).text(Math.floor((Math.random()*6)+1));
 };

var newDie = function() {
    $('.dice').append('<div class="die">0</div>');
  };
