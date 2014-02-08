$(document).ready(function() {

  $('.add').on('click', addDice)

  $('.roll').on('click', function(){
    $('.die').each(rollDice)}

  );
});

  var addDice = function() {
    $('.dice').append('<div class="die">0</div>');
  };



var rollDice = function(k, die) {
    $(die).text(Math.floor((Math.random()*6)+1));

};

