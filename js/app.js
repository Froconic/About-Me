'use strict';

// console.log('Its working');

//
function gamestart() {
  //initialize global variables
  var response;
  var correct = 0;
  var username = prompt('What is your name?');
  var message = `Hello ${username}! You are going to play a little game to get to know me My name is Akira I am a freelancer. I have skills in graphic design, web design and development. You are going to be asked a series of yes or no questions. After you answer my information will popup on the screen so you can get some insight into who I am.`;
  console.log(username + 'is current user');
  //Game rules intro
  alert(message);

  // var greeting = document.getElementById('greeting');

  // var greetingEl =  document.createElement('p');

  // greetingEl.textContent = message;

  // greeting.appendChild(greetingEl);

  //   // Scott Pilgrim Question
  function question1() {
    response = prompt('Have you heard of Scott Pilgrim?');
    response = response.toLowerCase();
    console.log(response + ' is user response');
    if (response === 'yes') {
      alert('That\'s awesome  ' + username + '! I hope you enjoyed it! It\'s my absolute favorite series');
      correct++;
    } else {
      alert('You should check it out! It\'s my absolute favorite series');
    }
  }


  //   //Travel Question
  function question2() {
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

  //   //Renaissance title question
  function question3() {
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


  //   //Diet Question
  function question4() {
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



  //   //Sibling Question
  function question5() {
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


  //   // Years in town Question
  function question6() {
    response = '';
    var answer = 7;
    var tries = 0;
    response = prompt('How long do you think I have been in Cedar Rapids. You only get 4 guesses! Hint: I\'m 25 and came here to attend college');
    console.log(response);
    console.log(tries + ' tries');
    tries++;
    console.log(tries + ' tries');
    while (tries < 4) {
      if (response.toLowerCase() === 'quit') {
        break;
      }

      response = Number(response);
      console.log(response + ' is user response');
      console.log(answer + ' is answer');

      if (response === answer) {
        alert('Ding Ding Ding you got it right!');
        console.log(tries + ' tries');
        correct++;
        break;

      } else {
        alert('Err wrong');
        response = prompt('Guess again');
        console.log(response + ' is user response');
        tries++;
        console.log(tries + ' tries');
      }
    }
  }

  //   // Programming languages Question
  function question7() {
    response = prompt('Guess which of the following languages I know! if you get 1 right I\'ll tell you them all! Your choices are HTML, CSS, Python, Javascript, Ruby, Perl, Go.');
    console.log(response + ' is user response');
    var tries = 0;
    console.log(tries + ' tries');
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
    }
  }



  //     // Tally of cool points
  function tally() {
    alert('You are have reached the end of the game! Your answers gave you a cool rating of: ' + correct);
    alert('Explore the rest of the page to check out more about me that wasn\'t included in the game!');

  }

  // function render() {
  //   var insightRender = getElementById(`insight`);
  // }
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();
  tally();
  // render();
}

gamestart();
