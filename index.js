//importing required libraries
var readlineSync = require('readline-sync');
const chalk = require('chalk');
var userName = readlineSync.question("Hi! What is your good name? ");
console.log("Hi " + chalk.bold.blueBright(userName));

console.log("");
console.log(chalk.blackBright.bgWhiteBright.bold("Let's play Trivia quiz"));
console.log("");

var score = 0;

// storing scores
var scores = [
  {
    name: "Samyuktha",
    highScore: "3"
  },
  {
    name: "Gautham",
    highScore: "4"
  },
  {
    name: "Foxy",
    highScore: "1"
  }
]

// array of objects with questions and answers
var questions = [
  { question: "What has hands and a face, but can’t hold anything or smile?", answer: "Clock" },
  { question: "Four’s mother has three children: One, Two and ____?", answer: "Four" },
  { question: "Bahubali festival is related to", answer: "Jainism" },
  { question: "The language of Lakshadweep. a Union Territory of India, is", answer: "Malayalam" },
  { question: "Who is the author of the epic 'Meghdoot'?", answer: "Kalidas" },
  { question: "India's capital?", answer: "Delhi" }
]

var options = [
  { option: ['Chair', 'Clock', 'Mirror', 'Bottle'] },
  { option: ['One', 'Two', 'Three', 'Four'] },
  { option: ['Buddism', 'Islam', 'Hinduism', 'Jainism'] },
  { option: ['Malayalam', 'Tamil', 'Kannada', 'Telugu'] },
  { option: ['Vishakadatta', 'Kalidas', 'Valmiki', 'Banabhatta'] },
  { option: ['Mumbai', 'Bangalore', 'Delhi', 'Kolkata'] }
]
// Ask questions and check for answers - first half questions carry 1 point and second half carries 2 points
for (i = 0; i < questions.length; i++) {
  var level = (i < (questions.length / 2)) ? 1 : 2;
  if((i == parseInt(questions.length/2)) && (score == parseInt(questions.length/2))) 
    { console.log(chalk.whiteBright.bgGreenBright.bold("You are on level 2 now!")); } 
  else if ( level == 2 && score < (questions.length/2))
    { break;}
  
  var userAnsIndex = readlineSync.keyInSelect(options[i].option, questions[i].question);
  
  var userAns = options[i].option[userAnsIndex];
  if (userAns.toLowerCase() === questions[i].answer.toLowerCase()) {
    console.log(chalk.green("Correct!!"));
    score = score + level;
    console.log("Score :" + score);
    console.log("");
  }
  else {
    console.log(chalk.red("Incorrect :( "));
    score = score - level;
    console.log("Score :" + score);
    console.log("");
  }
}
console.log("");

// display highscore
console.log("High Scores are:");

// function to get highest score
function getHighestScore() {
  var highestScore = 0;
  for (i = 0; i < scores.length; i++) {
    console.log(scores[i].name + " : " + scores[i].highScore);
    highestScore = (scores[i].highScore > highestScore) ? scores[i].highScore : highestScore;
  }
  return highestScore;
}

// display player's score
var highestScore = getHighestScore();
console.log("");
console.log("Your Score :" + score + "");
console.log("");

var topper = "Congratulations! You topped leaderboard!! Kindly send a screenshot of the scores to the admin and they can update the leaderboard!";
var positiveScore = "Congratulations! You did a great job!"
var negativeScore = "Better luck next time!"

// display result
var result = (score > highestScore) ? console.log(chalk.green(topper)) : (score > 0) ? console.log(chalk.green(positiveScore)) : console.log(chalk.green(negativeScore));