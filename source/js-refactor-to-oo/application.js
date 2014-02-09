$(document).ready(function(){
  var D6 = function(){
    this.result = 0

    this.roll = function(){
      this.result = Math.floor((Math.random()*6)+1)
    }
  }

  // replaces monkey patching
  D6.add = function(){
      $('.dice').append('<div class="die">*</div>')
    } // close d6.add
  D6.roll = function(){
    $('.die').each(function(k,die) {
      d6 = new D6()
      d6.roll()
      $(die).text(d6.result)
    })
    }

  // ---- testing monkey patching. works but bad practice---
  // Function.prototype.add = function(){
  //   $('.dice').append('<div class="die">*</div>')
  // }

  // Function.prototype.roll = function(){
  //   $('.die').each(function(k,die) {
  //     d6 = new D6()
  //     d6.roll()
  //     $(die).text(d6.result)
  //   })
  // }

  $('#roller button.add').on('click', function(){
    D6.add()
  })
  $('#roller button.roll').on('click', function(){
    D6.roll()
  })

})
