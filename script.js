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
  });
  function generateIntroScreen(){
    let appDiv = $('<div>')
    appDiv.attr('id', 'app');
    let welcomeDiv = $('<div>')
    welcomeDiv.addClass('welcome');
    let header = $('<h1>')
    header.html('Disney Parks Quiz');
    welcomeDiv.append(header);
    
    let welcomeForm = $('<form>');
    let welcomeText = $('<p>');
    welcomeText.html(' Welcome to the Disney Quiz App');

    let startButton = $('<button>');
    startButton.attr('type', 'submit');
    startButton.attr('id', 'startQuiz');
    startButton.html('start');
    startButton.click({screenNumber:1, score:0},renderNext);

    welcomeForm.append(welcomeText);
    welcomeForm.append(startButton);

    welcomeDiv.append(welcomeForm);
    appDiv.append(welcomeDiv);
$('body').append(appDiv);
  }

  /*return
    <div class="welcome">
      <h1>Disney Parks Quiz</h1>
    <form>
      <p>
        Welcome to my Disney Quiz! Test your Disney Parks & Resorts trivia knowledge.
      </p>
      
      <button type="submit"id="startQuiz" autofocus>Let The Magic Begin!</button>
    </form>
  </div>
  */
    


  

  
  /********** RENDER FUNCTION(S) **********/ 
function renderNext(event){
  $('#app').empty()
  let questionDiv = $('<div>');
 let questionHeader = $('<h2>');
 questionHeader.html('Score : ' + event.data.score);
 questionDiv.append(questionHeader);
  if (event.data.screenNumber == 1){
    let submitButton = $('<button>');
    submitButton.attr('type', 'submit');
    submitButton.attr('id', 'nextQuestion');
    submitButton.html('Submit');
    submitButton.click({screenNumber:2, score:5},renderNext);
questionDiv.append(submitButton);
  }
  else if(event.data.screenNumber == 2){
    let submitButton = $('<button>');
    submitButton.attr('type', 'submit');
    submitButton.attr('id', 'nextQuestion');
    submitButton.html('Submit');
    submitButton.click({screenNumber:3, score:5},renderNext);
questionDiv.append(submitButton);

  }
  else if(event.data.screenNumber == 3){
    let submitButton = $('<button>');
    submitButton.attr('type', 'submit');
    submitButton.attr('id', 'nextQuestion');
    submitButton.html('Submit');
    submitButton.click({screenNumber:4, score:5},renderNext);
questionDiv.append(submitButton);

  }
  else if(event.data.screenNumber == 4){
    let submitButton = $('<button>');
    submitButton.attr('type', 'submit');
    submitButton.attr('id', 'nextQuestion');
    submitButton.html('Submit');
    submitButton.click({screenNumber:5, score:5},renderNext);
questionDiv.append(submitButton);
  }
  else if(event.data.screenNumber == 5){
    let finishButton = $('<button>');
    finishButton.attr('type', 'submit');
    finishButton.attr('id', 'nextQuestion');
    finishButton.html('Submit');
    finishButton.click({screenNumber:5, score:5},renderNext);
questionDiv.append(finishButton)
  }
  $('#app').append(questionDiv);
}

  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  

  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)
