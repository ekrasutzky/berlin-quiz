// Quiz questions
const quizQuestions = [
    {
      question: "What is the capital city of Germany?",
      options: ["Munich", "Hamburg", "Berlin", "Frankfurt"],
      answer: "Berlin",
      feedback: "Correct! Berlin is the capital city of Germany.",
      image: "berlin.jpg"
    },
    {
      question: "Which famous wall divided Berlin during the Cold War?",
      options: ["Great Wall of China", "Berlin Wall", "Hadrian's Wall", "Wailing Wall"],
      answer: "Berlin Wall",
      feedback: "Correct! The Berlin Wall divided the city during the Cold War.",
      image: "berlin_wall.jpg"
    },
    // Add more questions here
  ];
  
  // Global variables
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Get DOM elements
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const submitButton = document.getElementById("submit-btn");
  const feedbackContainer = document.getElementById("feedback-container");
  const scoreElement = document.getElementById("score");
  
  // Load question
  function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    questionContainer.innerHTML = question.question;
  
    optionsContainer.innerHTML = "";
    question.options.forEach((option) => {
      const radioBtn = document.createElement("input");
      radioBtn.type = "radio";
      radioBtn.name = "option";
      radioBtn.value = option;
      optionsContainer.appendChild(radioBtn);
  
      const label = document.createElement("label");
      label.innerHTML = option;
      optionsContainer.appendChild(label);
  
      optionsContainer.appendChild(document.createElement("br"));
    });
  
    submitButton.disabled = false;
    feedbackContainer.innerHTML = "";
  }
  
  // Check answer
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
  
    if (!selectedOption) {
      return;
    }
  
    const userAnswer = selectedOption.value;
    const question = quizQuestions[currentQuestionIndex];
  
    if (userAnswer === question.answer) {
      score++;
      feedbackContainer.style.color = "#00a800";
      feedbackContainer.innerHTML = question.feedback;
    } else {
      feedbackContainer.style.color = "#ff0000";
      feedbackContainer.innerHTML = "Incorrect! The correct answer is: " + question.answer;
    }
  
    // Display image
    const image = document.createElement("img");
    image.src = question.image;
    image.alt = "Image related to the question";
    feedbackContainer.appendChild(document.createElement("br"));
    feedbackContainer.appendChild(image);
  
    submitButton.disabled = true;
    scoreElement.innerHTML = score;
  
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      setTimeout(loadQuestion, 2000); // Load next question after 2 seconds
    } else {
      questionContainer.innerHTML = "Quiz Completed!";
      optionsContainer.innerHTML = "";
    }
  }
  
  // Load initial question
  loadQuestion();
  
  // Event listener for submit button
  submitButton.addEventListener("click", checkAnswer);
  