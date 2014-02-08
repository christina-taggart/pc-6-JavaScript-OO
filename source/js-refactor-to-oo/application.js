$(document).ready(function() {

  var Die = function() {
    var roll = function() { return Math.floor((Math.random()*6)+1); }
    var markup = '<div class="die">0</div>';
    var all_dice = $('.die');
    this.append = function() { $('.dice').append(markup); };
    this.roll_all_dice = function() { 
      $.each(all_dice, function(idx, die) {
        $(die).text(roll());
      }); 
    }
  };

  $('#roller button.add').on('click', function() {
    new Die().append();
  });

  $('#roller button.roll').on('click', function() {
    new Die().roll_all_dice();
  });

});