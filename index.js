const cell = document.getElementsByClassName('cell');
const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]
let turn = 'x';

const play = (i) => {
    if (!checkEndGame()) {
        //check if cell is clickable or not
        if (cell[i].innerHTML === '') {
            //update cell
            cell[i].innerHTML = turn === 'x' ? 'x' : 'o';
            cell[i].classList.add(`${turn === 'x' ? 'x' : 'o'}`);
            //check if game is over or not
            if (checkEndGame()) {
                let h1 = document.createElement('h1');
                document.body.appendChild(h1);
                h1.classList.add('game-ended')
                h1.innerHTML = 'game-ended'
            }
            else {
                //change turn
                turn === 'x' ? turn = 'o' : turn = 'x';
            }
        }
    }

}
const checkEndGame = () => {
    for (let j = 0; j < winningCondition.length; j++) {
        let a = cell[winningCondition[j][0]].innerHTML;
        let b = cell[winningCondition[j][1]].innerHTML;
        let c = cell[winningCondition[j][2]].innerHTML;

        if (a === turn && b === turn && c === turn) {
            return true
        }

    }
    return false

}



for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => play(i));

}

