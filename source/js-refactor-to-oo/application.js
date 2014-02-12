


$(document).ready(function() {
		thisgame = new Game();

		$('#roller button.add').on('click', function(){
			thisgame.addDie(new Die());
		});

		$('#roller button.roll').on('click', function(){
			thisgame.rollDice();
		});
	});
// ===================dice===========

function Die(face){
	this.face=0
}

Die.prototype.create=function(){
	$('.dice').append("<div class='die'>"+ this.face + "</div>");
}


Die.prototype.roll=function(){
	this.face=Math.floor((Math.random()*6)+1);

}


		// ==========================game=============




function Game(){
	this.game = []
}


Game.prototype.last = function() {
  return this.game[this.game.length - 1]
}

Game.prototype.addDie = function(die) {
  this.game.push(die);
  this.last().create();
}

Game.prototype.empty = function() {   
  $('.dice').empty();
}

Game.prototype.rollDice = function() {
  this.empty();
  for (i = 0; i < this.game.length; i++) {
    this.game[i].roll()
    this.game[i].create()
  }
}







