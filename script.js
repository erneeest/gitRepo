
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
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nTie`);
    }else if(userMove === 'Paper' && computerMove === 'Rock'){
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Win`);
    }else if(userMove === 'Rock' && computerMove === 'Scissor'){
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Win`);
    }else if(userMove === 'Scissor' && computerMove === 'Paper'){
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Win`);
    }
    
    else if(userMove === 'Paper' && computerMove === 'Scissor'){
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Lose`);
    }else if(userMove === 'Scissor' && computerMove === 'Rock'){
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Lose`);
    }else if(userMove === 'Rock' && computerMove === 'Paper'){
        alert(`Your move is ${userMove}, Computer move is ${computerMove}\nYou Lose`);
    }
}