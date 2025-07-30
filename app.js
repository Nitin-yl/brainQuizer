// Quiz Application JavaScript

// Question data
const QUESTIONS = [
  {
    "question": "What is the capital of France?",
    "options": ["London", "Berlin", "Paris", "Madrid"],
    "correctAnswer": 2,
    "category": "General",
    "difficulty": "easy"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "options": ["Venus", "Mars", "Jupiter", "Saturn"],
    "correctAnswer": 1,
    "category": "Science",
    "difficulty": "easy"
  },
  {
    "question": "Who painted the Mona Lisa?",
    "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    "correctAnswer": 2,
    "category": "History",
    "difficulty": "medium"
  },
  {
    "question": "In which sport would you perform a slam dunk?",
    "options": ["Tennis", "Basketball", "Football", "Baseball"],
    "correctAnswer": 1,
    "category": "Sports",
    "difficulty": "easy"
  },
  {
    "question": "What is the largest ocean on Earth?",
    "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    "correctAnswer": 3,
    "category": "General",
    "difficulty": "easy"
  },
  {
    "question": "What is the chemical symbol for gold?",
    "options": ["Go", "Gd", "Au", "Ag"],
    "correctAnswer": 2,
    "category": "Science",
    "difficulty": "medium"
  },
  {
    "question": "Which war ended in 1918?",
    "options": ["World War II", "World War I", "Vietnam War", "Korean War"],
    "correctAnswer": 1,
    "category": "History",
    "difficulty": "medium"
  },
  {
    "question": "How many players are on a soccer team on the field at one time?",
    "options": ["9", "10", "11", "12"],
    "correctAnswer": 2,
    "category": "Sports",
    "difficulty": "easy"
  },
  {
    "question": "What is the smallest country in the world?",
    "options": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    "correctAnswer": 1,
    "category": "General",
    "difficulty": "medium"
  },
  {
    "question": "Which element has the atomic number 1?",
    "options": ["Helium", "Hydrogen", "Lithium", "Carbon"],
    "correctAnswer": 1,
    "category": "Science",
    "difficulty": "medium"
  },
  {
    "question": "Who was the first President of the United States?",
    "options": ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
    "correctAnswer": 2,
    "category": "History",
    "difficulty": "easy"
  },
  {
    "question": "Which tennis tournament is played on grass courts?",
    "options": ["US Open", "French Open", "Wimbledon", "Australian Open"],
    "correctAnswer": 2,
    "category": "Sports",
    "difficulty": "medium"
  },
  {
    "question": "What is the most spoken language in the world?",
    "options": ["English", "Spanish", "Mandarin Chinese", "Hindi"],
    "correctAnswer": 2,
    "category": "General",
    "difficulty": "medium"
  },
  {
    "question": "What is the speed of light in vacuum?",
    "options": ["300,000 km/s", "299,792,458 m/s", "186,000 miles/s", "All of the above"],
    "correctAnswer": 3,
    "category": "Science",
    "difficulty": "hard"
  },
  {
    "question": "In which year did the Berlin Wall fall?",
    "options": ["1987", "1988", "1989", "1990"],
    "correctAnswer": 2,
    "category": "History",
    "difficulty": "medium"
  },
  {
    "question": "Which country has won the most FIFA World Cups?",
    "options": ["Germany", "Argentina", "Italy", "Brazil"],
    "correctAnswer": 3,
    "category": "Sports",
    "difficulty": "medium"
  },
  {
    "question": "What is the largest mammal in the world?",
    "options": ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    "correctAnswer": 1,
    "category": "General",
    "difficulty": "easy"
  },
  {
    "question": "Which gas makes up approximately 78% of Earth's atmosphere?",
    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
    "correctAnswer": 2,
    "category": "Science",
    "difficulty": "medium"
  },
  {
    "question": "Who wrote the play 'Romeo and Juliet'?",
    "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    "correctAnswer": 1,
    "category": "History",
    "difficulty": "easy"
  },
  {
    "question": "In which sport is the term 'hole in one' used?",
    "options": ["Golf", "Tennis", "Bowling", "Darts"],
    "correctAnswer": 0,
    "category": "Sports",
    "difficulty": "easy"
  },
  {
    "question": "What is the currency of Japan?",
    "options": ["Yuan", "Won", "Yen", "Rupee"],
    "correctAnswer": 2,
    "category": "General",
    "difficulty": "easy"
  },
  {
    "question": "What is the hardest natural substance on Earth?",
    "options": ["Gold", "Iron", "Diamond", "Quartz"],
    "correctAnswer": 2,
    "category": "Science",
    "difficulty": "medium"
  },
  {
    "question": "Which ancient wonder of the world was located in Alexandria?",
    "options": ["Hanging Gardens", "Lighthouse of Alexandria", "Colossus of Rhodes", "Temple of Artemis"],
    "correctAnswer": 1,
    "category": "History",
    "difficulty": "hard"
  },
  {
    "question": "How many Grand Slam tournaments are there in tennis per year?",
    "options": ["3", "4", "5", "6"],
    "correctAnswer": 1,
    "category": "Sports",
    "difficulty": "medium"
  },
  {
    "question": "Which continent has the most countries?",
    "options": ["Asia", "Europe", "Africa", "South America"],
    "correctAnswer": 2,
    "category": "General",
    "difficulty": "medium"
  },
  {
    "question": "What is the boiling point of water at sea level?",
    "options": ["90°C", "95°C", "100°C", "105°C"],
    "correctAnswer": 2,
    "category": "Science",
    "difficulty": "easy"
  },
  {
    "question": "Which empire was ruled by Julius Caesar?",
    "options": ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
    "correctAnswer": 1,
    "category": "History",
    "difficulty": "easy"
  },
  {
    "question": "Which team sport is played on the largest field?",
    "options": ["Football", "Soccer", "Polo", "Field Hockey"],
    "correctAnswer": 2,
    "category": "Sports",
    "difficulty": "hard"
  },
  {
    "question": "What is the most abundant gas in the universe?",
    "options": ["Oxygen", "Helium", "Hydrogen", "Carbon"],
    "correctAnswer": 2,
    "category": "Science",
    "difficulty": "hard"
  },
  {
    "question": "Which year did World War II end?",
    "options": ["1944", "1945", "1946", "1947"],
    "correctAnswer": 1,
    "category": "History",
    "difficulty": "easy"
  }
];

