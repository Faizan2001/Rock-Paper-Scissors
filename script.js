function getComputerChoice(list) {
  
return list[Math.floor(Math.random()*list.length)];

}


console.log(getComputerChoice(["rock", "paper", "scissors"]))