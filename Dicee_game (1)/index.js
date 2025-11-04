let randNumber1 = Math.floor(Math.random() * 6) + 1;
//console.log(randNumber1);
let randNumber2 = Math.floor(Math.random() * 6) + 1;
//console.log(randNumber2);

let randDiceImage1 = "./images/dice" + randNumber1 + ".png";
let randDiceImage2 = "./images/dice" + randNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", randDiceImage1);
document.querySelector(".img2").setAttribute("src", randDiceImage2);
if (randNumber1 > randNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randNumber2 > randNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}