// Application state
let currentState = {
  screen: 'welcome',
  settings: {
    category: 'General',
    difficulty: 'easy',
    questionCount: 10
  },
  quiz: {
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
    score: 0,
    startTime: null,
    endTime: null
  },
  timer: {
    timeLeft: 30,
    interval: null
  }
};

// DOM elements
const elements = {
  welcomeScreen: document.getElementById('welcome-screen'),
  quizScreen: document.getElementById('quiz-screen'),
  resultsScreen: document.getElementById('results-screen'),
  
  // Welcome screen elements
  categorySelect: document.getElementById('category-select'),
  difficultySelect: document.getElementById('difficulty-select'),
  questionsSelect: document.getElementById('questions-select'),
  startQuizBtn: document.getElementById('start-quiz-btn'),
  
  // Quiz screen elements
  currentQuestion: document.getElementById('current-question'),
  totalQuestions: document.getElementById('total-questions'),
  timer: document.getElementById('timer'),
  progressFill: document.getElementById('progress-fill'),
  questionText: document.getElementById('question-text'),
  answerOptions: document.getElementById('answer-options'),
  
  // Results screen elements
  finalPercentage: document.getElementById('final-percentage'),
  correctAnswers: document.getElementById('correct-answers'),
  totalAnswered: document.getElementById('total-answered'),
  timeTaken: document.getElementById('time-taken'),
  finalScore: document.getElementById('final-score'),
  playAgainBtn: document.getElementById('play-again-btn'),
  changeSettingsBtn: document.getElementById('change-settings-btn')
};

// Utility functions
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function showScreen(screenName) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  switch(screenName) {
    case 'welcome':
      elements.welcomeScreen.classList.add('active');
      break;
    case 'quiz':
      elements.quizScreen.classList.add('active');
      break;
    case 'results':
      elements.resultsScreen.classList.add('active');
      break;
  }
  
  currentState.screen = screenName;
}

// Quiz functions
function getQuestionsByCategory(category) {
  return QUESTIONS.filter(q => q.category === category);
}

function getQuestionsByCategoryAndDifficulty(category, difficulty) {
  return QUESTIONS.filter(q => q.category === category && q.difficulty === difficulty);
}

