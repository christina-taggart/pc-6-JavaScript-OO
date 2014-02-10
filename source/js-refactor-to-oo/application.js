$(document).ready(function() {

  function dieRollerClass() {
    var that = this;

    that.generate = function() {
      return Math.floor((Math.random()*6)+1);
    };

    that.add = function() {
      $('.dice').append('<div class="die">' + that.generate() + '</div>');
    };

    that.rollDice = function() {
      $('.die').each(that.changeSides)
    };

    that.changeSides = function(i, die) {
      $(die).text(that.generate());
    };

  };

  var dieRoller = new dieRollerClass();

  $('#roller button.add').on('click', dieRoller.add);
  $('#roller button.roll').on('click', dieRoller.rollDice);

});