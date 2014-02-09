$(document).ready(function() {
    dieListener()
    rollListener()
  });


    var Die = function(){
      this.value = 0
      this.randomValue = function(){
        return this.value = Math.floor((Math.random()*6)+1)
      }
    }


    var dieListener = function() {
      $('#roller button.add').on('click', function(){
        addDice()
      });
    }    

    var rollListener = function() {
       $('#roller button.roll').on('click', function() {
        rollDice() 
        });
      }


    var addDice = function(){
      $('.dice').append('<div class="die">0</div>');
    };

    
    var rollDice = function(){
      $('.die').each(function(k, die) {
      nother_die = new Die();
      $(die).text(nother_die.randomValue)
      })
    }
