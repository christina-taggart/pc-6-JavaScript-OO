
// $(document).ready(function() {
//   $('#roller button.add').on('click', function() {
//     console.log("WAT")
//     $('.dice').append('<div class="die">0</div>');
//   });

//   $('#roller button.roll').on('click', function() {
//     $('.die').each(function(k, die) {
//       var value = Math.floor((Math.random()*6)+1);
//       $(die).text(value);
//     });
//   });
// });

function Die() {
  this.value = 0
}

Die.prototype = {
  roll: function() {
    this.value += Math.floor((Math.random()*6)+1)
  }
}

lucky = new Die();
lucky.roll()
console.log(lucky);












