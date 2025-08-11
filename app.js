const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you.`);
    return;
  }
  return selection;
};

<<<<<<< HEAD
const getComputerChoice = () => {
=======
const getComputerChoice = function () {
>>>>>>> 4cb91b236c9f5b348b7acfd629f39559f4963e32
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

<<<<<<< HEAD
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', () => {
=======

startGameBtn.addEventListener("click", function () {
>>>>>>> 4cb91b236c9f5b348b7acfd629f39559f4963e32
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
<<<<<<< HEAD
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice(); //! Might be undefined
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  }else{
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, the computer picked ${computerChoice}, `;
  if (winner === RESULT_DRAW) {
    message = message + "it's a draw";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "congratulations, you've won!";
  } else message = message + 'The computer won.';
  alert(message);
  console.log("The game has ended.")
  gameIsRunning = false;
=======
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(`Player's choice: ${playerSelection}`);
  console.log(playerSelection);
>>>>>>> 4cb91b236c9f5b348b7acfd629f39559f4963e32
});