function prepareQuiz() {
  const { category, difficulty, questionCount } = currentState.settings;
  
  // Start with questions from selected category and difficulty
  let availableQuestions = getQuestionsByCategoryAndDifficulty(category, difficulty);
  
  // If not enough questions in the specific difficulty, get more from same category but other difficulties
  if (availableQuestions.length < questionCount) {
    const categoryQuestions = getQuestionsByCategory(category);
    availableQuestions = categoryQuestions;
  }
  
  // If still not enough questions in the category, limit to what's available
  if (availableQuestions.length < questionCount) {
    console.warn(`Not enough questions in ${category} category. Using ${availableQuestions.length} questions instead of ${questionCount}.`);
  }
  
  // Shuffle and select required number of questions (or all available if less than requested)
  const shuffledQuestions = shuffleArray(availableQuestions);
  const actualQuestionCount = Math.min(questionCount, shuffledQuestions.length);
  currentState.quiz.questions = shuffledQuestions.slice(0, actualQuestionCount);
  
  // Shuffle answer options for each question
  currentState.quiz.questions = currentState.quiz.questions.map(question => {
    const options = [...question.options];
    const correctAnswer = question.correctAnswer;
    const correctOption = options[correctAnswer];
    
    const shuffledOptions = shuffleArray(options);
    const newCorrectAnswer = shuffledOptions.indexOf(correctOption);
    
    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswer
    };
  });
  
  // Reset quiz state
  currentState.quiz.currentQuestionIndex = 0;
  currentState.quiz.answers = [];
  currentState.quiz.score = 0;
  currentState.quiz.startTime = new Date();
  currentState.quiz.endTime = null;
}

function startQuiz() {
  // Get settings from form
  currentState.settings.category = elements.categorySelect.value;
  currentState.settings.difficulty = elements.difficultySelect.value;
  currentState.settings.questionCount = parseInt(elements.questionsSelect.value);
  
  // Prepare quiz questions
  prepareQuiz();
  
  // Check if we have questions
  if (currentState.quiz.questions.length === 0) {
    alert('No questions available for the selected category and difficulty. Please try different settings.');
    return;
  }
  
  // Update UI
  elements.totalQuestions.textContent = currentState.quiz.questions.length;
  
  // Show quiz screen and display first question
  showScreen('quiz');
  displayCurrentQuestion();
  startTimer();
}

function displayCurrentQuestion() {
  const question = currentState.quiz.questions[currentState.quiz.currentQuestionIndex];
  const questionNumber = currentState.quiz.currentQuestionIndex + 1;
  const totalQuestions = currentState.quiz.questions.length;
  
  // Update question counter and progress
  elements.currentQuestion.textContent = questionNumber;
  const progressPercentage = (questionNumber / totalQuestions) * 100;
  elements.progressFill.style.width = `${progressPercentage}%`;
  
  // Display question
  elements.questionText.textContent = question.question;
  
  // Create answer options
  elements.answerOptions.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'answer-option';
    button.textContent = option;
    button.addEventListener('click', () => selectAnswer(index));
    elements.answerOptions.appendChild(button);
  });
  
  // Reset timer
  resetTimer();
}

function selectAnswer(selectedIndex) {
  const question = currentState.quiz.questions[currentState.quiz.currentQuestionIndex];
  const answerButtons = elements.answerOptions.querySelectorAll('.answer-option');
  
  // Disable all buttons
  answerButtons.forEach(btn => btn.disabled = true);
  
  // Mark selected answer
  answerButtons[selectedIndex].classList.add('selected');
  
  // Show correct/incorrect feedback
  answerButtons.forEach((btn, index) => {
    if (index === question.correctAnswer) {
      btn.classList.add('correct');
    } else if (index === selectedIndex && index !== question.correctAnswer) {
      btn.classList.add('incorrect');
    }
  });
  
  // Calculate score
  const isCorrect = selectedIndex === question.correctAnswer;
  const timeBonus = Math.max(0, currentState.timer.timeLeft);
  const difficultyMultiplier = {
    'easy': 1,
    'medium': 1.5,
    'hard': 2
  };
  
  const points = isCorrect ? 
    Math.round(100 * difficultyMultiplier[question.difficulty] + timeBonus) : 0;
  
  // Store answer
  currentState.quiz.answers.push({
    questionIndex: currentState.quiz.currentQuestionIndex,
    selectedAnswer: selectedIndex,
    correctAnswer: question.correctAnswer,
    isCorrect: isCorrect,
    points: points,
    timeLeft: currentState.timer.timeLeft
  });
  
  currentState.quiz.score += points;
  
  // Stop timer
  clearInterval(currentState.timer.interval);
  
  // Move to next question after delay
  setTimeout(() => {
    nextQuestion();
  }, 2000);
}

