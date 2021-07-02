const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const reset = document.getElementById('reset');
const modal = document.querySelector('.modal');
const scoreboard = 
{
    player: 0,
    computer: 0
}

//play the game
function playGame(e)
{
    reset.style.display = 'inline-block';
    const playerSelection = e.target.id;
    const compSelection = getComputerSelection();
    const winner = getGameWinner(playerSelection, compSelection);
    showWinner(winner, compSelection);
}

//get computers selection
function getComputerSelection()
{
    const random = Math.floor(Math.random() * 3);
    if (random == 0)
    {
        return 'rock';
    } else if (random == 1)
    {
        return 'paper';
    } else if (random == 2)
    {
        return 'scissors';
    }
}

//get the winner
function getGameWinner(player, computer)
{
    if (player === computer)
    {
        return 'It is a tie!';
    } else if (player === 'rock' && computer === 'paper')
    {
      return 'computer';  
    } else if (player === 'rock' && computer === 'scissors')
    {
        return 'player';
    }

    if (player === 'paper' && computer === 'rock')
    {
        return 'player';
    } else if (player === 'paper' && computer === 'scissors')
    {
        return 'computer';
    }

    if (player === 'scissors' && computer === 'rock')
    {
        return 'computer';
    } else if (player === 'scissors' && computer === 'paper')
    {
        return 'player';
    }

}

//show who won
function showWinner(winner, compSelection)
{
    if (winner === 'player')
    {
        //increase player score 
        scoreboard.player++;
        //show the modal so you can see what the computer choose
        result.innerHTML = `
        <h1 class='text-win'>You win!<h1>
        <img src="images/${compSelection}.png">
        <p>The computer choose <strong>${compSelection}</strong></p>
        `;
    } else if (winner === 'computer')
    {
        //increase computers score 
        scoreboard.computer++;
        //show the modal so you can see what the computer choose
        result.innerHTML = `
        <h1 class='text-lose'>You lost!<h1>
        <img src="images/${compSelection}.png">
        <p>The computer choose <strong>${compSelection}</strong></p>
        `;
    } else 
    {
        result.innerHTML = `
        <h1>Its a draw!<h1>
        <img src="images/${compSelection}.png">
        <p>The computer choose <strong>${compSelection}</strong></p>
        `; 
    }
    //show the score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

    modal.style.display = 'block';
}

//reset the score
function resetScore()
{
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</p>
    `;
}


//clear the modal so we can keep playing
function clearModal(e)
{
    if (e.target == modal)
    {
        modal.style.display = 'none';
    }
}




//event listeners
choices.forEach(choice => choice.addEventListener('click', playGame));
window.addEventListener('click', clearModal);
reset.addEventListener('click', resetScore);