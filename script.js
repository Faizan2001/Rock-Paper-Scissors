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

function game() {
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
}




game()