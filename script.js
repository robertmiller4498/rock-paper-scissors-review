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

const options = ['rock', 'paper', 'scissors'];
let choice = options[Math.floor(Math.random(options) * options.length)]

function getComputerChoice(options) {
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

let userInput = '';

function getUserChoice(userInput) {
    if (userInput.toLowerCase() === options[0]) {
        return userInput.toLowerCase();
    } else if (userInput.toLowerCase() === options[1]) {
        return userInput.toLowerCase();
    } else if (userInput.toLowerCase() === options[2]) {
        return userInput.toLowerCase();
    } else {
        return 'Error! Invalid user entry.';
    }
}

/* console.log(getUserChoice(userInput)) */

//TASK 3

// In this section we'll create a function (playRound()) that plays one round of RPS.

/* playRound() will take two parameters (playerSelection, computerSelection). Each of these parameters
will be set equal to their functions, respectively. The results will be logged as such:
"You Lose! Paper Beats Rock!" */

/* In simpler terms, playRound() will execute if else statements checking both user and computer inputs
when put up against one another, and returning a sentence that is the result of the round. */

let playerSelection = getUserChoice(userInput);
let computerSelection = getComputerChoice(options);

//Try this funciton as a switch statement. It is a lot to write.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! Play again to see who wins!`;
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        return `You Lose! Paper beats Rock!`;
    } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')) {
        return `You win! Rock beats Scissors!`;
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        return `You Win! Paper beats Rock!`;
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        return `You Lose! Scissors beats Paper!`;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
        return `You Lose! Rock beats Scissors!`;
    } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')) {
        return `You Win! Scissors beats paper!`;
    } else {
        return `Error. Invalid User Entry.`
    }
}

/* console.log(playRound(playerSelection, computerSelection)); */

//TASK 4

/* Write a function called game(). Call playRound() inside this function and play a five round game
that keeps score & reports a winner and loser. */

/* To do this, we'll create a loop  */