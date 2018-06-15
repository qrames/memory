// création de main et des deux div qui se superposent
var main = document.createElement("main");
document.body.appendChild(main);
main.style.position = "relative";

var divHide = document.createElement("div");
main.appendChild(divHide);
divHide.style.position = "absolute";

var divVisible = document.createElement("div");
main.appendChild(divVisible);
divVisible.style.position = "absolute";

var selectedCards = [];

// choisis le nombre de paires
var pair = prompt("Combien de paires de cartes voulez-vous?");

// création du tableau de lettre des cartes et du tableau de cartes (c d h s)
var cardLetterArray = "cdhs";
var cardArray = [];

// génère le  nombre de paires de cartes
for (var i = 0; i < pair; i++) {

  var cardNumber = Math.round(Math.random() * 12 + 1);

  var cardLetterNumber = Math.round(Math.random() * 3);
  var cardLetter = cardLetterArray[cardLetterNumber];

  for (var j = 0; j < 2; j++) {

    var hideCard = document.createElement("img");
    hideCard.src = 'img/air/141/facedown.png';
    hideCard.className = "hidden";
    hideCard.style.margin = "1%";
    divHide.appendChild(hideCard);

    var visibleCard = document.createElement("img");
    console.log(cardNumber);
    visibleCard.src = 'img/air/141/' + cardLetter + cardNumber + '.png';
    visibleCard.className = "visible";
    visibleCard.style.opacity = 0;
    visibleCard.style.margin = "1%";
    cardArray.push(visibleCard);

    // clics sur les cartes début
    var cpt = 2;
    visibleCard.addEventListener('click', function() {

      if (cpt > 0) {
        this.classList.add("current");
        this.style.opacity = 1;
        currentCards = document.getElementsByClassName("current");
        for (var i = 0; i < currentCards.length; i++) {
          var srcCurrent = currentCards[i].src;
          var srcCurrentArray = [];
          srcCurrentArray.push(srcCurrent);
          console.log(srcCurrentArray);
          cpt--;
          if (srcCurrentArray.length == 2) {
            for (var i = 0; i < currentCards.length; i++) {
              var removeCurrent = currentCards[i];
              removeCurrent.classList.add("selected");
              selectedCards.push(removeCurrent);
              console.log(selectedCards);
              cpt = 2;
            }
          }
        }
      } else {
        alert("You dumb shit, why can't you understand that you can only discover two cards a time!")
        currentCards = document.getElementsByClassName("current");
        for (var i = 0; i < currentCards.length; i++) {
          var removeCurrent = currentCards[i];
          removeCurrent.style.opacity = 0;
          cpt = 2;
        }
        removeCurrent.classList.remove("current");
        console.log(removeCurrent.classList);
      }
    })
    // clics sur les cartes fin
  }
}

// mélange et affichage des cartes
shuffle(cardArray);

for (var i = 0; i < cardArray.length; i++) {
  divVisible.appendChild(cardArray[i]);
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
