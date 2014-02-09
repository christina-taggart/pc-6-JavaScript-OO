$(document).ready(function() {
  
  function die(){
    this.add = add;
    this.roll = roll
    function add(){
      $('.dice').append('<div class="die">0</div>')
    }
    function roll(){
      $('.die').each(function(k, die) {
        var value = Math.floor((Math.random()*6)+1);
        $(die).text(value)
      });
    };
  };
  
  var new_die = new die
  $('#roller button.add').on('click', function() {
    new_die.add()
  });
  $('#roller button.roll').on('click', function() {
    new_die.roll()
  });
});
