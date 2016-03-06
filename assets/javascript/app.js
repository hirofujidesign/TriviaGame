window.onload = function(){
	var time = 31;
		var firstQuestion ={
		question:"Who voices Woody?",
		choices:'"tom cruise", "tom hardy","some other guy"',
		answer:"tom hanks",
	}


	function inc (){
		time--;
		// $("#timer").text(t);
		// alert("hello");
		console.log(time);
		$("#timer").html(time);
	}

	$('#startButton').click(function() {
		$(this).hide();
		$("div#game").removeClass("hidden");
		counter=setInterval(inc, 1000);
	});
		$("#question").text(firstQuestion.question)
		$("#selectionOne").text(firstQuestion.answer)



	// function q (question, choice1, choice2, choice3, answer){
	// 	this.question = question;
	// 	this.choice1 = choice1;
	// 	this.choice2 = choice2;
	// 	this.choice3 = choice3;
	// 	this.answer = answer;
	// }

	// var firstQuestion = new q("Who was the leading actor of Forest Gump?", "Tom Cruise","Tom Hardy","Tom Something", "Tom Hanks");



	// var question1={
	// 	question: "Who was the leading actor of Forest Gump?",
	// 	choices:"Tom Cruise", "Tom Hanks",
	// 	image: "assets/mages/tomhanks",
	// }
	// function(q1){
	// 	$("#question").html(question1.question);
	// }
	
};




