let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "dice" + randomNumber1 + ".png";

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let dice1 = document.querySelector(".img1");
let dice2 = document.querySelector(".img2");

dice1.setAttribute("src", "./img/" + randomDiceImage1);
dice2.setAttribute("src", "./img/" + randomDiceImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} 
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} 
else {
  document.querySelector("h1").textContent = "Draw!";
}

document.querySelector("button").addEventListener("click", function() {
  location.reload();
});