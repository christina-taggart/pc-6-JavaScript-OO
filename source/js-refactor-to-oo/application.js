
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

function Die() {
  this.value = 0
}

Die.prototype = {
  randomValue: function(){
    this.value = Math.floor((Math.random()*6)+1);
  },
  bodyDiv: function(){
    return '<div class="die">' + this.value + '</div>';
  },
  showValue: function() {

  }
}

function Dice() {
  this.collection = []
}

Dice.prototype = {
  add: function(){
    newDie = new Die();
    this.collection.push(newDie);
    $('.dice').append(newDie.bodyDiv());
  },
  roll: function() {
    newDie = new Die();
    for (i=0; i<this.collection.length; i++){
     return $(this.collection[i]).text(newDie.bodyDiv());
    }
  }
}


