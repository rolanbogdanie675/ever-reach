// filename: complexCode.js

/*
A complex code that creates an interactive quiz application.
The application asks a series of questions, provides options for answers, and keeps track of the user's score.
*/

// Question class representing a single question object
class Question {
  constructor(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
  }
}

// Quiz class representing the quiz application
class Quiz {
  constructor() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  checkAnswer(answer) {
    const currentQuestion = this.getQuestion();
    if (currentQuestion.answer === answer) {
      this.score++;
    }
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  displayScore() {
    console.log(`Your score: ${this.score}/${this.questions.length}`);
  }
}

// Create quiz instance
const quiz = new Quiz();

// Add questions to the quiz
quiz.addQuestion(
  new Question(
    "What is the capital of France?",
    ["London", "Paris", "Madrid", "Rome"],
    "Paris"
  )
);

quiz.addQuestion(
  new Question(
    "Which planet is known as the 'Red Planet'?",
    ["Mars", "Venus", "Jupiter", "Saturn"],
    "Mars"
  )
);

quiz.addQuestion(
  new Question(
    "What is the chemical symbol for water?",
    ["O2", "C6H12O6", "H2O", "CO2"],
    "H2O"
  )
);

// Function to display current question and options
function displayQuestion() {
  const question = quiz.getQuestion();
  console.log(question.question);
  for (let i = 0; i < question.options.length; i++) {
    console.log(`${i + 1}. ${question.options[i]}`);
  }
}

// Function to handle user input and progress to the next question
function handleInput(answer) {
  quiz.checkAnswer(answer);
  quiz.nextQuestion();

  if (quiz.currentQuestionIndex >= quiz.questions.length) {
    quiz.displayScore();
  } else {
    displayQuestion();
  }
}

// Start the quiz
displayQuestion();