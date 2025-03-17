// Selecting elements
const choices = document.querySelectorAll(".game div"); // Selects Stone, Paper, Scissor buttons
const myChoiceDisplay = document.getElementById("mychoice");
const computerChoiceDisplay = document.getElementById("computerchoice");
const myScoreDisplay = document.getElementById("myscore");
const computerScoreDisplay = document.getElementById("computerscore");
const resultDisplay = document.querySelector(".result b");
const restartButton = document.getElementById("clickme");

// Game variables
const choicesArray = ["Stone", "Paper", "Scissor"];
let myScore = 0;
let computerScore = 0;

// Function to generate computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choicesArray[randomIndex];
}

// Function to determine the winner
function getWinner(myChoice, computerChoice) {
    if (myChoice === computerChoice) {
        return "Draw";
    } 
    if (
        (myChoice === "Stone" && computerChoice === "Scissor") ||
        (myChoice === "Paper" && computerChoice === "Stone") ||
        (myChoice === "Scissor" && computerChoice === "Paper")
    ) {
        myScore++;
        return "You Won!";
    } else {
        computerScore++;
        return "Computer Won!";
    }
}

// Event listener for user choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const myChoice = choice.textContent;
        const computerChoice = getComputerChoice();
        const result = getWinner(myChoice, computerChoice);

        // Updating UI
        myChoiceDisplay.textContent = myChoice;
        computerChoiceDisplay.textContent = computerChoice;
        myScoreDisplay.textContent = myScore;
        computerScoreDisplay.textContent = computerScore;
        resultDisplay.textContent = result;
    });
});

// Restart button functionality
restartButton.addEventListener("click", () => {
    myScore = 0;
    computerScore = 0;
    myChoiceDisplay.textContent = "My Choice";
    computerChoiceDisplay.textContent = "Computer's Choice";
    myScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    resultDisplay.textContent = "Let's Play!";
});
