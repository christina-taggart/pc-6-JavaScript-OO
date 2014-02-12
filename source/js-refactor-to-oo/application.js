$(document).ready(function() {

  var myDice = new DiceContainer();

  function DiceContainer() {
    this.dice = [];
  }

  DiceContainer.prototype.roll_all_dice = function() {
    var currentDiceContainer = this;
    var diceNodes = $('.die');
    $.each(diceNodes, function(idx, dieNode) {
      $(dieNode).text(currentDiceContainer.dice[idx].roll());
    }); 
  };

  function Die() {
    this.dieMarkup = '<div class="die">0</div>';
  };

  Die.prototype.append = function() { 
    $('.dice').append(this.dieMarkup); 
  };

  Die.prototype.roll = function() { 
    return Math.floor((Math.random()*6)+1); 
  }

  $('#roller button.add').on('click', function() {
    myDice.dice.push(new Die());
    myDice.dice[myDice.dice.length -1].append();
  });

  $('#roller button.roll').on('click', function() {
    myDice.roll_all_dice();
  });

});