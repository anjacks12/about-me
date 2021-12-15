'use strict';

//console.log('hello'); //This was my 'proof of life' code to check

//Asking user for name and giving a personalized greeting
let username = prompt('What is your name?');
//console.log(username);  //proof that code worked
alert('Hello ' + username + '! Welcome to my page. Here are seven questions to get to know me better.');

let points = 0; //counting number of questions user gets correct starting from 0

function iLikeReading() {
  //Question 1: Do I like reading? Assigning lowerLikeReading as variable to change likeReading input to lower case by using .toLowerCase()
  let likeReading = prompt('Do I like reading? Yes or No');
  let lowerLikeReading = likeReading.toLowerCase();
  //console.log(likeReading); //proof that code initially worked
  if (lowerLikeReading === 'yes' || lowerLikeReading === 'y') {
    //console.log('Yes, I like reading');
    points++; //gives 1 point for correct answer
    alert('Yes, I like reading');
  } else if (lowerLikeReading === 'no' || lowerLikeReading === 'n') {
    //console.log('No, I do like reading');
    alert('No, I do like reading');
  } else {
    //console.log('Please answer yes or no');
    alert('Please answer yes or no');
  }
}
iLikeReading();

function iLikeDriving() {
  //Question 2: Is Korean my favorite food? Added .toLowerCase() after prompt to make code cleaner (via example given in class)
  let likeDriving = prompt('Do I like driving in Seattle? Yes or No').toLowerCase();
  //console.log(likeDriving); //proof that code worked
  if (likeDriving === 'yes' || likeDriving === 'y') {
    //console.log('No. I actually hate driving downtown');
    alert('No. I actually hate driving downtown. Parking is hard to find');
  } else if (likeDriving === 'no' || likeDriving === 'n') {
    //console.log('Yes, I don't like driving in Seattle');
    points++; //gives 1 point for correct answer
    alert('Yes, I don\'t like driving in Seattle. I prefer the bus');
  } else {
    //console.log('Please answer yes or no');
    alert('Please answer yes or no');
  }
}
iLikeDriving();

function iHaveSibling() {
  //Question 3: Am I an only child?
  let haveSibling = prompt('Am I an only child?').toLowerCase();
  //console.log(haveSibling); //proof that code worked
  if (haveSibling === 'yes' || haveSibling === 'y') {
    //console.log('No, I have a brother');
    alert('No, I have a brother');
  } else if (haveSibling === 'no' || haveSibling === 'n') {
    //console.log('Yes, I do have a sibling');
    points++; //gives 1 point for correct answer
    alert('Correct, I do have a brother');
  } else {
    //console.log('Please answer yes or no');
    alert('Please answer yes or no');
  }
}
iHaveSibling();

//Question 4: Am I a night owl?
let nightOwl = prompt('Am I a night owl?').toLowerCase();
//console.log(nightOwl);  //proof that code worked
if (nightOwl === 'yes' || nightOwl === 'y') {
  //console.log('Yes, I\'m a night owl');
  points++; //gives 1 point for correct answer
  alert('Yes, I\'m a night owl. Hoot, Hoot');
} else if (nightOwl === 'no' || nightOwl === 'n') {
  //console.log('No, I am a night owl');
  alert('No, I like staying up late');
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

//Question 5: Do I like coffee?
let likeCoffee = prompt('Do I like coffee?').toLowerCase();
//console.log(likeCoffee);  //proof that code worked
if (likeCoffee === 'yes' || likeCoffee === 'y') {
  //console.log('Yes, I like coffee');
  points++; //gives 1 point for correct answer
  alert('Yes, I like coffee');
} else if (likeCoffee === 'no' || likeCoffee === 'n') {
  //console.log('No, I do like coffee');
  alert('No, I LOVE coffee');
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

//Question 6: user guesses a number; has 4 attempts to get it correct; prompt to display if guesses are too high or low; displays correct answer if guesses are incorrect; got help from Tyler, TA, on how placement of "--" to decrement numOfAttempts
let numOfAttempts = 4;
while (numOfAttempts > 0) {
  let guess = prompt('How many states have I lived in?');
  guess = parseInt(guess);
  //console.log(numberOfGuess); see user's input
  //console.log(typeof(numberOfGuess)); to check that data type is number

  if (guess === 3) { //correct answer is 3
    console.log('correct', guess); //track user input
    points++; //gives 1 point for answering question correctly
    alert('You\'re right!');
    break; // stops code once correct answer is entered
  } else if (guess > 3) {
    console.log('too high', guess);  // track user input
    numOfAttempts--; //reduces number of guess by 1
    alert(`Too high. You have ${numOfAttempts} attempts left`);
  } else if (guess < 3) {
    console.log('Too low', guess);  // track user input
    numOfAttempts--; //reduces number of guess by 1
    alert(`Too low. You have ${numOfAttempts} attempts left`); //gives correct answer when attempts = 0
  }
} if (!numOfAttempts) {
  alert('Sorry, the correct answer was 3');
}

//Question 7: (got help from Ryan, instructor, on adding conditional expressions to for and while loops)
let booksILike = ['thriller', 'mystery', 'historical fiction', 'crime', 'science fiction'];
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
alert(` I like reading ${booksILike} novels`); //show the user all the possible answers

//personalized parting message
alert(username + ', you got ' + points + ' out of 7 questions correct on the quiz. Thank you for visiting my page. I hope you enjoyed it!');
