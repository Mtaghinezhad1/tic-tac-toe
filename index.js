const cells = document.getElementsByClassName('cell');
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
let cellValue = ['','','','','','','','',''];

const play = (i) => {
    if (!checkEndGame()) {
        //check if cells is clickable or not
        if (cells[i].innerHTML === '') {
            //update cells
            cellValue[i] = turn === 'x' ? 'x' : 'o';
            cells[i].innerHTML = cellValue[i];
            cells[i].classList.add(`${cellValue[i] === 'x' ? 'x' : 'o'}`);
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
        let a = cellValue[winningCondition[j][0]];
        let b = cellValue[winningCondition[j][1]];
        let c = cellValue[winningCondition[j][2]];

        if (a === turn && b === turn && c === turn) {
            return true
        }

    }
    return false

}



for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => play(i));

}

