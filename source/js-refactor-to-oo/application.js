

$(document).ready(function() {
  roller = new Roller
  $('#roller button.add').on('click', function() {
    roller.add();
  });

  $('#roller button.roll').on('click', function() {
    roller.rollAll();
  });
});

// $(document).ready(function() {
//   roller = new Dice
//   $('#roller button.add').on('click', roller.add)
//   $('#roller button.roll').on('click', roller.roll)
// });

function Roller() {
}

function Die() {
  this.roll = Math.floor((Math.random()*6)+1);
}

Roller.prototype.rollAll = function() {
  $('.die').each(function(k, die) {
  $(die).text(new Die().roll);
  });
}

Roller.prototype.add = function() {
  $('.dice').append('<div class="die">0</div>');
}




// Provide good names for all anonymous functions.
// Move the anonymous functions to objects.
// Each callback or event handler is only 1 or 2 lines
// Create a clear separation of concerns.