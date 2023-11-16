var user = "";

var randomNumber = Math.floor(Math.random() * 3);


if (randomNumber === 0) {
    user = "Rock";
} else if (randomNumber === 1) {
    user = "Paper"
} else if (randomNumber === 2) {
    user = "Scissors"
} 
console.log("Your pick: ", user)

var computer = "";

var randomNumbe = Math.floor(Math.random() * 3);


if (randomNumbe === 0) {
    computer = "Rock";
} else if (randomNumbe === 1) {
    computer = "Paper"
} else if (randomNumbe === 2) {
    computer = "Scissors"
} 
console.log("Computer's pick: ", computer)

let winner;

if(user === "rock" && computer === "paper"){
    winner = "Computer"
} else if (user === "paper" && computer === "rock"){
  winner = "User"
} else if (user === "rock" && computer === "scissors"){
    winner = "User"
} else if (user === "scissors" && computer === "rock"){
    winner = "Computer"
} else if (user === "paper" && computer === "scissors"){
    winner = "Computer"
} else if (user === "scissors" && computer === "paper"){
    winner = "User"
} else if (user === computer){
    winner = "Something went wrong";
} else {
    winner = "Something went wrong";
} 

console.log("WINNER IS:" + winner);