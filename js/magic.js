let userName = "Dominic";

userName ?  console.log("Hello, "  + userName + "!") : console.log("Hello!")

let userQuestion = "Good";

userQuestion ? console.log("How are you?, " + userQuestion + "!") : console.log("how ae you?")

var randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber)

var eightBall = "";

if (randomNumber === 0) {
    eightBall = "It is certain";
} else if (randomNumber === 1) {
    eightBall = "It is "
}