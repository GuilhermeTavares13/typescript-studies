type possibleChoices = 'rock' | 'paper' | 'scissors';

interface Player {
    name: string,
    choice: possibleChoices,
    winner: boolean;
}

const playerOne: Player = {
    name: 'Guilherme',
    choice: 'rock',
    winner: false
}

const playerTwo: Player = {
    name: 'Max',
    choice: 'paper',
    winner: false
}

function handleWinner(playerOne: Player, playerTwo: Player) : Player | undefined {
    if((playerOne.choice === 'rock') && (playerTwo.choice === 'paper')) {
        
        playerTwo.winner = true;
        return playerTwo;
    }
    // .... rest of the logic here
}

const playerWinner: Player | undefined = handleWinner(playerOne, playerTwo);

if (playerWinner !== undefined) {
    console.log(playerWinner.name);
}


function handleBinaryNumber(value: 1 | 0) {
    console.log(value);
}

handleBinaryNumber(1);
// handleBinaryNumber(8); will not work, because it accepts only 1 or 0

