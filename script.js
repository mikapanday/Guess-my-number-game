//console.log(document.querySelector('.message').textContent);

//DOM is a structured representation of HTML documents
/*
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySselector('.score').textContent = 10;

document.querySelector('.guess').vakue = 23;
console.log(document.querySelector('guess').value);
*/

//handling click events

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    //When there is no input
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === secretNumber) {
    //When Player wins
    document.querySelector(".message").textContent = "Correct Number!";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector("number").style.width = "30 rem";
    //When Playet guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game!";
      document.querySelector(".score").textContent = 0;
    }
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber)
    if (score > 1) {
      document.querySelector(".message").textContent = "Number is too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  document.querySelector(".score").textContent = score;
});
