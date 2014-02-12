$(document).ready(function() {
  page = new DiceGame();

  $('#roller button.add').on('click', function() {
    page.addDie(new Die());
  });

  $('#roller button.roll').on('click', function() {
    page.rollDice();
  });
});

// Die constructor

function Die() {
  this.number = 0
}

Die.prototype.roll = function() {
  this.number = Math.floor((Math.random()*6)+1);
}

Die.prototype.show = function() {
  $('.dice').append("<div class='die'>" + this.number + "</div>");
}

// Game constructor

function DiceGame() {
  this.dice = [];
}

DiceGame.prototype.amount = function() {
  return this.dice[this.dice.length - 1]
}

DiceGame.prototype.addDie = function(die) {
  this.dice.push(die);
  this.amount().show();
}

DiceGame.prototype.clearDice = function() {
  $('.dice').empty();
}

DiceGame.prototype.rollDice = function() {
  this.clearDice();
  for (i = 0; i < this.dice.length; i++) {
    this.dice[i].roll()
    this.dice[i].show()
  }
}
