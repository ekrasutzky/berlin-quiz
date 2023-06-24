// Quiz questions
const quizQuestions = [
  {
    question: "Germany is located in South America.",
    answer: false,
    feedback: "Incorrect! Germany is located in Europe."
  },
  {
    question: "The capital of Germany is Berlin.",
    answer: true,
    feedback: "Correct! Berlin is the capital of Germany."
  },
  {
    question: "The official language of Germany is English.",
    answer: false,
    feedback: "Incorrect! The official language of Germany is German."
  },
  // Add more questions here
];

// Global variables
let currentQuestionIndex = 0;
let score = 0;

// Get DOM elements
const questionContainer = document.getElementById("question-container");
const trueButton = document.getElementById("true-btn");
const falseButton = document.getElementById("false-btn");
const feedbackContainer = document.getElementById("feedback-container");
const scoreElement = document.getElementById("score");
const usernameInput = document.getElementById("username");

// Load question
function loadQuestion()
