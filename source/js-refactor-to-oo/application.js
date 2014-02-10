$(document).ready(function() {
    $('#roller button.add').on('click', addDie);

    $('#roller button.roll').on('click', rollAllDice);

});

function Die(){
  this.value = 0;
}

Die.prototype.roll = function() {
  this.value = Math.floor((Math.random()*6)+1);
}

var addDie = function(){
  dieToAdd = new Die()
  $('.dice').append("<div class='die'>" + dieToAdd.value + '</div>');
}

var rollAllDice = function(){
  $('.die').each(function(k, die) {
    dieToRoll = new Die()
    dieToRoll.roll();
    $(die).text(dieToRoll.value);
  });
}
