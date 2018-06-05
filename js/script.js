console.log("Hello World!");

var cards = document.getElementById("carte").getElementsByTagName("img");
var backCards = document.getElementById("masque").getElementsByTagName("img");
var card = null;

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function() {
    this.className = "myselect";
    if (card == null) {
      card = this;
      console.log(card);
    } else {
      if (card.src == this.src) {
        alert("You deserve 1 point for this one!");
      } else {
        alert("You are sooooooooo bad!");
        card.className = "";
        this.className = "";
      }
      card = null;

    }
  });
}
