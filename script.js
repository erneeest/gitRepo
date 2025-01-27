const score = {
    wins: 0,
    losses: 0,
    draws: 0
}

function UserMove(userMove){
    const computer = ComputerMove();

    Compare(userMove, computer);
}

function ComputerMove(){
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

function Compare(userMove, computerMove){
    if(userMove === computerMove){
        score.draws++;
        DrawFunction(userMove, computerMove);
    }else if(userMove === 'Paper' && computerMove === 'Rock'){
        score.wins++;
        WinFunction(userMove, computerMove);
    }else if(userMove === 'Rock' && computerMove === 'Scissor'){
        score.wins++;
        WinFunction(userMove, computerMove);
    }else if(userMove === 'Scissor' && computerMove === 'Paper'){
        score.wins++;
        WinFunction(userMove, computerMove);
    }
    
    else if(userMove === 'Paper' && computerMove === 'Scissor'){
        score.losses++;
        LossesFunction(userMove, computerMove);

    }else if(userMove === 'Scissor' && computerMove === 'Rock'){
        score.losses++;
        LossesFunction(userMove, computerMove);

    }else if(userMove === 'Rock' && computerMove === 'Paper'){
        score.losses++;
        LossesFunction(userMove, computerMove);

    }
}

function WinFunction(userMove, computerMove){
    alert(`Your move is ${userMove}, Computer move is ${computerMove}\nTie\nwins: ${score.wins}, losses: ${score.losses}, draws: ${score.draws}`);
}
function LossesFunction(userMove, computerMove){
    alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Lose\nwins: ${score.wins}, losses: ${score.losses}, draws: ${score.draws}`);
}
function DrawFunction(userMove, computerMove){
    alert(`Your move is ${userMove}, Computer move is ${computerMove}\nTie\nwins: ${score.wins}, losses: ${score.losses}, draws: ${score.draws}`);
}