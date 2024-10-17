const btn = document.querySelectorAll("button");
const div = document.createElement("div");
const body = document.querySelector("body");
const humanScoreElement = document.createElement('p');
const computerScoreElement = document.createElement('p');

let human_score = 0
let computer_score = 0;
let roundCount = 0;

let humanSelection;
let computerSelection;

body.append(div);
body.append(humanScoreElement, computerScoreElement);

btn.forEach(button => {

    button.addEventListener("click", playGame);
})


function updateScoreDisplay(){
    humanScoreElement.textContent = "Human Score: " + human_score;
    computerScoreElement.textContent = "Computer Score: " + computer_score;
}





function playGame(e){
  
         humanSelection = getHumanChoice(e).toLowerCase();
         computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        ++roundCount;

        if(roundCount === 5){
        if(human_score > computer_score){
            alert(human_score + ' is greater than ' + computer_score + '!! you win:)');
            roundCount = 0;
            human_score = 0;
            computer_score = 0;
            updateScoreDisplay();
        }
        else if(computer_score > human_score){
            alert(human_score + ' is less than ' + computer_score + '!! you lose:(');
            roundCount = 0;
            human_score = 0;
            computer_score = 0;
            updateScoreDisplay();
            
    }       
        else{
            alert('the game concluded in a draw')
            roundCount = 0;
            human_score = 0;
            computer_score = 0
            updateScoreDisplay();
    }  
}     
}


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


function getHumanChoice(e){

    let human_choice = e.target.textContent;
    return human_choice;
   
    
}


function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        div.textContent = "its a draw! You both chose " + humanChoice;
    }
    else if(humanChoice === 'rock' && computerChoice === 'paper'){
       
            div.textContent = 'you lose! Paper beats Rock';
            ++computer_score;
            updateScoreDisplay();
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissor'){
       
        div.textContent = 'you win!!! Rock beats Scissor' ;
        ++human_score;
        updateScoreDisplay();
}
else if(humanChoice === 'paper' && computerChoice === 'rock'){
       
    div.textContent = 'you win!! Paper beats Rock' ;
    ++human_score;
    updateScoreDisplay();
}
else if(humanChoice === 'paper' && computerChoice === 'scissor'){
       
    div.textContent = 'you lose! Scissor beats Paper';
    ++computer_score;
    updateScoreDisplay();
}
else if(humanChoice === 'scissors' && computerChoice === 'paper'){
       
    div.textContent = 'you win! Scissor beats Paper' ;
    ++human_score;
    updateScoreDisplay();
}
else if(humanChoice === 'scissors' && computerChoice === 'rock'){
       
    div.textContent = 'you lose!  Rock beats Scissor';
    ++computer_score;
    updateScoreDisplay();
}

}








