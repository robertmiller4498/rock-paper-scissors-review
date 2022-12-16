//TASK 1

//ORIGINAL PLAN
/* Create three variables to represent 'rock' 'paper' and 'scissors'
We will then use function getComputerChoice to randomly select the computers getComputerChoice.
We will randomly select by using Math.Random and applying a (min of 0 and a max of 2)
This way rock = 0, paper = 1, and scissors = 2. */

/* const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors'; */

//SOLUTION EXPLAINED
/* I am leaving the above notes for context. What we have done instead is create a variable options.
Inside options are three elements - rock, paper, and scissors.
we then created a variable choice that takes the options array, gives it a Math.floor which rounds down
and returns the largest integer less than or equal to a given number. This is applied to Math.random(options)
which randomizes options multiplied by options length (3). */

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    let choice = options[Math.floor(Math.random(options) * options.length)];
    return choice;
}


/* console.log(getComputerChoice(options)); */

//TASK 2

/* Create a function getUserChoice. This funciton will take a case insensitive user input of either
'rock', 'paper', or 'scissors'. */

/* To do this, we'll start by creating userInput, which for now will equal ''. Our function
getUserChoice will check the userInput and confirm that it is equal to 'rock', 'paper', or 'scissors'
by using if else statements. In this case, else will return "Error, invalid user input." 
We will finish by applying .toLowerCase to each user input to make it case insensitive*/

/* let userInput = 'rock'; */

function getUserChoice() {
    let userInput = 'scissors';
    if (userInput.toLowerCase() === 'rock') {
        return userInput.toLowerCase();
    } else if (userInput.toLowerCase() === 'paper') {
        return userInput.toLowerCase();
    } else if (userInput.toLowerCase() === 'scissors') {
        return userInput.toLowerCase();
    } else {
        return 'Error! Invalid user entry.';
    }
}


//TASK 3

// In this section we'll create a function (playRound()) that plays one round of RPS.

/* playRound() will take two parameters (playerSelection, computerSelection). Each of these parameters
will be set equal to their functions, respectively. The results will be logged as such:
"You Lose! Paper Beats Rock!" */

/* In simpler terms, playRound() will execute if else statements checking both user and computer inputs
when put up against one another, and returning a sentence that is the result of the round. */

let userScore = 0;
let computerScore = 0;
let roundWinner = '';

function playRound() {
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        roundWinner = 'tie';
        return `It's a tie! Play again to see who wins!`;

    } if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock') 
    ) {
            userScore++;
            roundWinner = 'Player';
            return `You Win! ${playerSelection} beats ${computerSelection}! The score is now Player 1: ${userScore} Computer: ${computerScore}`;

     } if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock') 
     ) {
            computerScore++;
            roundWinner = 'Computer'
            return `You Lose! ${computerSelection} beats ${playerSelection}! The score is now Player 1: ${userScore} Computer: ${computerScore}`;
     }
    
    }

function isGameOver() {
    for (let i = 0; i < 6; i++) {
        if ((playerScore === 5) || (computerScore === 5)) {
            break;
        } console.log(playRound());
    }
    
}


console.log(playRound());

//TASK 4

/* Write a function called game(). Call playRound() inside this function and play a five round game
that keeps score & reports a winner and loser. */

/* To do this, we'll create a while loop that will continue to play until the number of rounds (i) is < 5.
We will need to determine a way to store each rounds results in order to tally a winner.*/


/* to this point, we've got it so it will play and log 5 rounds of RPS. Now we need to come up wtih a way
to log the results of each round and determine a final score.
To do this, we'll create two var userScore and compScore. After each round, we need to stop (break),
look at the result, and add a point to each score.*/

/*If playRound = winnning outcome => console.log('playround() + userScore = $userScore & compScore = $compScore) 
same for losing outcomes*/

