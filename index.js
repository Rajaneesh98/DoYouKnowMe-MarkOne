let readLineSync = require('readline-sync');

let userName = readLineSync.question("What is you'r Name? ")

console.log("Welcome ", userName)
console.log("Let's Start the Quiz!")
console.log("-------------")

let score = 0;

let one = {
  question: "Where do i live? ",
  answer: "Hyderabad",
}
let two = {
  question: "Where do i work? ",
  answer: "Capgemini",
}
let three = {
  question: "What is my favorite Color? ",
  answer: "White",
}
let four = {
  question: "Where is my Home Town? ",
  answer: "Puttaparthi",
}
let five = {
  question: "What is my Age? ",
  answer: "24",
}

let quiz = [one, two, three, four, five]

function play(question, answer) {
  let userAnswer = readLineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are Right! ")
    score += 2
  } else {
    console.log("Wrong Answer! ")
    score--
  }
  console.log("Your score is: ", score)
  console.log("-------------")
}

for (let i = 0; i < quiz.length; i++) {
  que = quiz[i].question
  ans = quiz[i].answer
  play(que, ans)
}

console.log("The Final Score is ", score)