$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    addDie();
  });

  $('#roller button.roll').on('click', function() {
      rollDice();
  });
});

// Die constructor

var Die = function() {
  this.side = 0

  this.roll = function() {
    this.side = Math.floor((Math.random()*6)+1);
  }
}

// Helper functions

var addDie = function() {
  new_die = new Die()
  $('.dice').append("<div class='die'>" + new_die.side + "</div>");
}


var rollDice = function() {
  $('.die').each(function(k, die) {
    temp_die = new Die();
    temp_die.roll();
    $(die).text(temp_die.side);
  })
}