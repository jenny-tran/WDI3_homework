function conversation() {
  var q = question.value;
  if (q === "Happy St Patrick's") {
    answer.innerHTML = 'tildlely de, potatoes';
  } else if (q === "Do you want a pint of Guinness?") {
    answer.innerHTML = 'Just the luck of the Irish.';
  } else if (q === "Paddy, it's your round") {
    answer.innerHTML = 'Look, Leprechaun!';
  } else {
    answer.innerHTML = "I'm sorry, what did you say?";
  }
  question.value = ""; 
};

var question = document.getElementById('question');
var answer = document.getElementById('answer');
var button = document.getElementById('button');
button.addEventListener("click", conversation);


// Happy St Patrick's
// Do you want a pint of Guinness?
// Paddy, it's your round