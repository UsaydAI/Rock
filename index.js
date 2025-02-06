// Variables
const modeSelector = document.getElementById("mode");
const body = document.getElementById("body");
const beginButton = document.getElementById("begin");
const roundsInput = document.getElementById("rounds");
let roundNumberIndex = 1;
let roundNumber = document.getElementById("round-number");
let roundsNumber = document.getElementById("rounds");

// Toggle dark mode
function toggleDarkMode() {
  if (modeSelector.value === "dark") {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  modeSelector.value = "dark";
} else {
  body.classList.remove("dark-mode");
  modeSelector.value = "light";
}

// Handle round input and store value
roundsInput.addEventListener("input", function () {
  let totalRounds;
  if (roundsInput.value !== undefined) {
    totalRounds = roundsInput.value;
    console.log(totalRounds);
    localStorage.setItem("rounds", totalRounds);
  }
});

// Update round number on page
function updateRoundNumber() {
  if (roundNumber) {
    roundNumber.textContent = roundNumberIndex;
  }
}

// Event listener to start the game
beginButton.addEventListener("click", function () {
  window.location.href = "game.html"; // Redirect to game.html
});

// Event listener to handle theme change
modeSelector.addEventListener("change", toggleDarkMode);

// Initialize the round number on the page
updateRoundNumber();
