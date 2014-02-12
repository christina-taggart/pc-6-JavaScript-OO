
$(document).ready(function() {
  var cubes = new Dice();
  $('#roller button.add').on('click', function(event) { 
    cubes.add();
    event.preventDefault();
  });
  $('#roller button.roll').on('click', function(event) {
    cubes.roll();
    event.preventDefault();
  });
});

function Die(id) {
  this.value = 0
  this.id = id
}

Die.prototype = {
  randomValue: function(){
    this.value = Math.floor((Math.random()*6)+1);
  },
  bodyDiv: function(){
    return '<div class="die" data-id=' + this.id + '>' + this.value + '</div>';
  },
  getDomElement: function() {
   return $('[data-id=' + this.id + ']')
  }
}

function Dice() {
  this.collection = []
}

Dice.prototype = {
  add: function(){
    var id = this.collection.length + 1
    newDie = new Die(id);
    this.collection.push(newDie);
    $('.dice').append(newDie.bodyDiv());
  },
  roll: function() {
    for (i=0; i<this.collection.length; i++){
      var die = this.collection[i]
      die.randomValue();
      var $htmlDie = die.getDomElement();
      $htmlDie.text(die.value)
    }
  }
}


