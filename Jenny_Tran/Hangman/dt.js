// DT's CODE

var game = {

  guessedLetters: [],
  secret: [],
  puzzle: [],
  MAX_GUESSES: 8,
  wordList: ['pudding', 'cake', 'hotdogs', 'cakepudding'],

  test: function() {
    console.log('testing'); // testing to see if the function works
  },

  setSecret: function() {
    game.secret = _.sample(game.wordList).split(''); //setting up the word and turning it into an array
  },

  setPuzzle: function() {
    game.puzzle = Array(game.secret.length+1).join('_').split(''); //getting up the underscore depending on the secret word
  },

  guessesLeft: function() {
    return game.MAX_GUESSES - game.guessedLetters.length; //each time a guess is made, value of guessedLetters array
  },

  guess: function(letter) {
    game.guessedLetters.push(letter); 

    // work out the puzzle display
    // secret = ['c', 'a', 'k', 'e']
    // puzzle = ['_', '_', '_', '_'] => ['_', '_', 'k', '_']
    _.each(game.secret, function(secretLetter, index) {
    // check if element is equal to letter
    if (secretLetter === letter) {
      game.puzzle[index] = letter;
      }

    });
  },

  init: function() {
    game.setSecret();
    game.setPuzzle();
    
  }

};




window.onload = function() {

  var ENTER_KEY = 13;

  game.init();

  var wordString = document.getElementById('wordString');
  wordString.innerHTML = game.puzzle;

  var guessesLeft = document.getElementById('guessesLeft');
  guessesLeft.innerHTML = game.guessesLeft();

  var letterField = document.getElementById('letterField');
  letterField.addEventListener('keyup', function(event) {
    // console.log(event.keyCode) - find the correct key being pressed
    if (event.keyCode === ENTER_KEY) {
      // this keyword - 'this' is referring to the input box in this instance
      // 'this' similar to 'event.target'
      var inputValue = this.value;
      //user making guess
      game.guess(inputValue);
      this.value = ''; //resetting input box

      //update game displays
      wordString.innerHTML = game.puzzle;
      guessesLeft.innerHTML = game.guessesLeft();

    }

  });

}