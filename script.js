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