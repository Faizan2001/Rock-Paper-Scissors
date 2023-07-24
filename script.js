function getComputerChoice(list) {

    return list[Math.floor((Math.random() * list.length))];

}




function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ((playerSelection == "rock") || (playerSelection == "paper") || (playerSelection == "scissors")) {
        if (playerSelection == computerSelection) {
            // console.log("Tie!");
            return -1;
        } else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                // console.log("You Lose! " + computerSelection + " beats " + playerSelection);
                return 0;
            } else if (computerSelection == "paper") {
                // console.log("You Win! " + playerSelection + " beats " + computerSelection);
                return 1;
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                // console.log("You Win! " + playerSelection + " beats " + computerSelection);
                return 1;
            } else if (computerSelection == "scissors") {
                //  console.log("You Lose! " + computerSelection + " beats " + playerSelection);
                return 0;
            }
        } else if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                // console.log("You Lose! " + computerSelection + " beats " + playerSelection);
                return 0;
            } else if (computerSelection == "scissors") {
                //   console.log("You Win! " + computerSelection + " beats " + playerSelection);
                return 1;
            }
        }

    } else {
        console.log("Wrong Input!")
        return -2;
    }

}

/*function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameCount = 0;
    let noGame = false;

    while (gameCount != 5 && noGame == false) {
        const cSelection = getComputerChoice(["Rock", "Paper", "Scissors"])
        const playerSelection = prompt(("Enter your selection: "));

        if ((playRound(playerSelection, cSelection)) == -2) {
            noGame = true;

        } else if ((playRound(playerSelection, cSelection)) == 1) {
            console.log(playerSelection + " vs. " + cSelection + "---> You Win!");
            playerScore++;
            gameCount++;

        } else if ((playRound(playerSelection, cSelection)) == 0) {
            console.log(playerSelection + " vs. " + cSelection + "---> You Lose!");
            computerScore++;
            gameCount++;
        } else {
            console.log(playerSelection + " vs. " + cSelection + "---> Tie!");
            gameCount++;
        }
    }

    if (noGame == false) {
        console.log("The player: " + playerScore + " vs. " + computerScore + " The computer")
        if (playerScore == computerScore) {
            console.log("Best of 5 result: Tie")
        } else if (playerScore > computerScore) {
            console.log("Best of 5 result: Player Wins!")
        } else {
            console.log("Best of 5 result: Computer Wins!")
        }
    }
} */

const buttons = document.querySelectorAll('button');
const label = document.getElementById('divHeader');
const header = document.querySelector('h2');
const gameScore = document.getElementById('gameScore');
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;



buttons.forEach((button) => {

    button.addEventListener('click', () => {

       
        var text = button.textContent;
        var cSelection = getComputerChoice(["Rock", "Paper", "Scissors"]);
        if ((playRound(text, cSelection)) == 1) {
          //  console.log(text + " vs. " + cSelection + "---> You Win!");
            playerScore++;
            gameCount++;
            header.textContent = `Games played: ${gameCount}`;
            label.textContent = `${text} beats ${cSelection}! Player Wins!`;
            gameScore.textContent = `Player : ${playerScore} - Computer : ${computerScore}`;

        } else if ((playRound(text, cSelection)) == 0) {
           // console.log(text + " vs. " + cSelection + "---> You Lose!");
            computerScore++;
            gameCount++;
            header.textContent =`Games played: ${gameCount}`;
            label.textContent = `${cSelection} beats ${text}! Computer Wins!`;
            gameScore.textContent = `Player : ${playerScore} - Computer : ${computerScore}`;
        } else {
         //   console.log(text + " vs. " + cSelection + "---> Tie!");
            gameCount++;
            label.textContent = `Tie! A hearty truce!`;
            header.textContent =`Games played: ${gameCount}`;
            gameScore.textContent = `Player : ${playerScore} - Computer : ${computerScore}`;
        }

        if (gameCount == 5) {
            header.textContent = "End of best of five!";
            if (playerScore == computerScore) {
                label.textContent = `Tie! We all live to fight another day.`;
            } else if (playerScore > computerScore) {
                label.textContent = `Computer has been defeated! Player wins with ${playerScore} points!`;
            } else {
                label.textContent = `Player has been defeated! Computer wins with ${computerScore} points!`;
            }

            gameCount = 0;
            playerScore = 0;
            computerScore = 0;
            gameScore.textContent = "Select to start again";

        } 
    }
    );

});


//game()



