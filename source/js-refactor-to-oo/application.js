$(document).ready(function() {

  var newDie = '<div class="die">0</div>'

  var rollDie = function(k, die){
    $(die).text(Math.floor((Math.random()*6)+1))
  };

  $('.add').click(function() {
    $('.dice').append(newDie);
  });

  $('.roll').click(function() {
    $('.die').each(rollDie)
  });

});
