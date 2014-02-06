// On document load...
$(function(){

  var game = new Game;  //initialize game

// Listen for events
  function eventListeners(){

    // Listen for add button click
    $('#roller button.add').click(function(){
      game.addDie(); // Add a die to the screen
    })
    // Listen for roll click
    $('#roller button.roll').click(function(){
      game.rollDice(); // Roll the dice
    })
  }

//####### Define Die model ##########

// Define Die constructor
  function Die(){
    this.value = this.roll(); //set random value on initialization
  }

// Roll a die and return roll value
  Die.prototype.roll = function(){
    return this.value = Math.floor((Math.random()*6)+1);
  }

// Generate the html for a die
  Die.prototype.genHtml = function(){
    return '<div class="die">' + this.value + '</div>';
  }

// ###### Define game model ######

// Create game "class"
  function Game(){
  }

// Add die to the screen
  Game.prototype.addDie = function(){
    $('.dice').append(new Die().genHtml());
  }

// Roll all of the die on the scree
  Game.prototype.rollDice = function(){
    $('.die').each(function(k, die) {
      $(die).text(new Die().roll());
    });
  }

// Initialize even listeners function
  eventListeners();

});