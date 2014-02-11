$(document).ready(function() {
  
  function DieAdder(){
    this.add = add;
    function add(die){
      $('.dice').append(die.content)
    }
  };

  function DieRoller(){
    this.roll = roll;
    function roll(){
      $('.die').each(function(k, die) {
        var value = Math.floor((Math.random()*6)+1);
        $(die).text(value)
      });
    };
  };

  function Die(){
    this.content = '<div class="die">0</div>';
    this.all = $('.die');
  }

  var die_adder = new DieAdder
  var die_roller = new DieRoller
  var die = new Die

  $('#roller button.add').on('click', function() {
    die_adder.add(die)
  });
  $('#roller button.roll').on('click', function() {
    die_roller.roll()
  });
});
