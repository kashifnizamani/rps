let computer_choice = Math.floor(Math.random() * 3) + 1;

function getComputerChoice(){

    switch(computer_choice){
  case 1:
     return "rock";

  break;
  case 2:
    return "paper";
  break;
  case 3:
    return "scissor";
  break;

    }

}

console.log(getComputerChoice())

function getHumanChoice(){

    let human_choice = prompt("input your choice of either rock, paper or scissors:")
    if(human_choice.toLowerCase() === 'rock' || human_choice.toLowerCase() === 'paper' || human_choice.toLowerCase() === 'scissor'){
    return human_choice;
   
    }
    else 
    return 'scissor';
}
let human_score, computer_score = 0;
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("its a draw! You both chose " + humanChoice);
    }
    else if(humanChoice === 'rock' && computerChoice === 'paper'){
       
            console.log('you lose! Paper beats Rock' )
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissor'){
       
        console.log('you win!!! Rock beats Scissor' )
}
else if(humanChoice === 'paper' && computerChoice === 'rock'){
       
    console.log('you win!! Paper beats Rock' )
}
else if(humanChoice === 'paper' && computerChoice === 'scissor'){
       
    console.log('you lose! Scissor beats Paper' )
}
else if(humanChoice === 'scissor' && computerChoice === 'paper'){
       
    console.log('you win! Scissor beats Paper' )
}
else if(humanChoice === 'scissor' && computerChoice === 'rock'){
       
    console.log('you lose!  Rock beats Scissor' )
}

}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));