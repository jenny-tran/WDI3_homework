//MY CODE
// function totalScores() {
//   var Bob = [3, 2, 6, 11, 9, 2, 6, 9, 10]
//   var totalBob = 0;
//   var Jimbo = [5, 12, 9, 22, 13, 7, 16, 10, 11]
//   var totalJimbo = 0;
//   var Fish = [2, 2, 4, 5, 4, 3, 6, 4, 1]
//   var totalFish = 0;
//   var i;
// for (var i = 0; i< Bob.length; i++)
//   totalBob += Bob[i];
//     console.log('Bob has a total of ' + totalBob)
// for (var i = 0; i< Jimbo.length; i++)
//   totalJimbo += Jimbo[i];
//     console.log('Jimbo has a total of ' + totalJimbo)
// for (var i = 0; i< Fish.length; i++)
//   totalFish += Fish[i];
//     console.log('Fish has a total of ' + totalFish)
// }

// function totalPar() {
//   var holes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   var par = [3, 4, 5, 5, 3, 3, 4, 3, 5]
//   var totalPar = 0;
// for (var i = 0; i< par.length; i++)
//   totalPar += par[i];
// }

// function finalScore() {
//   var parBob = totalBob - totalPar;
//   var parJimbo = totalJimbo - totalPar;
//   var parFish = totalJimbo - totalPar;
//     console.log("Bob's final score is " + parBob);
//     console.log("Jimbo's final score is " + parJimbo);
//     console.log("Fish's final score is " + parFish);
// }

//MATT'S CODE
function totalScores() {
  var players = Object.keys(scores);
  // get each player individually
  for (var p = 0; p < players.length; p++) {
    var person = players[p];
    var total = 0;

    // total each player's score
    for (var i = 0; i < scores[person].length; i++) {
      total += scores[person][i];
    }

    // compare that score against par
    var againstPar;
    if (total > course.coursePar) {
      againstPar = (total - course.coursePar) + " over par.";
    } else if (total < course.coursePar) {
      againstPar = (course.coursePar - total) + " under par.";
    } else {
      againstPar = "Equal to par."
    }
    console.log(person + " scored: " + total + ". " + againstPar);
  }
};

var scores = {
  Bob: [3,2,6,11,9,2,6,9,10],
  Jimbo: [5,12,9,22,13,7,16,10,11],
  Fish: [2,2,4,5,4,3,6,4,1],
};

var course = {
  par: [3,4,5,5,3,3,4,3,5],
  coursePar: 35
};
