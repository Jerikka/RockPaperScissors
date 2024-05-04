const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll('button');

for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
    let playerSelection = (e.target.innerText);
    let computerSelection = Math.random();

    if(computerSelection < 0.34) {
        computerSelection = "Rock";
    } else if(computerSelection <= 0.67){
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    console.log(playerSelection,"The computer chose:",computerSelection);
    let result = checkWinner(playerSelection, computerSelection);
}

function checkWinner(){

}