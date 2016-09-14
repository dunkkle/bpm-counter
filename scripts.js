// BPM Counter

// get button element

// set up time period in which to count clicks
// maybe rolling 5 seconds?

//set up trigger events array? (time)
//
// Maybe get first click, 
// start clock, 
// count touches, 
// get average duration between touches, 
// end period when last duration exceeds previous average by a lot..?

var clickCounter = 0;
var clicks = [];
var clickIntervals = [];
var averageClickInterval = 0;
var bpm = 0;

function calculateBpm() {

	// Iterate through the clicks array, comparing deltas
	// Make sure that the loop is going to end before getting to the last 
	// item in the array.

	for (var i = 0; (i + 1) < (clicks.length -1); i++) {
		olderClick = clicks[i];
		newerClick = clicks[i+1];

		// get the time difference between two clicks
		clickDelta = newerClick - olderClick;

		// add that interval to the clickIntervals array
		clickIntervals.push(clickDelta);
		}

	// find the average interval
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

	var totalClicks = clickIntervals.length;
	var totalClickTime = clickIntervals.reduce(function(a,b) {
		return a + b;
	},0);

	averageClickInterval = totalClickTime/totalClicks;

	console.log(averageClickInterval);
		
	//convert Interval to BPM

	bpm = totalClicks/(averageClickInterval/1000);

	//display bpm
	document.getElementById('bpm').innerHTML = bpm;

}

function bpmCounter() {

		//  Get the time of the click event
		var singleClickTime = new Date().getTime();
		//var clickID = singleClickTime.toString();
		var clickID = singleClickTime;

		// increment the click counter
		clickCounter ++;
		
		// save the click event time and push it into the clicks array
		var clickEvent = clickID;
		clicks.push(clickEvent);

		// increment visible click counter so we know what's going on
		document.getElementById('counter').innerHTML = clickCounter;
		console.log("You clicked a button! \nIt has been clicked " + clickCounter + " times.");
		console.log(clicks);
	// Run the BPM Calculator
	calculateBpm();
}