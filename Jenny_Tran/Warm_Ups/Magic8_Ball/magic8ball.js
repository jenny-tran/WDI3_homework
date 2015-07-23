var answer = [ "No",
                "Not today",
                "It is decidedly so",
                "Without a doubt",
                "Yes definitely",
                "You may rely on it",
                "As I see it yes",
                "Most likely",
                "Outlook good",
                "Signs point to yes",
                "Reply hazy try again",
                "Ask again later",
                "Better not tell you now",
                "Cannot predict now",
                "Concentrate and ask again",
                "Don't count on it",
                "My reply is no",
                "My sources say no",
                "Outlook not so good",
                "Very doubtful"]

var getAnswer = function () {
  var random = answer[Math.floor(Math.random() * answer.length)];
  var fortune = document.getElementById('answer');
  fortune.innerHTML = random;
};

var submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', getAnswer);