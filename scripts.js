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

function calculateBpm() {
	
}

function bpmCounter() {

		var singleClickTime = new Date().getTime();

		clickCounter ++;
		
		var clickId = clickCounter + "_" + singleClickTime;

		clicks.push(clickId);

		document.getElementById('counter').innerHTML = clickCounter;

		console.log("You clicked a button! \nIt has been clicked " + clickCounter + " times.");

	// Run the BPM Calculator
	calculateBpm();
}