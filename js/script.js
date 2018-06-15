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

// choisis le nombre de paires
var pair = prompt("Combien de paires de cartes voulez-vous?");
console.log(pair);

// création du tableau de lettre des cartes et du tableau de cartes (c d h s)
var cardLetterArray = "cdhs";
var cardArray = [];

// génère le  nombre de paires de cartes
for (var i = 0; i < pair; i++) {

  var cardNumber = Math.round(Math.random()*12+1);

  var cardLetterNumber = Math.round(Math.random()*3);
  var cardLetter = cardLetterArray[cardLetterNumber];
  console.log(cardLetter);

  for (var j = 0; j < 2; j++) {

    var hideCard = document.createElement("img");
    hideCard.src = 'img/air/141/facedown.png';
    hideCard.className = "hidden";
    hideCard.style.margin = "1%";
    divHide.appendChild(hideCard);

    var visibleCard = document.createElement("img");
    console.log(cardNumber);
    visibleCard.src = 'img/air/141/'+ cardLetter + cardNumber +'.png';
    visibleCard.className = "visible";
    visibleCard.style.opacity = 0;
    visibleCard.style.margin = "1%";
    cardArray.push(visibleCard);

    // clics sur les cartes début
    visibleCard.addEventListener('click', function(){
      this.classList.add("current");
      console.log(this.classList);
      console.log(this);
    })
    // clics sur les cartes fin

  }

}

// mélange et affichage des cartes
shuffle(cardArray);
console.log(cardArray);

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
