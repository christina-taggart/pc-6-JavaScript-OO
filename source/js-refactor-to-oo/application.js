$(document).ready(function() {

  var die = {
    roll: function(index, die) {
      var value = Math.floor((Math.random()*6)+1);
      $(die).text(value);
    },
    node: '<div class="die">0</div>',
    makeRandomColor: function(index, die){
      var colors = ["blue", "red", "green", "yellow"];
      var randomColor = colors[ Math.floor( Math.random() * colors.length ) ];
      $(die).css( 'background-color', randomColor );
    }
  }

  var game = {
    rollAll: function() {
      $('.die').each( die.roll )
      //here's a function, execute when you're ready...callback
    },
    add: function(){
      $('.dice').append( die.node );
    },
    colorize: function(){
      $('.die').each( die.makeRandomColor );
    }
  }

  $('#roller button.add').on('click', game.add)
  $('#roller button.roll').on('click', game.rollAll)
  $('#roller button.colorize').on('click', game.colorize)
});
