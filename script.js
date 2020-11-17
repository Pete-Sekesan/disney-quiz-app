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
	
  






/********** RENDER FUNCTIONS **********/ 


//Render start page html
function generateStartPage() {
  $('<div/>').attr('id', 'welcomeDiv').appendTo('main');
  $('#welcomeDiv').html(`
  <h1 class= header> Disney Quiz App </h1>
  <p class= welcomeMessage> Welcome to my Disney Quiz App! Put your Disney Parks and Resorts knowledge to the test! </p>
  <button type=submit id=startButton class=btn autofocus> Let The Magic Begin</button>
  `)
};
//render main quiz interface page html
function generateQuizInterface() {
  $('<div/>').attr('id', 'quizDiv').appendTo('main');
  $('#quizDiv').html(`
  <h1 class= header> Disney Quiz App </h1>
  <p class= currentQuestion> </p>`)
};

//render correct answer screen html
function generateCorrectScreen() {
  $('quizDiv').html(
    `<p> That is Correct! </p>
      <button type=submit id=nextQuestion class=btn autofocus> Next</button>
`
  )
}

//render incorrect answer screen html
function generateWrongAnswer() {
  $('quizDiv').html(
    `<p> Sorry, That Answer is Incorrect! </p>
      <button type=submit id=nextQuestion class=btn autofocus> Next</button>
`
  )
}

//When complete,  render final screen with total score.
function generateResultsPage() {
  $('quizDiv').html(`
    <p> Great Job! You finished with a final score of :  </p>
    <button type=submit id=resetQuiz class=btn autofocus> Reset Quiz</button>`)
}
//render Header showing score and question progress
function generateScoreHeader() {
  $('<div/>').attr('id', 'scoreHeader').appendTo('main');
  $('#scoreHeader').html(`<p class= questionNum> Question of </p>
 <p class= score> Score:  </p>`)
}




//Function to render all html screens
function renderQuiz() {
  generateStartPage()
  
  console.log('renderQuiz ran!')
  //Have button start quiz

  //Show Current Question 

  //Create button to submit. If correct, show screen saying correct and move to next question
  //If correct, add 1 to score, and move up the question progress
  //If incorrect, show screen saying incorrect and move to next question, move up question progress only 
  //When complete, show final screen with total score.
  //Create button to restart quiz 

}
// Launching Quiz App
function handleQuizApp() {
  console.log('handleQuizApp ran!')
  renderQuiz()


}


$(handleQuizApp)
