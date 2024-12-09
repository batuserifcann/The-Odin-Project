let humanScore = 0;
let computerScore = 0;
let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  return options[compChoice];
}

function getHumanChoice() {
  let humanChoice = prompt("rock , paper , scissors ?").toLowerCase();
  if (options.includes(humanChoice) === true) {
    return humanChoice;
  } else {
    humanChoice = prompt("rock , paper , scissors ?");
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log(
      "Computer win. You choose " +
        humanChoice +
        " Computer choose " +
        computerChoice
    );
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(
      "Player win. You choose " +
        humanChoice +
        " Computer choose " +
        computerChoice
    );
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(
      "Player win. You choose " +
        humanChoice +
        " Computer choose " +
        computerChoice
    );
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log(
      "Computer win. You choose " +
        humanChoice +
        " Computer choose " +
        computerChoice
    );
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log(
      "Computer win. You choose " +
        humanChoice +
        " Computer choose " +
        computerChoice
    );
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(
      "Player win. You choose " +
        humanChoice +
        " Computer choose " +
        computerChoice
    );
    humanScore++;
  } else if (humanChoice === computerChoice) {
    console.log(
      "You choose same. You choose " +
        humanChoice +
        " Computer choose " +
        computerChoice
    );
  }
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  console.log(humanScore);
  console.log(computerScore);
}

for (let i = 1; i <= 5; i++) {
  playGame();
}
