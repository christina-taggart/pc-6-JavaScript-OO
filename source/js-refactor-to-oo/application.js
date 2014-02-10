$(document).ready(function() {
  dice = new DiceGame();
  
  $('#roller button.add').on('click', function() {
    dice.addDie(new Die());
  });

  $('#roller button.roll').on('click', function() {
    dice.rollDice();
  });
});

// Die constructor

function Die() {
  this.side = 0
}

Die.prototype.roll = function() {
  this.side = Math.floor((Math.random()*6)+1);
}

// Game constructor

function DiceGame() {
}

DiceGame.prototype.addDie = function(die) {
  $('.dice').append("<div class='die'>" + die.side + "</div>");
}

DiceGame.prototype.rollDice = function() {
  $('.die').each(function(k, die) {
    temp_die = new Die();
    temp_die.roll();
    $(die).text(temp_die.side);
  })
}