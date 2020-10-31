const result = document.querySelector(".result");
const computerPick = document.querySelector(".computerPick");
//clear result placeholder
result.textContent = "";
computerPick.textContent = "";

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("touchstart", function (e) {
    console.log(this.textContent);
    this.classList.add("buttonAnimate");
    play(this.textContent);
  });
  button.addEventListener("transitionend", function () {
    this.classList.remove("buttonAnimate");
  });
});

function play(playerPick) {
  computerResult = compute();

  computerPick.textContent = "Computer picked " + computerResult;

  if (playerPick == computerResult) {
    result.textContent = "Tie!";
    return;
  }

  if (
    (playerPick == "Rock" && computerResult == "Scissors") ||
    (playerPick == "Paper" && computerResult == "Rock") ||
    (playerPick == "Scissors" && computerResult == "Paper")
  ) {
    result.textContent = "You win!";
    return;
  } else {
    result.textContent = "You lose!";
    return;
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
