let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random()*3);
    switch(num){
        case 0 : return 'ROCK';
        case 1 : return 'PAPER';
        case 2 : return 'SCISSOR';
    };
}
 
function game(player,computer)
{
    if((player==='ROCK'&&computer==='SCISSOR')
        || (player ==='PAPER'&& computer=='ROCK')
        ||(player==='SCISSOR'&&computer==='PAPER'))
        playerScore++;
    if((player==='SCISSOR'&&computer==='ROCK')
        || (player ==='ROCK'&& computer=='PAPER')
        ||(player==='PAPER'&&computer==='SCISSOR'))
        computerScore++;
}

function symbolGenerate(item){
    switch (item){
        case 'ROCK' : return '✊';
        case 'PAPER' : return '✋';
        case 'SCISSOR' : return '✌';
    }
}



const winner = document.createElement('div');
const playAgain =document.createElement('button');
const body=document.querySelector('body');
playAgain.textContent='PLAY AGAIN'

function result (){
    if(playerScore===5) winner.textContent = 'You Won the game :)';
    else winner.textContent="You Lose !";
    winner.setAttribute('style','font-size: 80px ;');
    playAgain.setAttribute('style','font-size :30px; width:300px; height:40px; margin-top : 20px;  ');
    body.appendChild(winner);
    body.appendChild(playAgain);
}

playAgain.onclick = function() {
    playerScore=0;
    computerScore=0;
    playerSymbol.textContent='?';
    computerSymbol.textContent='?';
    playerUpdate.textContent='player score =0';
    computerUpdate.textContent='compute score = 0';
    winner.remove();
    playAgain.remove(); 
};

function activate (){
    let computerChoice = getComputerChoice();
    if(playerScore===5||computerScore===5){
         result();
    }
    else {
        game(playerChoice,computerChoice);
        playerSymbol.textContent= symbolGenerate(playerChoice);
        computerSymbol.textContent=symbolGenerate(computerChoice);
        playerUpdate.textContent=`player score = ${playerScore}`;
        computerUpdate.textContent=`computer score = ${computerScore};`
    }

}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');


const playerSymbol = document.querySelector('#playerSymbol');
const computerSymbol = document.querySelector('#computerSymbol');


const playerUpdate = document.querySelector('.pscore');
const computerUpdate = document.querySelector('.cscore');




let playerChoice='';
rock.onclick = function() { playerChoice='ROCK'; activate();};
paper.onclick = function() { playerChoice='PAPER'; activate();};
scissor.onclick = function() { playerChoice='SCISSOR'; activate();};
