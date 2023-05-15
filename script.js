function getComputerChoice(list) {

    return list[Math.floor((Math.random() * list.length))];

}




function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()


    if (playerSelection == computerSelection) {
        console.log("Tie!")
    } else 
    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection)
        } else if (computerSelection == "paper") {
            console.log("You Win! " + playerSelection + " beats " + computerSelection)
        }
    } else
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("You Win! " + playerSelection + " beats " + computerSelection)
        } else if (computerSelection == "scissors") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection)
        }
    } else 
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection)
        } else if (computerSelection == "scissors") {
            console.log("You Win! " + computerSelection + " beats " + playerSelection)
        }
    }
}

const playerSelection = "Paper";
const computerSelection = getComputerChoice(["Rock", "Paper", "Scissors"])
console.log("Player: " + playerSelection)
console.log("Computer: " + computerSelection)

console.log(playRound(playerSelection, computerSelection));