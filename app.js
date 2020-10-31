 let playerScore = 0;
 let computerScore = 0;
 const playerScore_span = document.getElementById("player-score");
 const computerScore_span = document.getElementById("computer-score");
 const scoreBoard_div = document.querySelector(".score-board");
 const outcome_p = document.querySelector(".outcome > p");
 const rock_div = document.getElementById("rock");
 const paper_div = document.getElementById("paper");
 const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const selections = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return selections[randomNumber];
}


function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const smallPlayerWord = "player".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    outcome_p.innerHTML = playerChoice (Player) + "beats" + computerChoice (Computer) + ". You win!";
}

function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const smallPlayerWord = "player".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    outcome_p.innerHTML = playerChoice (Player) + "loses to" + computerChoice (Computer) + ". You Lose!";

}

function draw(playerChoice, computerChoice) {
    const smallPlayerWord = "player".fontsize(3).sup();
    const smallCompWord = "Comp".fontsize(3).sup();
    outcome_p.innerHTML = playerChoice (Player) + "equals" + computerChoice (Computer) + ". It's a Draw!";

}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rockscissors";
        case "paperrock";
        case "scissorspaper";
            win(playerChoice, computerChoice);
            break;
        case "rockpaper";
        case "paperscissors";
        case "scissorsrock";
            lose(playerChoice, computerChoice);
            break;
        case "rockrock";
        case "paperpaper";
        case "scissorsscissors";
            draw(playerChoice, computerChoice);
            break;
    }
}

 function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
     })
    
     paper_div.addEventListener('click', function() {
        game("paper");
    })
    
    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
 }
 