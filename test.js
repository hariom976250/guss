"use strict";

// Generate secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Game state variables
let score = 20;
let highscore = 0;

// document.querySelector(".number").textContent = secretNumber; // Uncomment if you want to show the number for debugging

// Check button logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";
  } else if (guess < 1 || guess > 20) {
    document.querySelector(".message").textContent = "🚫 Number out of range!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.body.style.backgroundColor = "#31aa0cff"; //css style for correct guess

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "#ff0000";
    }
  }
});

// Again button logic (reset the game)
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#222";
});
