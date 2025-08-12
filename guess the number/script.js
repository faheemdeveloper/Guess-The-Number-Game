let guessInput = document.querySelector("#guessInput");
let checkBtn = document.querySelector("#checkBtn");
let againBtn = document.querySelector("#againBtn");
let message = document.querySelector("#message");
let numberValue = document.querySelector("#numberValue");

let scoreBlock = document.querySelector("#score");
let highscoreText = document.querySelector("#highscore");

let score = 20;
let highscore = 0;

function resetValues() {
  score = 20;
  message.textContent = "Start guessing..";
  numberValue.textContent = "?";
  scoreBlock.textContent = score;
}

checkBtn.addEventListener("click", function () {
  let guessNum = Math.floor(Math.random() * 20 - 1) + 1 + 1;

  let inputValue = guessInput.value.trim();
  if (score >= 1) {
    if (inputValue !== "") {
      numberValue.textContent = inputValue;

      inputValue = Number(inputValue);

      if (inputValue === guessNum) {
        message.textContent = "🎉 Correct Number";
        highscore = score;
        highscoreText.textContent = highscore;
        setTimeout(function () {
          resetValues();
        }, 4000);
      } else if (inputValue > guessNum) {
        message.textContent = "📈 Too High";
        score--;
      } else if (inputValue < guessNum) {
        message.textContent = "📉 Too Low";
        score--;
      }

      if (score <= 0) {
        message.textContent = "Game Over!";
      }

      scoreBlock.textContent = score;
    } else {
      alert("Enter Only Number Value!");
    }
  } else {
    alert("Try Again");
    resetValues();
  }

  guessInput.value = "";
});

againBtn.addEventListener("click", function () {
  resetValues();
});
