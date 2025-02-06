document.addEventListener("DOMContentLoaded", () => {
  // Get HTML elements
  const roundNumber = document.getElementById("round-number");
  const rockBtn = document.getElementById("rock");
  const paperBtn = document.getElementById("paper");
  const scissorsBtn = document.getElementById("scissors");
  const playerScoreElement = document.querySelector(".your-score");
  const computerScoreElement = document.querySelector(".other-score");

  let roundIndex = 1;
  let totalRounds = localStorage.getItem("value") || 5; // Default to 5 rounds
  let playerScore = 0;
  let computerScore = 0;

  // Ensure total rounds are set to a number
  totalRounds = parseInt(totalRounds, 10);
  if (isNaN(totalRounds)) totalRounds = 5; // Fallback to 5 rounds

  // Update the round number displayed
  function updateRoundNumber() {
    roundNumber.textContent = roundIndex;
  }

  // Function to calculate the winner for each round
  function calculateWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "tie";
    }
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "player";
    }
    return "computer";
  }

  // Function to simulate computer's move
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // Update the scores and check for winner
  function updateScores(winner) {
    if (winner === "player") {
      playerScore++;
    } else if (winner === "computer") {
      computerScore++;
    }

    // Update the displayed scores
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    // Check if all rounds are finished
    if (roundIndex >= totalRounds) {
      const winner = playerScore > computerScore ? "Player" : "Computer";
      setTimeout(() => {
        window.location.href = `results.html?winner=${winner}`;
      }, 1000); // Delay for a second to let the final score be seen
    }
  }

  // Handle player's selection and update the game logic
  function handleSelection(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log("Player's choice:", playerChoice);
    console.log("Computer's choice:", computerChoice);

    const winner = calculateWinner(playerChoice, computerChoice);
    updateScores(winner);

    roundIndex++;
    updateRoundNumber();
  }

  // Add event listeners for player's selection
  rockBtn.addEventListener("click", () => handleSelection("rock"));
  paperBtn.addEventListener("click", () => handleSelection("paper"));
  scissorsBtn.addEventListener("click", () => handleSelection("scissors"));

  // Update round number
  updateRoundNumber();
});
