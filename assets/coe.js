let playerWin = 0;
let computerWin = 0;
let roundTally = 0;
const buttons = document.querySelectorAll('.selection');
const playerDisplay = document.querySelector('.playerDisplay')
const computerDisplay = document.querySelector('.computerDisplay')
const roundDisplay = document.querySelector('.roundDisplay')
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const winnerDisplay = document.querySelector('.winnerDisplay')
const playerEmoji = document.querySelector('.playerEmoji')
const computerEmoji = document.querySelector('.computerEmoji')
const RPSCHOICES = ['Fire', 'Grass', 'Water']
const playerSelection = getPlayerChoice();
const resetButton = document.querySelector('.resetButton')
const gameContainer = document.querySelector('.gameContainer')
const resetContainer = document.querySelector('.resetContainer')
const playButtonContainer = document.querySelector('.playButtonContainer')
const playButton = document.querySelector('.playButton')
const backButtonContainer = document.querySelector('.backButtonContainer')
const backButton = document.querySelector('.backButton')
const uiButtonsContainer = document.querySelector('.uiButtonsContainer')
const instructions = document.querySelector('.instructions')


playButton.addEventListener('click', function(){
    gameContainer.style.display = 'flex'
    resetContainer.style.display = 'flex'
    backButtonContainer.style.display = 'flex'
    uiButtonsContainer.style.display = 'flex'
    playButtonContainer.style='display: none;'
    instructions.style='display: none;'
})

backButton.addEventListener('click', function(){
    gameContainer.style.display = 'none'
    resetContainer.style.display = 'none'
    backButtonContainer.style.display = 'none'
    uiButtonsContainer.style.display = 'none'
    playButtonContainer.style.display = 'flex'
    instructions.style.display = 'flex'
})

//getComputerChoice that wil randomly return either fire, grass or water

function getComputerChoice() {
    const ComputerChoice = Math.floor(Math.random() * RPSCHOICES.length);
    return RPSCHOICES[ComputerChoice];
}
function getPlayerChoice() {
    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            if (playerWin == 10) {
                winnerDisplay.innerHTML = 'Game over! Player Wins!'
            }

            if (computerWin == 10) {
                winnerDisplay.innerHTML = 'Game over! Computer Wins!'
            }

            if (playerWin < 10 && computerWin < 10) {
                console.log(playRound(button.value))
                playerDisplay.innerHTML = 'Player: ' + button.value
                
                
            } else {
                console.log('Game over!')
                return
            }

            if (button.value === 'Fire') {
                playerEmoji.innerHTML = '🔥'
            } else if (button.value === 'Grass') {
                playerEmoji.innerHTML = '🌿'
            } else {
                playerEmoji.innerHTML = '🌊'
            }
        })
    })
}


function playRound(playerSelection) {

    let computerSelection = getComputerChoice()
    computerDisplay.innerHTML = 'Computer: ' + computerSelection
    playerDisplay.id = 'result-selection'
    computerDisplay.id = 'result-selection'
    playerEmoji.id = 'result-selection'
    computerEmoji.id = 'result-selection'

    if (computerSelection === 'Fire') {
        computerEmoji.innerHTML = '🔥'
    } else if (computerSelection === 'Grass') {
        computerEmoji.innerHTML = '🌿'
    } else {
        computerEmoji.innerHTML = '🌊'
    }


    if (playerSelection == computerSelection) {
        console.log('Tie!')
        winnerDisplay.innerHTML = 'Winner: Tie!'

    } 

    else if ((playerSelection == 'Water' && computerSelection == 'Fire') ||
        (playerSelection == 'Fire' && computerSelection == 'Grass') ||
        (playerSelection == 'Grass' && computerSelection == 'Water')) {
        console.log('win: ' + playerSelection + ' beats ' + computerSelection)
        winnerDisplay.innerHTML = 'Winner: Player. ' + playerSelection + ' beats ' + computerSelection + '.'
        playerWin++
        playerScore.innerHTML = 'Player: ' + playerWin
        playerDisplay.id = 'winner'
        playerEmoji.id = 'winner'

    }

    else {
        console.log('loss: ' + computerSelection + ' beats ' + playerSelection)
        winnerDisplay.innerHTML = 'Winner: Computer. ' + computerSelection + ' beats ' + playerSelection + '.'
        computerWin++
        computerScore.innerHTML = 'Computer: ' + computerWin
        computerDisplay.id = 'winner'
        computerEmoji.id = 'winner'

    }

    
    roundTally++
    roundDisplay.innerHTML = 'Round: ' + roundTally


    console.log('Computer Choice:' + computerSelection)


    console.log ('Player Choice:' + playerSelection);
        
    console.log('Player Score:' + playerWin)


    console.log('Computer Score:' + computerWin)
}

const gameReset = function(){
    playerWin = 0;
    computerWin = 0;
    roundTally = 0;
    winnerDisplay.innerHTML = '';
    playerDisplay.innerHTML = 'Player: -';
    computerDisplay.innerHTML = 'Computer: -';
    roundDisplay.innerHTML = 'Round 1'
    playerScore.innerHTML = 'Player: 0';
    computerScore.innerHTML = 'Computer: 0';
    winnerDisplay.innerHTML = 'Winner: -';
    computerEmoji.innerHTML = '';
    playerEmoji.innerHTML = '';
    computerDisplay.removeAttribute('id');
    playerDisplay.removeAttribute('id');
    computerEmoji.removeAttribute('id');
    playerEmoji.removeAttribute('id');
}

resetButton.addEventListener('click', gameReset);








    






