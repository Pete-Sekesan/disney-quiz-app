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
  function generateIntro(){
    $('main').append('<h1 class= start-screen>Disney Quiz App</h1>');
  $('main').append('<p class= start-screen> Welcome to my Disney Quiz App. Please click the button below to begin</p>');
  $('main').append('<button class= btn> Let the Magic Begin </button>')
  }

  
  /********** RENDER FUNCTION(S) **********/ 

  function renderQuizApp() {
    
    
    console.log('renderQuizApp ran');
  }
  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)
  function handleSubmit(){

    console.log('handleSubmit ran')
  }

$(generateIntro)