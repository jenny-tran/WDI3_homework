var submitButton = document.getElementById('submit');

submitButton.onclick = function() {
  event.preventDefault();

  var setTemp = document.getElementById('desiredTemp');
  var currentTemp = document.getElementById('currentTemp');
  var result = document.getElementById('result')
  var coolMessage = ('Setting: A/C COOLING');
  var heatMessage = ('Setting: A/C HEATING');
  var currentMessage = ('Currently set to room temperature.')


  var setTempInput = parseInt(setTemp.value, 10);
  var currentTempInput = parseInt(currentTemp.innerHTML, 10);

  console.log(currentTempInput);
  if (setTempInput < currentTempInput) {
    result.innerHTML = coolMessage
  } else if (setTempInput > currentTempInput) {
    result.innerHTML = heatMessage
  } else if (setTempInput === currentTempInput) {
    result.innerHTML = currentMessage
  }
}