let startGameBtn = document.getElementById("btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSCORS = "SCISSCORS";
DEFAULT_SELECTION = "ROCK";
RESULT_DRAW = "DRAW";
RESULT_PLAYER_WIN = "PLAYER_WON";
RESULT_COMPUETR_WIN = "COMPUTER_WON";

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSCORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSCORS) {
    alert(`invalid choice. we choose ${DEFAULT_SELECTION} for you!`);
    return DEFAULT_SELECTION;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber < 0.34) {
    return ROCK;
  } else if (randomNumber < 0.74) {
    return PAPER;
  } else {
    return SCISSCORS;
  }
};

const getWinner = function (pChoice, cChoice) {
  if (pChoice === cChoice) {
    return RESULT_DRAW;
  } else if (
    (pChoice === "ROCK" && cChoice === "PAPER") ||
    (pChoice === "PAPER" && cChoice === "SCISSCORS") ||
    (pChoice === "SCISSCORS" && cChoice === "ROCK")
  ) {
    return RESULT_COMPUETR_WIN;
  } else {
    return RESULT_PLAYER_WIN;
  }
};

startGameBtn.addEventListener("click", function () {
  console.log("Game started");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  const winner = getWinner(playerChoice, computerChoice);
  alert(winner);
});
