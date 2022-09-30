var input = require("readline-sync");
console.log("Hey Hi Let's Test your Knowledge in Data Structures")
var name = input.question("\n\nWhat is Your name ?\n");
//console.log("Welcome! " + name + " to the Quiz \n");
console.log("\n\n Hi 👋", name, " Quiz Begins !");
var score = 0;
function play(ques, answer) {
  var userans = input.question(ques);

  if (userans === answer) {
    console.log("\nYou are right!!");
    score++;
  } else {
    console.log("\nWrong 🙃");

  }
  console.log("\n\nYour Score is: ", score, "\n");
}

var ques1 = {
  question: "\n1) Graph is a linear Data structure \n (true or false)\nAnswer : ",
  answer: "false"
}

var ques2 = {
  question: "2) The Size of the Linked Lists is ________ \n1.Dynamic 2.Fixed\n Answer : ",
  answer: "Dynamic"
}

var ques3 = {
  question: "3) Traversal is defined as?\n(1 or 2)\n 1.Accessing Each and every item  \n2.Arranging Data Items in some order \nAnswer : ",
  answer: "1"
}

var ques4 = {
  question: "4) In the following below tree structures find the odd one out \n(Binary Tree,Binary Search Tree, Expression Tree,Linked list tree)\nAnswer : ",
  answer: "Linked list tree"
}

var ques5 = {
  question: "5) The PUSH is the Same operation as POP?\n(true,false) \n Answer : ",
  answer: "false"
}

var questions = [ques1, ques2, ques3, ques4, ques5];



for (var i = 0; i < questions.length; i++) {
  currentques = questions[i];
  play(currentques.question, currentques.answer);
}

if (score === 5) {
  console.log("That's good You are much aware of Data Sturctures ✨✨")
}
else if (score === 4) {
  console.log("Good Keep it up ! ")
}
else if (score === 1, 2, 3) {
  console.log("Good Try")
}
else {
  console.log("That's fine Lets Learn Together")
}



console.log("\n\n\nThanks for participating");
console.log("____________________________________");