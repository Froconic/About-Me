'use strict';

// console.log('Its working');

// gamestart();
//
// function gamestart() {
//initialize global variables
var correct = 0;
var username = prompt('What is your name?');
console.log(username + 'is current user');
//Game rules intro
alert('Hello ' + username + '! You are going to play a little game to get to know me My name is Akira I am a freelancer. I have skills in graphic design, web design and development. You are going to be asked a series of yes or no questions. After you answer my information will popup on the screen so you can get some insight into who I am.');

//start of the loop that contains game
for (var i = 0; i < 8; i++) {

  //Sott Pilgrim Question
  if (i === 0) {
    var response = prompt('Have you heard of Scott Pilgrim?');
    response = response.toLowerCase();
    console.log(response + ' is user response');
    if (response === 'yes') {
      alert('That\'s awesome  ' + username + '! I hope you enjoyed it! It\'s my absolute favorite series');
      correct++;
    } else {
      alert('You should check it out! It\'s my absolute favorite series');
    }
  }

  //Travel Question
  if (i === 1) {
    response = prompt('Have you ever been overseas?');
    response = response.toLowerCase();
    console.log(response + ' is user response');
    if (response === 'yes') {
      alert('Me too ' + username + ', I\'ve been to a lot of places in France. Like Liile, Paris of course, Le Quesnoy, that was a castle town, Valencienne, Oisy. Other parts of Europe like Amsterdam, Bruge, London, Brussels.');
      correct++;
    } else {
      alert('I highly suggest taking a trip ' + username + '!  I\'ve been to a lot of places in France. Like Liile, Paris of course, Le Quesnoy, that was a castle town, Valencienne, Oisy. Other parts of Europe like Amsterdam, Bruge, London, Brussels. ');
    }
  }

  //Renaissance title question
  if (i === 2) {
    response = prompt('Do you know what makes someone a renaissance (wo)man?');
    response = response.toLowerCase();
    console.log(response + ' is user response');
    if (response === 'yes') {
      alert('I like to call myself a budding renaissance man. The 3 areas I am pursuing as my main focus are art, storytelling and philosophy.');
      correct++;
    } else {
      alert('Well the definition I go by is someone who is a master in at least 3 seperate fields but often more. I like to call myself a budding renaissance man. The 3 areas I am pursuing as my main focus are art, storytelling and philosophy.');
    }
  }

  //Diet Question
  if (i === 3) {
    response = prompt('Are you on any special diet?');
    response = response.toLowerCase();
    console.log(response + ' is user response');
    if (response === 'yes') {
      var diet = prompt('What kind?');
      if (diet.toLowerCase() === 'vegan') {
        alert('Me too, or rather vegan inclined I should say. I don\'t eat anything with a face.');
        correct++;
      } else {
        alert('Interesting ' + diet + 'that\'s cool I like to say I am vegan inclined I don\'t eat anything with a face.');
      }
    } else {
      alert('That\'s cool I like to say I am vegan inclined I don\'t eat anything with a face.');
    }
  }

  //Sibling Question
  if (i === 4) {
    response = prompt('Do you have any siblings?');
    response = response.toLowerCase();
    console.log(response + ' is user response');
    if (response === 'yes') {
      var siblings = prompt('How many?');
      correct++;
      alert(siblings.toString() + ' cool. I have 5 siblings. 3 brothers and 2 sisters. I\'m the youngest');
    } else {
      alert('An only child, cool. I have 5 siblings. 3 brothers and 2 sisters. I\'m the youngest');
    }
  }

  //Years in town Question
  if (i === 5) {
    var answer = 7;
    var tries = 4;
    response = prompt('How long do you think I have been in Cedar Rapids. You only get 4 guesses! Hint: I\'m 25 and came here to attend college');
    console.log(response);
    console.log(tries + ' tries');
    tries--;
    console.log(tries + ' tries');
    while (tries > 0) {
      if (response.toLowerCase() === 'quit') {
        break;
      }

      response = Number(response);
      console.log(response + ' is user response');
      console.log(answer + ' is answer');

      if (response === answer) {
        tries = 0;
        alert('Ding Ding Ding you got it right!');
        console.log(tries + ' tries');
        correct++;
        break;
      } else if (tries === 1) {
        alert('Last try!');
        response = prompt('Guess again');
        console.log(response + ' is user response');
      } else {
        alert('Err wrong');
        response = prompt('Guess again');
        console.log(response + ' is user response');
        tries--;
        console.log(tries + ' tries');
      }
    }
  }

  //Programming languages Question
  if (i === 6) {
    response = prompt('Guess which of the following languages I know! if you get 1 right I\'ll tell you them all! Your choices are HTML, CSS, Python, Javascript, Ruby, Perl, Go.');
    console.log(response + ' is user response');
    tries = 0;
    console.log(tries + ' tries');
  }

  while (tries < 6) {
    if (response === 'HTML' || response === 'CSS' || response === 'Python' || response === 'Javascript') {
      alert(response + ' is correct! All the languages I know are HTML, CSS, Javascript, Python');
      correct++;
      break;
    }

    if (response !== 'HTML' || response !== 'CSS' || response !== 'Python' || response !== 'Javascript') {
      alert('Err Wrong!');
      tries++;
      console.log(tries + ' tries');
      response = prompt('Guess again');
      console.log(response + ' is user response');
    }

    //Tally of cool points
    if (i === 7) {
      alert('You are have reached the end of the game! Your answers gave you a cool rating of: ' + correct);
      alert('Explore the rest of the page to check out more about me that wasn\'t included in the game!');
    }
  }
}


// }

// for (var guesses = 0; guesses < 5; guesses++) {
//   var response = prompt('How long do you think I have been in Cedar Rapids. You only get 4 guesses! Hint: I\'m 25 and came here to attend college');
//   console.log(response);
//   // var answer = parseInt(response);
//   if (response !== '7') {
//     alert('Errrt Wrong!');
//     response = prompt(' Guess again!');
//     console.log(response);
//   } else if (response === '7') {
//     alert('Ding Ding Ding You are correct. I have lived in Cedar Rapids for 7 years');
//     break;
//   } else if (guesses === '4') {
//     alert('You ran out of tries! Here is the answer anywho. I have lived in Cedar Rapids for 7 years');
//   }
// }




// var user;
// user = prompt('What is your name');
// gameStart();
//
// function gameStart() {
//   for (var i = 0; i < 6; i++)
//     if (i === 0) {
//       var response = prompt('Did you go to college? Yes or no?');
//       if (response.toLowerCase(response) === "yes") {
//         alert('That is awesome ' + user + 'I did as well, although I dropped out in my third year :D');
//       } else {
//         alert('It\'s definitly not for everyone! I dropped out so don\'t feel too bad')
//       }
//
//
//     }
// }

// var homeTown, userName, siblings, brokenBones, renaissanceMan, diet, education, travel, questions, game;

// homeTown, siblings, brokenBones, renaissanceMan, diet, education, travel = false;

// document.getElementById('startButton').onclick = function gameStart() {
// userName = prompt('What is your name?');
// console.log('User name: ' + userName);

// questions = prompt("")
// };
