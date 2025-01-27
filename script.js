
const score = {
    wins: 0,
    losses: 0,
    draws: 0
}


function userMove(userMove){
    const computer = computerMove();

    compare(userMove, computer);
}

function computerMove(){
    let compMove = '';
    const random = Math.random();

    if(random < 1/3){
        compMove = 'Rock';
    }else if(random < 2/3){
        compMove = 'Paper';
    }else{
        compMove = 'Scissor'
    }

    return compMove;
}

function compare(userMove, computerMove){
    if(userMove === computerMove){
        score.draws++;
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nTie\nwins${score.wins}, losses: ${score.losses}, wins: ${score.draws}`);
    }else if(userMove === 'Paper' && computerMove === 'Rock'){
        score.wins++;
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Win\nwins${score.wins}, losses: ${score.losses}, wins: ${score.draws}`);
    }else if(userMove === 'Rock' && computerMove === 'Scissor'){
        score.wins++;
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Win\nwins${score.wins}, losses: ${score.losses}, wins: ${score.draws}`);
    }else if(userMove === 'Scissor' && computerMove === 'Paper'){
        score.wins++;
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Win\nwins${score.wins}, losses: ${score.losses}, wins: ${score.draws}`);
    }
    
    else if(userMove === 'Paper' && computerMove === 'Scissor'){
        score.losses++;
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Lose\nwins${score.wins}, losses: ${score.losses}, wins: ${score.draws}`);
    }else if(userMove === 'Scissor' && computerMove === 'Rock'){
        score.losses++;
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Lose\nwins${score.wins}, losses: ${score.losses}, wins: ${score.draws}`);
    }else if(userMove === 'Rock' && computerMove === 'Paper'){
        score.losses++;
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Lose\nwins${score.wins}, losses: ${score.losses}, wins: ${score.draws}`);
    }
}