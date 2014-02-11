$(document).ready(function() {
  $myDiceArea = $('.dice')
  myDiceBox = new DiceBox()
  myDiceView = new DiceBoxView(myDiceBox)

  $('#roller button.add').on('click', function() {
    myDiceBox.addDie()
    $myDiceArea.empty()
    $myDiceArea.append(myDiceView.renderDiceBox())
  });

  $('#roller button.roll').on('click', function() {
    myDiceBox.rollAll()
    $myDiceArea.empty()
    $myDiceArea.append(myDiceView.renderDiceBox())
  });
});

function DiceBox() {
  this.dice= []
}

DiceBox.prototype = {
  addDie: function() {
    this.dice.push(new Die())
  },
  rollAll: function() {
    for(var i=0; i<this.dice.length; i++) {
      this.dice[i].roll()
    }
  }
}

function Die() {
  this.faces= [1,2,3,4,5,6]
  this.current_face= 1
}

Die.prototype = {
  roll: function() {
    this.current_face = this.faces[Math.floor(Math.random()*this.faces.length)]
  }
}

function DiceBoxView(diceBox) {
  this.getView = ""
  this.diceBox = diceBox
}

DiceBoxView.prototype = {
  renderDiceBox: function() {
    newView = ""
    for(var i = 0; i < this.diceBox.dice.length ; i++) {
      newView += getViewElement(this.diceBox.dice[i].current_face)
    }
    return newView
  }
}

function getViewElement(dieValue) {
  $dieTemplate = $('#die_template').clone()
  console.log($dieTemplate.html())
  $dieTemplate.find('div').text(dieValue)
  return $.trim($dieTemplate.html())
}
