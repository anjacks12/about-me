'use strict';


//Asking user for name and giving a personalized greeting
let username = prompt('What is your name?');
alert('Hello ' + username + '! Welcome to my page. Here are seven questions to get to know me better.');


let points = 0; //counting number of questions user gets correct starting from 0

//Questions 1 through 5 incorporated in array; worked on this with Andres for lab 04 stretch goal
let questions = ['Do I like reading? Yes or No','Do I like driving in Seattle? Yes or No','Am I an only child?','Am I a night owl?','Do I like coffee?'];
let correctAnswers = ['yes','no','no','yes','yes'];
let replies = ['You\'re Right!','Sorry, not correct.'];

function questionQuiz() {
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]).toLowerCase();
    if (userAnswer === correctAnswers[i] || userAnswer === 'y') {
      points++;
      alert(replies[0]);
    } else if (userAnswer !== correctAnswers[i] && userAnswer === 'n') {
      alert(replies[1]);
    } else {
      alert('Please answer yes or no');
    }
  }
}
questionQuiz();

//Question 6: (got help from Talyor, TA on how to keep track of number of attempts)
function statesLived() {
  let numOfAttempts = 4;
  while (numOfAttempts > 0) {
    let guess = prompt('How many states have I lived in?');
    guess = parseInt(guess);

    if (guess === 3) { //correct answer is 3
      console.log('correct', guess); //track user input
      points++; //gives 1 point for answering question correctly
      alert('You\'re right!');
      break; // stops code once correct answer is entered
    } else if (guess > 3) {
      console.log('too high', guess); // track user input
      numOfAttempts--; //reduces number of guess by 1
      alert(`Too high. You have ${numOfAttempts} attempts left`);
    } else if (guess < 3) {
      console.log('Too low', guess); // track user input
      numOfAttempts--; //reduces number of guess by 1
      alert(`Too low. You have ${numOfAttempts} attempts left`); //gives correct answer when attempts = 0
    }
  } if (!numOfAttempts) {
    alert('Sorry, the correct answer was 3');
  }
}
statesLived();


//Question 7: (got help from Ryan, instructor, on adding conditional expressions to for and while loops)
let booksILike = ['thriller', 'mystery', 'historical fiction', 'crime', 'science fiction'];
function typesOfBooks() {
  let attempts = 6;
  let correctAnswer = false; //set as false since answer likely to be false
  while (attempts > 0 && !correctAnswer) { //while loop runs when "attempts" is greater than 0 AND "correctAnswer" is true; that's the purpose of the "!" before correctAnswer so code can run
    let guesses = prompt('What are my favorite types of books?');
    attempts--;
    for (let i = 0; i < 6; i++) {
      if (guesses === booksILike[i]) {
        points++;
        alert('You got it right!');
        correctAnswer = true; //changed "correctAnswer" to true to exit out of loop when a correct answer is typed; this changes the value of !correctAnswer, which was true in line 114, to false so the code stops running
      }
    } if (correctAnswer === false) {
      alert(`Sorry, try again. You have ${attempts} attempts left.`);
    }
  }
}
typesOfBooks();
alert(` I like reading ${booksILike} novels`); //show the user all the possible answers


//personalized parting message
alert(username + ', you got ' + points + ' out of 7 questions correct on the quiz. Thank you for visiting my page. I hope you enjoyed it!');
