/**
 *  STORE structure
 */
const STORE = {
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
              '2',
              '3',
              '1',
              '5'
          ],
          correctAnswer: '3'
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
  
  

/********** EVENT HANDLERS **********/
	
  //Create button to submit. If correct, show screen saying correct and move to next question
  function handleStartQuiz() {
    $('#startButton').on('click', (event) => {
      event.preventDefault();
      STORE.quizStarted = true;
      renderQuiz()
      });
    }

    function handleSubmitAnswer() {
      $('#submitAnswer').on('click', (event) => {
        event.preventDefault();
        let submittedAnswer = $("input[name='answers']:checked").val()
        let correctAnswer = STORE.questions[STORE.questionNumber].correctAnswer
        if (submittedAnswer == null) {
          alert('Please select an option first.')
        }
        else {
          if(submittedAnswer === correctAnswer) {
            STORE.score += 1;
            STORE.isCorrect = true;
          }
          STORE.usersAnswer = submittedAnswer; 
          STORE.submittingAnswer = true;
          renderQuiz();
        }    
      });
    }

    function handleNextClick(){
      $("#nextQuestion").on("click", (event) =>{
        event.preventDefault();
        STORE.isCorrect = false;
        STORE.submittingAnswer = false;
        STORE.usersAnswer = "";
        if (STORE.questionNumber < STORE.questions.length) {
          STORE.questionNumber += 1;
        }    
        renderQuizApp();
      });
    }


/********** RENDER FUNCTIONS **********/ 




//Render start page html
function generateStartPage() {
  $('<div/>').attr('id', 'welcomeDiv').appendTo('main');
  $('#welcomeDiv').html(`
  <form>
  <p class= welcomeMessage> Welcome to my Disney Quiz App! Put your Disney Parks and Resorts knowledge to the test! </p>
  <button type=submit id=startButton class=btn autofocus> Let The Magic Begin</button>
  </form>
  `)
};
//render main quiz interface page html

function generateQuizInterface(questionList) {
  $('#welcomeDiv').empty();
  let questionNumber = questionList[STORE.questionNumber];
$('<div/>').attr('id', 'quizDiv').appendTo('main');
  $('#quizDiv').html(`
  <p class= currentQuestion>${questionNumber.question} </p>
  <form class= answerList> 
  <ol>
  ${generateAnswersArray(questionNumber.answers)}
  </ol>
  <button type="submit" id="submitAnswer">Submit</button>
  </form>
  `
  )
};
// create an array to hold current questions answers and it's index
function generateAnswersArray(answers){
let answerArray = [];
let indexArray = [];
answers.forEach(answer => {
  answerArray.push(answer);
  indexArray.push(answers.indexOf(answer));
  
});
return answerArray.map(answer => createAnswerOptions(answer)).join('');
  
}

// render answer options
function createAnswerOptions(answer){
  let questionNumber = STORE.questionNumber;
  let answersId = STORE.questions[questionNumber].answers.indexOf(answer);
  $('quizDiv').html(`
  <form>
  <li>      
  <input type="radio" name="answers" id="answer-${answersId}" value="${answer}">
  <label for="answer-${answersId}"> ${answer}</label>      
</li>
</form>
`
)}

//render answer submission screen html
function generateSubmissionPage() {
  let correctAnswer = STORE.questions[STORE.questionNumber].correctAnswer;
  console.log(correctAnswer);
  if (STORE.isCorrect === true){
    $('quizDiv').html(`
    <form>
    <p> That is Correct!!</p>
    <button type=submit id=nextQuestion class=btn autofocus> Next</button>
    </form>`)
}
else {
  $('quizDiv').html(`
  <form>
  <p> Sorry! That is not the correct answer</p>
  <p>The correct answer was ${correctAnswer}.</p>
  <button type=submit id=nextQuestion class=btn autofocus> Next</button>
  </form>`)


}
}
  

//When complete,  render final screen with total score.
function generateFinalResultsPage() {
  $('quizDiv').html(`
  <form>
    <p> Great Job! You finished with a final score of :  </p>
    <button type=submit id=resetQuiz class=btn autofocus> Reset Quiz</button>
    </form>`)
}
//render Header showing score and question progress
function generateScoreHeader() {
  $('<div/>').attr('id', 'scoreHeader').appendTo('header');
  $('#scoreHeader').html(`<p class= questionNum> Question ${STORE.questionNumber + 1} out of ${STORE.questions.length} </p>
 <p class= score> Score: ${STORE.score}  </p>`)
}



//Function to render all html screens
function renderQuiz() {
  let html = '';
  if (STORE.quizStarted === false) {
    $('main').html(generateStartPage());
    
  } else if (STORE.questionNumber >= 0 && STORE.questionNumber < STORE.questions.length) {
    if (STORE.submittingAnswer === true) {
      $('header').html(generateScoreHeader());
      $('main').html(generateSubmissionPage());
    } else {
      $('header').html(generateScoreHeader());
      $('main').html(generateQuizInterface(STORE.questions));
    }
    
    
  }
} 



  


function handleQuizApp() {
  renderQuiz();
  console.log('handleQuizApp Ran!')
  handleStartQuiz();
  console.log('handleStartQuiz Ran!')
  handleSubmitAnswer();
  console.log('handleSubmitAnswer Ran!')
  handleNextClick();
  console.log('handleNextClick Ran!')

}


$(handleQuizApp)
