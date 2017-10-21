var runQuestion = function(){
	$("#questionStart").html("Question 1!")
};

window.onkeyup = function(e){
	if(e.keyCode == 32){
       // user has pressed space
    runQuestion();
   }
	
};

//I need a function to auto generate content
// on my page when a button is clicked.

//I need an object to put in my questions
// and answer choices. And a math function to
//randomize their order.
var game = {
	question1: {
		question: "What element in Javascript uses square brackets?",
		answers: ["String", "Boolean", "Array", "Object"]
	},
	question2: {
		question: "How do you call a function in Javascript?",
		answers: ["run.function", "function{}", "function()", "<funtion>"]
	},
	question3: {
		question: "What is the main object used in Jquery?",
		answers: ["Window", "document", "$", "&"]
	},
	question4: {
		question: "What is the function used to grab the value of an element?",
		answers: [".value()", ".setValue = ", ".val()", "getElementValue"]
	},
}
//I need a setInterval to put my question page
//in so that it's on an adequate timer.
//this timer will need to be displayed on the
//page as well.

//I need an array that I can push questions
//in to and remove them as the game progresses.

//I need an if statement controlling when the
//end text runs as the Array.length = 0;

//