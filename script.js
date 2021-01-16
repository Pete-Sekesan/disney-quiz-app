const store = {
    // 5 or more questions are required
    questions: [
      {
        question: 'What was the opening date of Walt Disney World Resort?',
        answers: [
          'October 1st, 1971',
          'July 17th, 1955',
          'May 4th, 1981',
          'January 9th, 1963'
        ],
        correctAnswer: 'October 1st, 1971'
      },
      {
        question: 'Which of the following is not a park located at Walt Disney World Resort in Florida?',
        answers: [
          'EPCOT Center',
          'Magic Kingdom',
          'Animal Kingdom',
          'Villains Universe'
        ],
        correctAnswer: 'Villains Universe'
      },
      {
          question: 'How many hotels are on property in Disneyland?',
          answers: [
              'Two',
              'Three',
              'One',
              'Five'
          ],
          correctAnswer: 'Three'
      },
      {
          question: 'What was the name of the first Disney Cruise Line ship?',
          answers: [
              'Magic',
              'Wonder',
              'Dream',
              'Fantasy'
          ],
          correctAnswer: 'Magic'
      },
      {
          question: 'What is the most recently opened Disney Resort?',
          answers: [
              'Tokyo Disney',
              'Disneyland Paris',
              'Hong Kong Disneyland',
              'Shanghai Disneyland'
          ],
          correctAnswer: 'Shanghai Disneyland'
      },
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0,
    submittingAnswer: false,
    isCorrect: false,
    usersAnswer: ""
  };
  
  /**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, that regenerates the view each time the store is updated. 
   * See your course material and access support for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */
  
  /********** TEMPLATE GENERATION FUNCTIONS **********/
  
  // These functions return HTML templates
  //This is the HTML that will be inserted when the user begins the quiz
function renderIntroScreen() {
return `
  <div class='introScreen wrapper'>
          <form>
          <p> Welcome to my Disney Quiz App! Put your knowledge to the test on all things Disney Parks and Resorts! </p>
                <button class='btn' type='submit' id='startQuiz'>Let The Magic Begin</button>
            </form>
        </div>
  `
}


  //This function creates two arrays housing the current question object's answers list and index numbers
  function generateAnswersArray(answers) {
    let answerArray = [];
    let indexArray = [];
    answers.forEach(answer => {
      answerArray.push(answer);
      indexArray.push(answers.indexOf(answer));
    });
    console.log(answerArray);
    console.log(indexArray);
    
    //returns a string with all of the list items from each indexed answer together
    return answerArray.map(answer => generateAnswersList(answer)).join('');
  }
  
  function generateAnswersList(answer){
    let questionNumber = store.questionNumber;
    let answerId = store.questions[questionNumber].answers.indexOf(answer);
  
    return `
      <li>      
        <input type='radio' name='answers' id='answer-${answerId}' value='${answer}'>
        <label for='answer-${answerId}'> ${answer}</label>      
      </li>
    `;
  }
  
  
  //This function will create the template for the questions main section
  function generateQuestionsScreen(questionsList) {
   
    let questionNumber = questionsList[store.questionNumber];
   
    return `
    <div class='questionsScreen wrapper'>
      <p>${questionNumber.question}</p>
      <form>
        <ol>
        ${generateAnswersArray(questionNumber.answers)}
        </ol>
        <button type='submit' class='btn' id='submitAnswer'>Submit</button>
      </form>
    </div>`
  }
  
  //This function will create the template for the quiz questions header section
  function generateScoreHeader() {
    return `
    <h1>Disney Quiz</h1>
    <h2>Question ${store.questionNumber + 1} out of ${store.questions.length}</h2>
    <h2>Current Score: ${store.score}</h2>
    `
  }
  
  //This function will create the submission results page that tells the user if the selection is correct or incorrect
  function generateResultsPage() {
    let correctAnswer = store.questions[store.questionNumber].correctAnswer;
    //console.log(correctAnswer);
    if (store.isCorrect === true) {
      return `
        <div class='submissionResult wrapper'>
          <form>
            <p>${correctAnswer} is correct!</p>
            <p>Great Job!</p>
            <p>Current Score: ${store.score} out of ${store.questions.length}</p>
            <button type='submit' class='btn' id='next-question'>Next</button>
          </form>
        </div>
      `;
    }
    else {
      return `
      <div class='submissionResult wrapper'>
        <form>
          <p>${store.usersAnswer} is incorrect!</p>
          <p>The correct answer was ${correctAnswer}.</p>
          <p> Just keep swimming!</p>
          <p>Current Score: ${store.score} out of ${store.questions.length}</p>
          <button type='submit' class='btn' id='next-question'>Next</button>
        </form>
      </div>
    `;
    }
  }
  //This function creates the template for the Quiz results
  function generateFinalResultsPage() {
    return `
      <div class="results-page wrapper">
      <form>
          <h3>Congrats, you finished the quiz!</h3>
          <img src="./images/castle-fireworks.gif" alt="disney castle fireworks">
          <p>Your Results: ${store.score} out of ${store.questions.length}</p>
          <p> "It's kind of fun to do the impossible" - Walt Disney</p>
          <button type='submit' class='btn' id='restartQuiz'>Restart Quiz</button>
      </form>
    </div>
    `;
  }
  /********** RENDER FUNCTION(S) **********/
  
  function renderQuizApp() {
    let html =""
    if (store.quizStarted === false) {
      $('main').html(renderIntroScreen());
      return;
    }
    else if (store.questionNumber >= 0 && store.questionNumber < store.questions.length) {
       if (store.submittingAnswer === true) {
          $('header').html(generateScoreHeader())
          $('main').html(generateResultsPage());
       }
       else {
          $('header').html(generateScoreHeader());
          $('main').html(generateQuestionsScreen(store.questions));
       } 
    }
    else {
      $('main').html(generateFinalResultsPage());
    }
  }
  
  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)
  
  //This handles when a user clicks on the start button on the welcome page
  function handleStartQuiz() {
    $('main').on('click', '#startQuiz', (event) => {
      event.preventDefault();
      store.quizStarted = true;
      renderQuizApp();
    });
  }
  
  //This handles the submit answer button on the questions form
  function handleSubmitAnswer() {
    $('main').on('click', '#submitAnswer', (event) => {
      event.preventDefault();
      let submittedAnswer = $("input[name='answers']:checked").val();
      let correctAnswer = store.questions[store.questionNumber].correctAnswer
      if (submittedAnswer == null) {
        alert('Please choose an answer!')
      }
      else {
        if(submittedAnswer === correctAnswer) {
          store.score += 1;
          store.isCorrect = true;
        }
        store.usersAnswer = submittedAnswer; 
        store.submittingAnswer = true;
        renderQuizApp();
      }    
    });
  }
  
  //This will handle the next question button click event
  function handleNextQuestion() {
    $('main').on('click', '#next-question', (event) =>{
      event.preventDefault();
      store.isCorrect = false;
      store.submittingAnswer = false;
      store.usersAnswer = "";
      if (store.questionNumber < store.questions.length) {
        store.questionNumber += 1;
      }    
      renderQuizApp();
    });
  }
  
  //This function will handle the restart the quiz button and reset the quiz to start over.
  function handleRestartQuiz() {
    $('main').on('click', '#restart-quiz', (event) => {
      event.preventDefault();
      store.score = 0;
      store.quizStarted = false;
      store.questionNumber = 0;
      renderQuizApp();
    });
  }
  // This is the callback function for the app that initializes the script
  function handleQuizApp () {
    renderQuizApp();
    handleStartQuiz();
    handleSubmitAnswer();
    handleNextQuestion();
    handleRestartQuiz();
  }
  
  $(handleQuizApp);