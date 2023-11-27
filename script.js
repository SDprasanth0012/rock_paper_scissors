
let playerScore =0;
let computerScore=0;


//to get the choice of computer
function getComputerChoice (){
    let result=Math.floor(Math.random()*3);
    switch (result){
        case 0 :
            return 'ROCK';
        case 1 : 
            return 'PAPER';
        case 2 :
            return 'SCISSOR';    
    }
}


function playRound(playerSelection , computerSelection){
    let a = playerSelection;
    let b = computerSelection;
    if(a===b) console.log("draw");
    if((a==='ROCK' && b==='PAPER') || (a==='PAPER' && b==='SCISSOR') || (a==='SCISSOR' && b==='ROCK') ) {
        computerScore++;
    }

    if((a==='PAPER' && b==='ROCK')||(a==='SCISSOR' && b==='PAPER')||(a==='ROCK' && b==='SCISSOR')){
        playerScore++;
    }    
}

// to generate symbol using string
function symbolGenerate(item){
    switch (item){
    case 'ROCK' :
        return '✊';
        break;
    case 'PAPER' :
        return '✋';
    case 'SCISSOR' :
        return '✌';    
    }
}

// the sequence of actions after a input is selected 
function activate( ){
     let computerChoice = getComputerChoice();
     if(playerScore==5||computerScore==5){
        winnerDeclaration();
     }
     else/*(playerScore!=5&&computerScore!=5)*/{
       
       playRound(playerChoice,computerChoice);
       
       playerSymbol.textContent = symbolGenerate(playerChoice);
       computerSymbol.textContent=symbolGenerate(computerChoice);

       score1.textContent = `Player score = ${playerScore}`;
       score2.textContent = `computer score = ${computerScore}`;
     }
}

let winner = document.createElement('div');
let playAgain = document.createElement('button');
let body = document.querySelector('body');


// to generate wining banner 
function winnerDeclaration(){
    if (playerScore===5) winner.textContent = 'You won the game';
    else winner.textContent='You lost the game !';
    winner.setAttribute('style', 'font-size : 100px;');
    body.appendChild(winner);
    playAgain.textContent='PlAY AGAIN';
    playAgain.setAttribute('class' ,'reset');
    playAgain.setAttribute('style','font-size:20px; height: 30px ; width: 150px; padding:2px; ');
    body.appendChild(playAgain);
}
playAgain.onclick= function(){
    playerScore=0;
    computerScore=0;
    playerSymbol.textContent='?';
    computerSymbol.textContent='?';
    playAgain.remove();
    winner.remove();
}


const rock = document.querySelector('#Rock');
const paper = document.querySelector('#paper');
const sicssor = document.querySelector('#scissor');

const playerSymbol = document.querySelector('#playerScore>.ps');
const computerSymbol = document.querySelector('#computerScore>.ps');

const score1 = document.querySelector('#playerScore>p');
const score2 = document.querySelector('#computerScore>p');



let playerChoice = '';

console.log(playerScore);
rock.onclick =  function(){playerChoice='ROCK';activate();};
paper.onclick= function(){playerChoice='PAPER';activate();};
sicssor.onclick=function(){playerChoice='SCISSOR';activate();};
