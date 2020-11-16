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
    score: 0
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
  $( document ).ready(function() { 
    generateIntroScreen()
    console.log( "Doc is ready!" ); 
  

  function generateIntroScreen(){
    $('<div/>').attr('id','welcomeDiv').appendTo('main');
    $('#welcomeDiv').html(`
    <h1 class= header> Disney Quiz App </h1>
    <p class= welcomeMessage> Welcome to my Disney Quiz App! Put your Disney Parks and Resorts knowledge to the test! </p>
    <button type=submit id=startButton class=btn autofocus> Let The Magic Begin</button>
    `
    )};

    

function generateQuizHeader(){
  $('<header/>').attr('id','quizHeader').appendTo('main');
}

function generateQuizInterface(){
  $('#welcomeDiv').empty();
  $('<div/>').attr('id','quizDiv').appendTo('main');
  $('#quizDiv').html(`
  <h1 class= header> Disney Quiz App </h1>
  <p class= questionNum> Question of </p>
  <p class= score> Score:  </p>
  <p class= currentQuestion> </p>
  <form class= questionForm>
  <ol>
  `)
  
}

/*if(answer == correctAnswer) {
  $('quizDiv').empty()
  $('#quizDiv').html(`
  <h1 class= header> Disney Quiz App </h1>
  <h1 class= correct>That is Correct!</h1>
  <button type="submit" class="nextQuestion">Next</button>
  <button type="submit" class="resetQuiz">Reset Quiz</button>
  `)
}
*/



/********** RENDER FUNCTION(S) **********/ 




//


 /********** EVENT HANDLER FUNCTIONS **********/

 $('#startButton').on('click', (event) =>{
  generateQuizInterface()
  });




});


 
