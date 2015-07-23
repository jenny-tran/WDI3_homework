// // // declared variables
// // var word = {
// //   wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database']
// // }
// // var secretWord = _.sample(word.wordList);
// // var secretWordArray = secretWord.split('');


// // var letterInput = document.getElementById('letterField');
// // var giveUpBtn = document.getElementById('giveUpButton');
// // var resetBtn = document.getElementById('resetButton');

// // // var playGame = function() {
// // //   var wordInput = document.getElementById('wordStringArea');
// // // }


// // var guess = function(letter) {
// //   for (var i=0; i<secretWordArray.length; i++) {
// //     if (letter === secretWordArray[i]) {
// //       // secretWordArray.indexOf(letter)
// //       console.log(letter)
// //     } else {
// //       console.log('_')
// //     }
// //   }
// // }
// // guess('')


// //=====================================================================

// //HARDCODED
// var word = 'chocolate';
// var wordArray = word.split('');
// var guesses = 'abcd';
// var guessesArray = guesses.split('');
// var correctLetters = _.intersection(wordArray, guessesArray);
// var incorrectLetters = _.difference(wordArray, guessesArray);

// var wordArea = document.getElementById('wordString');

// // var checkLetters = function()
// // for (var i=0; i<word.length; i++) {
// //   word.indexOf(correctLetters);
// //     // ---------
// //   word.indexOf(incorrectLetters);
// //     // ---------
// // }



// // var checkLetters = function()
  



// // var guessing = function () {
// //     var word = "TECHNOLOGY"; // what the user must guess
// //     var guessedLetters = "GOTCHA"; // letters guessed
// //     var guessed = guessedLetters.split('');
// //     var mainword = word.replace("_" + guessed + "_");
// //     console.log(mainword);
// // }


     
//   // Takes an array of letters as input and returns an array of two items:
//   // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
//   // 2) An array of all the guessed letters that were not in the secret word
  
// // var checkLetters = function() {
// //   var guessedLetter = document.getElementById('wordString');
// //  } 

// // _.each(secretWordCharacters, function(element, index) {
// //   if (element === guessedLetter) {
// //     console.log('true')
// //   }


// // each and comparing



// // var callback = function(elem) {
// //   var = '_';
// // }

// // var myForEach = function(list, callback) {
// //   for (var i = 0; i < list.length; i++) {
// //   // console.log(list[i]); ///to do
// //     console.log(callback(secretWordCharacters[i]);
// //   }
// // }

//   // if (guessedLetter )
//   // var matchingLetters 

//   // var matchLetters = _.find(secretWordCharacters), function() {
//       // return guessedLetters === ....
//   // }

// //_.intersection
// //_.find

//      // _.partition([secretWordCharacters, guessedLetters])

// // var player = {
// //   var maxGuesses = 8,
// //   var guessedLetters = [],
 
// // //   // Takes a new letter as input and updates the game
// //   var makeGuess = function(letter){

// //   },
 
// // //   // Check if the player has won and end the game if so
// //   checkWin: function(wordString){},
 
// // //   // Check if the player has lost and end the game if so
// //   checkLose: function(wrongLetters){}
// // // };
 
// // var game = {
// //   // Resets the game
// //   resetGame: function(){},
 
// //   // Reveals the answer to the secret word and ends the game
// //   giveUp: function(){},
 
// //   // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
// //   updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){}
// // };
 
// // window.onload = function(){
//   // Start a new game
//   // Add event listener to the letter input field to grab letters that are guessed
//   // Add event listener to the reset button to reset the game when clicked
//   // Add event listener to the give up button to give up when clicked
// // };