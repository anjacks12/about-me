'use strict';

//console.log('hello'); //This was my 'proof of life' code to check


//Asking user for name and giving a personalized greeting
let username = prompt('What is your name?');
//console.log(username);  //proof that code worked
alert('Hello ' + username + '! Welcome to my page. Here are five questions to get to know me better.');


//Question 1: Do I like reading? Assigning lowerLikeReading as variable to change likeReading input to lower case by using .toLowerCase()
let likeReading = prompt('Do I like reading? Yes or No');
let lowerLikeReading = likeReading.toLowerCase();
//console.log(likeReading); //proof that code initially worked
if (lowerLikeReading === 'yes' || lowerLikeReading === 'y'){
  //console.log('Yes, I like reading');
  alert('Yes, I like reading');
} else if (lowerLikeReading === 'no' || lowerLikeReading === 'n'){
  //console.log('No, I do like reading');
  alert('No, I do like reading');
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}


//Question 2: Is Korean my favorite food? Added .toLowerCase() after prompt to make code cleaner (via example given in class)
let likeKoreanFood = prompt('Do I like Korean food? Yes or No').toLowerCase();
//console.log(likeKoreanFood); //proof that code worked
if (likeKoreanFood === 'yes' || likeKoreanFood === 'y'){
  //console.log('Yes, I like Korean food');
  alert('Yes, I like Korean food');
} else if (likeKoreanFood === 'no' || likeKoreanFood === 'n'){
  //console.log('No, I do like Korean food');
  alert('No, I do like Korean food');
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}

//Question 3: Do I have siblings?
let haveSibling = prompt('Do I have a sibling?').toLowerCase();
//console.log(haveSibling); //proof that code worked
if (haveSibling === 'yes' || haveSibling === 'y'){
  //console.log('Yes, I have a brother');
  alert('Yes, I have a brother');
} else if (haveSibling === 'no' || haveSibling === 'n'){
  //console.log('No, I do have a sibling');
  alert('No, I do have a sibling');
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}


//Question 4: Am I a night owl?
let nightOwl = prompt('Am I a night owl?').toLowerCase();
//console.log(nightOwl);  //proof that code worked
if (nightOwl === 'yes' || nightOwl === 'y'){
  //console.log('Yes, I\'m a night owl');
  alert('Yes, I\'m a night owl');
} else if (nightOwl === 'no' || nightOwl === 'n'){
  //console.log('No, I am a night owl');
  alert('No, I am a night owl');
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}


//Question 5: Do I like coffee?
let likeCoffee = prompt('Do I like coffee?').toLowerCase();
//console.log(likeCoffee);  //proof that code worked
if (likeCoffee === 'yes' || likeCoffee === 'y'){
  //console.log('Yes, I like coffee');
  alert('Yes, I like coffee');
} else if (likeCoffee === 'no' || likeCoffee === 'n'){
  //console.log('No, I do like coffee');
  alert('No, I do like coffee');
} else {
  //console.log('Please answer yes or no');
  alert('Please answer yes or no');
}


//personalized parting message
alert('Thanks again ' + username + ' for visiting my page. Please feel free to come back and check on any updates. Have a great day!');
