// EVENTS

$(document).ready(function() {
  var newGame = new Game;
  $('#roller button.add').on('click', function() {
    newGame.addDie();
  });

  $('#roller button.roll').on('click', function() {
    $('.die').remove();
    newGame.rollDice();
  });  
});

// DIE

function Die() {
  this.value = 0;
}

Die.prototype.roll = function() {
  this.value = Math.floor((Math.random()*6)+1);
}

// GAME

function Game() {
  this.dice = [];
}

Game.prototype.addDie = function() {
  var newDie = new Die;
  this.dice.push(new Die);
  $('.dice').append('<div class="die">' + newDie.value +  '</div>');
}

Game.prototype.rollDice = function() {
  for (i=0; i<this.dice.length; i++) {
    this.dice[i].roll();
    $('.dice').append('<div class="die">' + this.dice[i].value +  '</div>');
  }
}
