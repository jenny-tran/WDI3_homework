

// PT PLANNER

// Melbourne Public Transport Journey Planner

// There are 3 train lines:
// The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.
// The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.
// The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.
// All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.
// Write a JS program that takes the line + stop that a user is getting on at and the line + stop that user is getting off at and prints the total number of stops for the trip.

// Hints:
// Get your JS program to work for a single line before trying to tackle multiple lines. Consider diagramming the lines by sketching out the train lines and their stops and intersection. Make train lines keys in a hash, while the values are an array of all the stops on each line.
// The key to the lab is the intersection of the lines at Richmond.

// Non-Required Bonus:
// List the stations on the journey in order of travel
// Use input validation
// User must enter a line and station in the subway network
// If the user enters something else, your program should handle it
// Add an additional lines
// Allow trains to have multiple intersection points


var metro = { 
    alamein:['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn','Glenferrie'],
    glenWaverly:['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'],
    sandringham:['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
  };


// VARIABLES FLAWED
var trainLines = Object.keys(metro);
var startLine = tranlines.indexOf(startStation);
var destinationLine = tranlines.indexOf(destinationStation);
var interchange = 'Richmond';

//HARDCODE
var startStation = ''
var startLine = metro.alamein;
var destinationStation = '';
var destinationLine = metro.alamein;
var interchange = 'Richmond';

// var trainLines = Object.keys(metro)
// var startLine = trainLines.indexOf(startStation);
// var startStation = 'Glenferrie'
// var destinationLine = trainLines.indexOf(destinationStation);
// var destinationStation = 'East Richmond'
// var interchange = 'Richmond';
 
// var trainLines = Object.key(metro)
// var startLine = metro.alamein || metro.glenWaverly || metro.sandringham;
// var startStation = 'Flinders Street';
// console.log(startLine);
// var destinationLine = metro.alamein || metro.glenWaverly || metro.sandringham;
// var destinationStation = 'Melbourne Central';
// var interchange = 'Richmond';


//NUMBER OF STOPS
var journey1 = startLine.indexOf(startStation) - startLine.indexOf(interchange);
var journey2 = destinationLine.indexOf(interchange) - destinationLine.indexOf(destinationStation);
var journeyTotal = Math.abs(journey1) + Math.abs(journey2);
  console.log('Number of stops: ' + journeyTotal);

// var arrayJourney1 = allLines.slice(startLine.indexOf(startStation), startLine.indexOf(interchange));
// var arrayJourney2 = allLines.slice(destinationLine.indexOf(interchange), destinationLine.indexOf(destinationStation));
// console.log(arrayJourney1 + arrayJourney2);

// var arrayJourney1 = startLine.slice(startLine.indexOf(startStation), startLine.indexOf(interchange));
// var arrayJourney2 = destinationLine.slice(destinationStation.indexOf(interchange), destinationLine.indexOf(destinationStation));
// var allStops = join(arrayJourney1, arrayJourney2)
//   console.log('Stops: ' + allStops);

// slice


// concat


var startingPoint = startLine.indexOf(startStation);
var endPoint = destinationLine.indexOf(destinationStation);
var changeover = startLine.indexOf(interchange);
var arrayJourney1 = startLine.slice(startingPoint, changeover);
var arrayJourney2 = destinationLine.slice(changeover, endPoint);
  console.log('Stops: ' + startLine.slice(startingPoint, changeover) + ', ' + destinationLine.slice(changeover, endPoint));



// var alameinStops = alamein.slice(startingPoint, alamein[1]);
// var alameinStopsReverse = alameinStops.slice(alamein[1], startingPoint);
// var alameinStops = alamein.slice(startingPoint, alamein[1]);
// var alameinStopsReverse = alameinStops.slice(alamein[1], startingPoint);


//REVERSE FUNCTION - NOT WORKING
if (journey1 < 0 || journey2 < 0) {
  stopsInJourney.reverse(stopsInJourney);

} else {

// }

//Are the stations on the same line or not?
function startLine () {
  if (startLine === 'alamein') {
      startLine = metro.alamein;
  } else if (startLine === 'glen waverly') {
      startLine = metro.glenWaverly;
    } else if (startLine === 'sandringham') {
      startLine = metro.sandringham; 
    }
  };
  
function destinationLine () {
  if (destinationLine === 'alamein') {
      destinationLine = metro.alamein;
  } else if (startLine === 'glen waverly') {
      destinationLine = metro.glenWaverly;
  } else if (startLine === 'sandringham') {
      destinationLine = metro.sandringham; 
  }
}
  


// //INPUT
var startStationInput = document.getElementById(startStationInput);
  startStationInput.innerHTML = startStation;

var destinationStationInput = document.getElementById(destinationStationInput);
  destinationStatinInput.innerHTML = destinationStation;

var submit = document.getElementsByTagName('button')[0];
var journeyPlanner = function() {
  console.log('Number of stops: ' + journeyTotal);
  console.log('Stations: ' + startLine.slice(startingPoint, changeover) + ', ' + destinationLine.slice(changeover, endPoint))
}

submitButton.addEventListener('click', journeyPlanner);

// var startLine = ''
// var startPoint = ''
// var endLine = ''
// var endPoint = ''
// var interchange = 'Richmond';
// var journey1 = startLine.indexOf(startPoint) - startLine.indexOf(interchange);
// var journey2 = endLine.indexOf(interchange) - endLine.indexOf(endPoint);
// var tripLength = Math.abs(journey1);
// var tripTotal = Math.abs(journey1) + Math.abs(journey2);


// if (journey1 < 0 || journey2 < 0) {
//   console.log(startLine.slice(startingPoint, changeover) + ', ' + destinationLine.slice(changeover, endPoint) + ',' + destinationStation);
// } else {
//   console.log(destinationLine.slice(endPoint, changeover) + ', ' + startLine.slice(changeover, startingPoint) + ',' + startStation);
// }



// if (journey1 < 0 || journey2 < 0); {
//   startLine.reverse(startLine.slice(startingPoint, changeover));
//   console.log(stopsInJourney);
//   } 
//reverse
//use if statement




//MY CODE
//    alamein.indexOf(departingFrom);
//       var destination = alamein.indexOf(arrivingAt);
//       var differenceBetweenStops = origin - destination;
//       var oneStopAfter = origin + [1]
//       var amountOfStops = Math.abs(differenceBetweenStops);
//       var listOfStops = alamein.slice(oneStopAfter, destination);
//         console.log();
// }

// }





