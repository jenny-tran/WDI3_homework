
// var middleIndex = input.length / 2;
// var firstHalf = input.substr(0, middleIndex);
// var secondHalf = input.substr(middleIndex, input.length);


// // var palindrome = function() {


// //   var firstHalf = 

// //   var secondhalf 
// // }


//AIDEN'S CODE



function palindrome(input) {
  var spaceLess = input.replace(/\s/g, '');
  var output = spaceLess.toLowerCase().split('').reverse().join(''); 
  if (output === input.toLowerCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
}


//gsuub