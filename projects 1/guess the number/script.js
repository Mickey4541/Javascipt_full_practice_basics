let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

//whatever values user submit, we store that values
// and we show the whole array to the user.
//This help user not to guess the same number repeatedly.
let prevguess = []
//how many attempts user tried? we start from 1.
let numGuess = 1 //first guess


//in almost all games, there is such a variable that
//allows us to play Game. user cannot play game without checking this condition.
let playGame = true;
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
        console.log(guess);
    })
}

//validating if the user gives a valid guess between 1 and 100
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number between 1 and 100');
    }else if(guess < 1){
        alert('Please enter a valid number between 1 and 100');
    }else if(guess > 100){
        alert('Please enter a valid number between 1 and 100');
    }else{
        prevguess.push(guess);

        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}




//checking and printing that the guess is valid or not.
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Guessed it Right`)
        endGame();
}else if(guess < randomNumber){
    displayMessage(`Your guess is too low. Try again!`);
}else if(guess > randomNumber){
    displayMessage(`Your guess is too high. Try again!`);
}
}




//cleanup method or cleanup guess
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}





function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevguess = []
            numGuess = 1
            guessSlot.innerHTML = ''
            remaining.innerHTML = `${11 - numGuess}`;
            userInput.removeAttribute('disabled');
            startOver.removeChild(p);
        
        playGame = true
    })
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = 'newGame'>Start new Game.</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame();
}










