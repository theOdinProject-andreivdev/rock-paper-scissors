const resultRound = document.querySelector(".resultRound");
const result = document.querySelector(".result");
const computerPick = document.querySelector(".computerPick");
const rounds = document.querySelector(".rounds");

//clear placeholders
resultRound.textContent = "";
result.textContent = "";
computerPick.textContent = "";
rounds.textContent = "";

//rounds state
let roundsPlayed = 0;
let roundsWon = 0;

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", touch);
  button.addEventListener("touchstart", touch);

  button.addEventListener("transitionend", function () {
    this.classList.remove("buttonAnimate");
  });
});

function touch(e) {
  e.preventDefault();
  this.classList.add("buttonAnimate");
  play(this.textContent);
}

function play(playerPick) {
  roundsPlayed++;

  computerResult = compute();

  computerPick.textContent = "Computer picked " + computerResult;

  if (playerPick == computerResult) {
    resultRound.textContent = "Tie!";
  } else if (
    (playerPick == "Rock" && computerResult == "Scissors") ||
    (playerPick == "Paper" && computerResult == "Rock") ||
    (playerPick == "Scissors" && computerResult == "Paper")
  ) {
    resultRound.textContent = "You win this round!";
    roundsWon++;
  } else {
    resultRound.textContent = "You lose this round!";
  }

  rounds.textContent = roundsPlayed;

  if (roundsPlayed == 5) {
    if (roundsWon >= 3) {
      result.textContent = "You win!";
    } else {
      result.textContent = "You lost!";
    }
    roundsPlayed = 0;
    roundsWon = 0;
  } else {
    result.textContent = "";
  }
}

function compute() {
  let result = Math.random();
  result = result * 3;
  result = Math.floor(result);
  switch (result) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
    default:
      return "";
  }
}
