var playerOne = {
    name: 'Guilherme',
    choice: 'rock',
    winner: false
};
var playerTwo = {
    name: 'Max',
    choice: 'paper',
    winner: false
};
function handleWinner(playerOne, playerTwo) {
    if ((playerOne.choice === 'rock') && (playerTwo.choice === 'paper')) {
        playerTwo.winner = true;
        return playerTwo;
    }
    // .... rest of the logic here
}
var playerWinner = handleWinner(playerOne, playerTwo);
if (playerWinner !== undefined) {
    console.log(playerWinner.name);
}
