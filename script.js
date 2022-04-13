//variables for ID tags in the HTML
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var timerBTN = document.getElementById("timerButton");
var nextBTN = document.getElementById("nextBtn");
var startBTN = document.getElementById("startBtn");
var results = document.getElementById("result");
var submitBTN = document.getElementById("submitName");
var myTextArea = document.getElementById("myTextArea")

//variables for quiz questions
var quizQuestions = [
  {
    question: "How do you round a number to the nearest integer?",
    option1: "Math.round();",
    option2: "Math.floor();",
    option3: "Math.ceil();",
    option4: "Math.rnd();",
    answer: "1"
  },
  {
    question: "The external JavaScript must contain the < script > tag.",
    option1: "True",
    option2: "False",
    option3: " ",
    option4: " ",
    answer: "2"
  },
  {
    question: "What does Hyper Text Markup stand for?",
    option1: "JavaSctipt",
    option2: "CSS",
    option3: "HTML",
    option4: "jQuery",
    answer: "3"
  },
  {
    question: "How do you write 'Hello' in an alert box?",
    option1: "alertbx('Hello');",
    option2: "('Hello').alert;",
    option3: "alert.hello;",
    option4: "alert('Hello');",
    answer: "4"
  },
  {
    question: "Is JavaScript case sensitive?",
    option1: "True",
    option2: "False",
    option3: " ",
    option4: " ",
    answer: "1"
  },
  {
    question: "What is an example of a self closing tag?",
    option1: "< p >",
    option2: "< br >",
    option3: "< section > ",
    option4: "< button > ",
    answer: "2"
  }
];
