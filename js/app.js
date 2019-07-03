'use strict';

console.log('Its working');


gamestart();

function gamestart() {
  var username = prompt('What is your name?');
  console.log(username);
  alert('You are going to play a little game to get to know me My name is Akira I am a freelancer. I have skills in graphic design, web design and development. You are going to be asked to pick some topics and then I will ask a series of yes or no questions based on what you picked. After you answer my information will popup on the screen so you can get some insight into who I am.')
  for (var i = 0; i < 5; i++) {
    if (i === 0) {
      var response = prompt('Have you heard of Scott Pilgrim?')
      var answer = response.toLowerCase();
      if (answer === 'yes') {
        alert('That\'s awesome  ' + username + '! I hope you enjoyed it! It\'s my absolute favorite series');
      } else {
        alert('You should check it out! It\'s my absolute favorite series');
      }
    }
    if (i === 1) {
      var response = prompt('Have you ever been overseas?');
      answer = response.toLowerCase();
      if (answer === 'yes') {
        alert('Me too ' + username + ' I\'ve been to a lot of places in France. Like Liile, Paris of course, Le Quesnoy, that was a castle town, Valencienne, Oisy. Other parts of Europe like Amsterdam, Bruge, London, Brussels.');
      } else {
        alert('I highly suggest taking a trip' + username + ' I\'ve been to a lot of places in France. Like Liile, Paris of course, Le Quesnoy, that was a castle town, Valencienne, Oisy. Other parts of Europe like Amsterdam, Bruge, London, Brussels.! ');
      }
    }
    if (i === 2) {
      var response = prompt('Do you know what makes someone a renaissance (wo)man?');
      answer = response.toLowerCase();
      if (answer === 'yes') {
        alert('I like to call myself a budding renaissance man. The 3 areas I am pursuing as my main focus are art, storytelling and philosophy.');
      } else {
        alert('Well the definition I go by is someone who is a mmaster in at least 3 seperate fields but often more. I like to call myself a budding renaissance man. The 3 areas I am pursuing as my main focus are art, storytelling and philosophy.');
      }
    }
    if (i === 3) {
      var response = prompt('Are you on any special diet?');
      answer = response.toLowerCase();
      if (answer === 'yes') {
        var diet = prompt('What kind?');
        if (diet.toLowerCase() === 'vegan') {
          alert('Me too, or rather vegan inclined I should say. I don\'t eat anything with a face.');
        } else {
          alert('Interesting ' + diet + 'that\'s cool I like to say I am vegan inclined I don\'t eat anything with a face.');
        }
      } else {
        alert('That\'s cool I like to say I am vegan inclined I don\'t eat anything with a face.');
      }
    }
  }
  if (i === 4) {
    var response = prompt('Do you have any siblings?')
    answer = response.toLowerCase();
    if (answer === "yes") {
      var siblings = prompt('How many?');
      if (Number(siblings) < 0) {
        alert(siblings.toString() + 'cool. I have 5 siblings. 3 brothers and 2 sisters. I\'m the youngest');
      }
    } else {
      alert('An only child, cool. I have 5 siblings. 3 brothers and 2 sisters. I\'m the youngest');
    }
  }

}
// else {
//     break;
// }
// }
// }
// }
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
