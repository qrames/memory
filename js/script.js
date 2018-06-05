console.log("Hello World!");

var srcImgCards = [];
for (var i = 1; i <= 13; i++) {
    srcImgCards.push('img/air/141/c' + i + '.png');
    srcImgCards.push('img/air/141/d' + i + '.png');
    srcImgCards.push('img/air/141/h' + i + '.png');
    srcImgCards.push('img/air/141/s' + i + '.png');
}
console.log(srcImgCards.length);
var srcIMGMasque = 'img/air/141/facedown.png';
// var Npair = 10;
// var disorderPairList = []
// for (var i = 0; i < Npair; i++) {
//     disorderPairList.push('NaN');
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
//
// for (var i = 0; i < disorderPairList.length; i++) {
//     //disorderPairList[i] =
//     console.log(getRandomInt(Npair));
// }
disorderPairList = [0, 0, 1,2,2, 1 ];
ulCarte = document.getElementById("carte");
ulMasque = document.getElementById("masque");


for (var i = 0; i < disorderPairList.length; i++) {
    var newLiCard = document.createElement('li');
    var newLiMasque = document.createElement('li');

    var newImgCard = document.createElement('img');
    var newImgMasque = document.createElement('img');

    newImgCard.src = srcImgCards[ disorderPairList[i] ];
    newImgMasque.src = srcIMGMasque;
    //newImgCard.className = "myselect";
    console.log(newImgCard);
    console.log(newImgMasque);

    newLiCard.appendChild(newImgCard);
    newLiMasque.appendChild(newImgMasque);

    ulCarte.appendChild(newImgCard);
    ulMasque.appendChild(newImgMasque);

}





var cards = ulCarte.getElementsByTagName("img");
var backCards = ulMasque.getElementsByTagName("img");
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
