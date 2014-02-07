$(document).ready(function() {
  
  var board = new Board;
  eventListeners(board);
  
});

function eventListeners(board){
    $('#roller button.roll').on('click', function() {
      board.rollDice();
    });

    $('#roller button.add').on('click', function() {
      board.addDie();
    })
  }

function Die() {
  this.val = 0
}

Die.prototype.roll = function(){
  return this.val = Math.floor((Math.random()*6)+1);
}

function Board(){}

Board.prototype.rollDice = function(){
  $('.die').each(function(k, die) {
    $(die).text(new Die().roll())
  })
}

Board.prototype.addDie = function(){
  var die = new Die
  $('.dice').append("<div class='die'>"+die.val+"</div>");
}
