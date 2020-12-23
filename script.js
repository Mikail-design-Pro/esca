window.onload = function () {
  initDices();
  initSnails();
};

function getDicesConfig() {
  var diceImgMaron = "img/dem.png";
  var diceImgYellow = "img/dej.png";
  var diceImgRed = "img/der.png";
  var diceImgBlue = "img/deb.png";
  var diceImgGreen = "img/deg.png";
  var diceImgPurple = "img/dev.png";

  var dicesConfig = [
    ["maron", diceImgMaron],
    ["yellow", diceImgYellow],
    ["red", diceImgRed],
    ["blue", diceImgBlue],
    ["green", diceImgGreen],
    ["purple", diceImgPurple],
  ];

  return dicesConfig;
}

function repositionSnails() {
  document.getElementById("snail-blue").style.left = "17px";
  document.getElementById("snail-maron").style.left = "17px";
  document.getElementById("snail-purple").style.left = "17px";
  document.getElementById("snail-yellow").style.left = "17px";
  document.getElementById("snail-green").style.left = "17px";
  document.getElementById("snail-red").style.left = "17px";
}

// on affiche les dés pour le départ
function initDices() {
  document.getElementById("dice-one").src = "img/deo.png";
  document.getElementById("dice-two").src = "img/deo.png";

  document.getElementById("dice-one").style.display = "block";
  document.getElementById("dice-two").style.display = "block";
}

// récupération de la position des escargots
function getSnailsPosition() {
  var SnailPositionMaron = document.getElementById("snail-maron").offsetLeft;
  var SnailPositionPurple = document.getElementById("snail-purple").offsetLeft;
  var SnailPositionYellow = document.getElementById("snail-yellow").offsetLeft;
  var SnailPositionRed = document.getElementById("snail-red").offsetLeft;
  var SnailPositionBlue = document.getElementById("snail-blue").offsetLeft;
  var SnailPositionGreen = document.getElementById("snail-green").offsetLeft;

  var positions = [
    ["maron", SnailPositionMaron],
    ["yellow", SnailPositionYellow],
    ["red", SnailPositionRed],
    ["blue", SnailPositionBlue],
    ["green", SnailPositionGreen],
    ["purple", SnailPositionPurple],
  ];

  return positions;
}

// on affiche les escargots sur la ligne de départ
function initSnails() {
  document.getElementById("snail-blue").src = "img/escab.png";
  document.getElementById("snail-maron").src = "img/escam.png";
  document.getElementById("snail-purple").src = "img/escav.png";
  document.getElementById("snail-yellow").src = "img/escaj.png";
  document.getElementById("snail-green").src = "img/escag.png";
  document.getElementById("snail-red").src = "img/escar.png";

  document.getElementById("snail-blue").style.display = "block";
  document.getElementById("snail-maron").style.display = "block";
  document.getElementById("snail-purple").style.display = "block";
  document.getElementById("snail-yellow").style.display = "block";
  document.getElementById("snail-green").style.display = "block";
  document.getElementById("snail-red").style.display = "block";
}

// Lancement des dés //
function roll() {
  // on récupère les images et les couleurs qui vont avec
  var dices = getDicesConfig();

  // -------- Lancer du dé N°1
  var launchOne = Math.floor(Math.random() * dices.length);
  //on récupère la couleur du nouveau dé
  var colorOne = dices[launchOne][0];
  // on affiche l'image du nouveau dé
  document.getElementById("dice-one").src = dices[launchOne][1];

  // -------- Lancer du dé N°2
  var launchTwo = Math.floor(Math.random() * dices.length);
  var colorTwo = dices[launchTwo][0];
  document.getElementById("dice-two").src = dices[launchTwo][1];

  // on va appeler la fonction pour faire avancer les escargots
  moveSnails(colorOne, colorTwo);
}

function moveSnails(firstColor, secondColor) {
  var maxMovement = 800;

  // déplacement du premier lancer
  var snailsPositions = getSnailsPosition();
  for (let i = 0; i < snailsPositions.length; i++) {
    if (snailsPositions[i][0] == firstColor) {
      var NewPositionLeft = snailsPositions[i][1] + 130;
      document.getElementById("snail-" + snailsPositions[i][0]).style.left =
        NewPositionLeft + "px";
      if (NewPositionLeft >= maxMovement) {
        gameWin(snailsPositions[i][0]);
        exit;
      }
    }
  }

  // déplacement du deuxieme lancer
  var snailsPositions = getSnailsPosition();
  for (let i = 0; i < snailsPositions.length; i++) {
    if (snailsPositions[i][0] == secondColor) {
      var NewPositionLeft = snailsPositions[i][1] + 120;
      document.getElementById("snail-" + snailsPositions[i][0]).style.left =
        NewPositionLeft + "px";
      if (NewPositionLeft >= maxMovement) gameWin(snailsPositions[i][0]);
    }
  }
}

function gameWin(winner) {
  alert("Escargot " + winner + " gagne !");
  resetGame();
}

function resetGame() {
  initDices();
  initSnails();
  repositionSnails();
}
