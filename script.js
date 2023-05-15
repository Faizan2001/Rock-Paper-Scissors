function getComputerChoice(list) {
  
return list[Math.floor(Math.random()*list.length)];

}


console.log(getComputerChoice(["Rock", "Paper", "Scissors"]))