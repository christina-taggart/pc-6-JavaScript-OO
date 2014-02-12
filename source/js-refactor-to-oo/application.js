$(document).ready(function() {
  $('#roller button.add').on('click', function() {
  theController.createDie()
  });

  $('#roller button.roll').on('click', function() {
    theController.rollAllDice()
  });
});



function Die() {
  this.template = '<div class="die">0</div>'
}

Die.prototype.appendYoself = function() {
  $('.dice').append(this.template)
}

Die.prototype.setHTMLdie = function() {
  this.$htmlDie = $('.die').last()
}

Die.prototype.random = function() {
  return Math.floor((Math.random()*6)+1);
}

Die.prototype.rollDie = function () {
  this.$htmlDie.text(this.random())
}

var theController = {
  createDie: function () {
    var die = new Die()
    die.appendYoself()
    die.setHTMLdie()
    this.diceRack.push( die ) 
  },
  diceRack: [],
  rollAllDice: function () {
    for (var i=0; i<this.diceRack.length; i++) {
      this.diceRack[i].rollDie()
    }
  }
}