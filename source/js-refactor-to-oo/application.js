$(document).ready(function() {
  game = new DiceGame();

  $('#roller button.add').on('click', function() {
    game.addDie(new Die());
  });

  $('#roller button.roll').on('click', function() {
    game.rollDice();
  });
});

// Die constructor

function Die() {
  this.side = 0
}

Die.prototype.roll = function() {
  this.side = Math.floor((Math.random()*6)+1);
}

Die.prototype.render = function() {
  $('.dice').append("<div class='die'>" + this.side + "</div>");
}

// Game constructor

function DiceGame() {
  this.dice = [];
}

DiceGame.prototype.latestDie = function() {
  return this.dice[this.dice.length - 1]
}

DiceGame.prototype.addDie = function(die) {
  this.dice.push(die);
  this.latestDie().render();
}

DiceGame.prototype.clearDice = function() {
  $('.dice').empty();
}

DiceGame.prototype.rollDice = function() {
  this.clearDice();
  for (i = 0; i < this.dice.length; i++) {
    this.dice[i].roll()
    this.dice[i].render()
  }
}