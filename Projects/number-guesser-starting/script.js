let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate a Target
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
  };

// Compare the Guesses
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (
      Math.abs(humanGuess - targetGuess) < Math.abs(computerGuess - targetGuess)
    ) {
      return true;
    } else if (
      Math.abs(humanGuess - targetGuess) > Math.abs(computerGuess - targetGuess)
    ) {
      return false;
    }
  };

  // Update Score
  const updateScore = winner => {
    if (winner === 'human') {
      humanScore += 1;
    } else if (winner === 'computer') {
      computerScore += 1;
    } else {
     console.log("error");
    }
  };


// Advance Round 

const advanceRound = () => currentRoundNumber += 1;