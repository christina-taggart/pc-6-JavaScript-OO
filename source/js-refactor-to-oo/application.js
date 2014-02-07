$(document).ready(function() {
  board = new Board
  $('#roller button.add').on('click', board.addDie);
  $('#roller button.roll').on('click', board.rollDice);
});

////////////////
// DIE CLASS
////////////////

function Die(){
  this.num = 0
}

Die.prototype.roll = function(){
  this.num = Math.floor((Math.random()*6)+1);
}

///////////////
// BOARD CLASS
///////////////

function Board(){
  this.dice = []
}

Board.prototype.addDie = function(){
  var die = new Die
  board.dice.push(die)
  $('.dice').append('<div class="die">' + die.num +'</div>');
}

Board.prototype.rollDice = function(){
  board.rollAll();
  board.drawBoard();
}

Board.prototype.rollAll = function(){
  for(var i = 0; i < board.die; i++) {
    board.die[i].roll();
  }
}

Board.prototype.drawBoard = function(){
  $('.die').each(function(index, die_element) {
      board.replaceVals(index, die_element);
  });
}

Board.prototype.replaceVals = function(index, die_element){
  var value = Math.floor((Math.random()*6)+1);
  $(die_element).text(value);
}