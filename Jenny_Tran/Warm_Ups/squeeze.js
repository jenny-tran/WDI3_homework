console.log('squeeze warm up')


  // var unique = _.uniq(wordArray);
  // return unique;


var squeeze = function(word) {
  var wordArray = word.split('')
  for (i=0, i < wordArray.length, i++) {
    if (wordArray[i] === wordArray[i++]) {
      word.slice(i, i++);
    }
  }
}


  // _.reject

  // 


    // var word = '';
  // var i;
  // var wordArray = word.split('');
  // var firstLetter = wordArray.indexOf[i];
  // var proceedingLetter = wordArray.indexOf[i++]
  //   if (firstLetter === proceedingLetter) {
  //   remove(proceedingLetter);
  //   }