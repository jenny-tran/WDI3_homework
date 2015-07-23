

var flipCoin = function() {
  if (Math.random() > 0.5) {
    return 'heads';
  } else {
    return 'tails';
  }
}

var winner = '';
var headsCount = 0;
var tailsCount = 0;

// var resetScore = function() {
//   headsCount = 0;
//   tailsCount = 0;
// }

var playGame = function() {
    var result = flipCoin();
while (headsCount === 5 || tailsCount === 5) {
  if (result === 'heads') {
    headsCount++;
    console.log('The coin landed on heads. Click again!');
  } else if (result === 'tails') {
    tailsCount++;
    console.log('The coin landed on tails. Click again!');
    } 
  }
}

var totalScore = function() {
  if (playGame === 5) {
    console.log('Heads is the winner!');
    resetScore;
  } else if (tailsCount === 5) {
    console.log('Tails is the winner!');
    resetScore;
  }
} 


var eachResult = function() {
headsScoreTally.innerHTML = headsCount;
tailsScoreTally.innerHTML = tailsCount;
}


var coinImage = document.getElementById('coinImage');
  document.write(play);

coinImage.addEventListener('click', playGame);


// update the count, check who's won

// while () {

//   //update counts

//   //check who won
// }

// var flipCoinButton = document.getElementById()



  // while() {
    // return 
   

      //update score

  //check who won


// flipCoinButton.addEventListener('click')