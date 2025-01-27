
const score = {
    wins: 0,
    losses: 0,
    draws: 0
}

const alertResult ={
    draw: alert(`Your move is ${userMove}, Computer move is ${computerMove}\nTie\nwins: ${score.wins}, losses: ${score.losses}, wins: ${score.draws}`),
    win: alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Win\nwins: ${score.wins}, losses: ${score.losses}, wins: ${score.draws}`),
    losses: alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Lose\nwins: ${score.wins}, losses: ${score.losses}, wins: ${score.draws}`)
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
        alertResult.draw
    }else if(userMove === 'Paper' && computerMove === 'Rock'){
        score.wins++;
        alertResult.win;

    }else if(userMove === 'Rock' && computerMove === 'Scissor'){
        score.wins++;
        alertResult.win;

    }else if(userMove === 'Scissor' && computerMove === 'Paper'){
        score.wins++;
        alertResult.win;

    }
    
    else if(userMove === 'Paper' && computerMove === 'Scissor'){
        score.losses++;
        alertResult.losses;

    }else if(userMove === 'Scissor' && computerMove === 'Rock'){
        score.losses++;
        alertResult.losses;

    }else if(userMove === 'Rock' && computerMove === 'Paper'){
        score.losses++;
        alertResult.losses;

    }
}