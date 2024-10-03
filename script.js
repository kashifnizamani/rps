

function getComputerChoice(){
    let computer_choice = Math.floor(Math.random() * 3) + 1;

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


function getHumanChoice(){

    let human_choice = prompt("input your choice of either rock, paper or scissors:")
    if(human_choice.toLowerCase() === 'rock' || human_choice.toLowerCase() === 'paper' || human_choice.toLowerCase() === 'scissor'){
    return human_choice;
   
    }
    else 
    return 'scissor';
}
let human_score = 0
let computer_score = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("its a draw! You both chose " + humanChoice);
    }
    else if(humanChoice === 'rock' && computerChoice === 'paper'){
       
            console.log('you lose! Paper beats Rock' )
            ++computer_score;
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissor'){
       
        console.log('you win!!! Rock beats Scissor' )
        ++human_score;
}
else if(humanChoice === 'paper' && computerChoice === 'rock'){
       
    console.log('you win!! Paper beats Rock' )
    ++human_score;
}
else if(humanChoice === 'paper' && computerChoice === 'scissor'){
       
    console.log('you lose! Scissor beats Paper' )
    ++computer_score;
}
else if(humanChoice === 'scissor' && computerChoice === 'paper'){
       
    console.log('you win! Scissor beats Paper' )
    ++human_score;
}
else if(humanChoice === 'scissor' && computerChoice === 'rock'){
       
    console.log('you lose!  Rock beats Scissor' )
    ++computer_score;
}

}



let humanSelection;
let computerSelection;
function playGame(){
    for(let i = 0; i < 5; i++){
         humanSelection = getHumanChoice().toLowerCase();
         computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
    if(human_score > computer_score){
        console.log(human_score + ' is greater than ' + computer_score + '!! you win:)');
    }
    else if(computer_score > human_score){
        console.log(human_score + ' is less than ' + computer_score + '!! you lose:(');
}
    else{
        console.log('the game concluded in a draw')
}

}
playGame();