function nextQuestion() {
  currentState.quiz.currentQuestionIndex++;
  
  if (currentState.quiz.currentQuestionIndex >= currentState.quiz.questions.length) {
    // Quiz finished
    finishQuiz();
  } else {
    // Display next question
    displayCurrentQuestion();
    startTimer();
  }
}

function startTimer() {
  currentState.timer.timeLeft = 30;
  updateTimerDisplay();
  
  currentState.timer.interval = setInterval(() => {
    currentState.timer.timeLeft--;
    updateTimerDisplay();
    
    if (currentState.timer.timeLeft <= 0) {
      // Time's up - auto-select no answer
      timeUp();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(currentState.timer.interval);
  currentState.timer.timeLeft = 30;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  elements.timer.textContent = currentState.timer.timeLeft;
  
  // Add warning classes
  elements.timer.classList.remove('warning', 'danger');
  if (currentState.timer.timeLeft <= 10 && currentState.timer.timeLeft > 5) {
    elements.timer.classList.add('warning');
  } else if (currentState.timer.timeLeft <= 5) {
    elements.timer.classList.add('danger');
  }
}

function timeUp() {
  const question = currentState.quiz.questions[currentState.quiz.currentQuestionIndex];
  const answerButtons = elements.answerOptions.querySelectorAll('.answer-option');
  
  // Disable all buttons
  answerButtons.forEach(btn => btn.disabled = true);
  
  // Show correct answer
  answerButtons[question.correctAnswer].classList.add('correct');
  
  // Store answer (no answer selected)
  currentState.quiz.answers.push({
    questionIndex: currentState.quiz.currentQuestionIndex,
    selectedAnswer: -1,
    correctAnswer: question.correctAnswer,
    isCorrect: false,
    points: 0,
    timeLeft: 0
  });
  
  // Stop timer
  clearInterval(currentState.timer.interval);
  
  // Move to next question after delay
  setTimeout(() => {
    nextQuestion();
  }, 2000);
}

function finishQuiz() {
  currentState.quiz.endTime = new Date();
  showResults();
  showScreen('results');
}

function showResults() {
  const { answers, score, startTime, endTime, questions } = currentState.quiz;
  
  // Calculate statistics
  const correctCount = answers.filter(a => a.isCorrect).length;
  const totalQuestions = questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const timeDiff = Math.round((endTime - startTime) / 1000);
  
  // Update results display
  elements.finalPercentage.textContent = `${percentage}%`;
  elements.correctAnswers.textContent = correctCount;
  elements.totalAnswered.textContent = totalQuestions;
  elements.timeTaken.textContent = formatTime(timeDiff);
  elements.finalScore.textContent = score;
}

function restartQuiz() {
  showScreen('quiz');
  prepareQuiz();
  
  // Check if we have questions
  if (currentState.quiz.questions.length === 0) {
    alert('No questions available for the selected category and difficulty. Returning to settings.');
    showScreen('welcome');
    return;
  }
  
  elements.totalQuestions.textContent = currentState.quiz.questions.length;
  displayCurrentQuestion();
  startTimer();
}

function changeSettings() {
  showScreen('welcome');
}

// Event listeners
elements.startQuizBtn.addEventListener('click', startQuiz);
elements.playAgainBtn.addEventListener('click', restartQuiz);
elements.changeSettingsBtn.addEventListener('click', changeSettings);

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  showScreen('welcome');
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (currentState.screen === 'quiz') {
    const answerButtons = elements.answerOptions.querySelectorAll('.answer-option:not(:disabled)');
    
    if (e.key >= '1' && e.key <= '4') {
      const index = parseInt(e.key) - 1;
      if (answerButtons[index]) {
        selectAnswer(index);
      }
    }
  }
});