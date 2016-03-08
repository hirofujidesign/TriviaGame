window.onload = function(){
	var time = 15;//31 if full page, 15 if section by section keeping at 5 for test
	correct = 0;
	incorrect = 0;
	unanswered = 0;

	//opening game
	$('#startButton').click(function() {
		$(this).hide();
		$("#questionBox1").removeClass("hidden");
		counter=setInterval(inc, 1000);
		return a()
	});
	function inc (){
		time--;
		// $("#timer").text(t);
		// alert("hello");
		console.log(time);
		$("#timer").html(time);
	if (time === 0){
		clearInterval(counter);
		$("timer").html(time);
		b()
	}else {
	}
	}
	//first question
	firstQuestion ={
		question:"Who voices Woody?",
		choice1:"Tom Cruise",
		choice2:"Tom Hardy",
		choice3:"Some other Tom Guy",
		answer:"Tom Hanks",
		image:""
	}
	function a(){
		$("#question1").text(firstQuestion.question)
		$("#firstSelectionOne").text(firstQuestion.answer)
		$("#firstSelectionTwo").text(firstQuestion.choice1)
		$("#firstSelectionThree").text(firstQuestion.choice2)
		$("#firstSelectionFour").text(firstQuestion.choice3)
	};
	function a1(){
		$("#firstAnswer").text(firstQuestion.answer)
		$("#questionBox1").hide();
		$("#firstCorrect").removeClass("hidden");

	}
	$('#firstSubmit').click(function() {
		a1();
		clearInterval(counter);
		//$("#nextButton").attr("id","nextButton2");
		if (document.getElementById("first1").checked){
			correct++;
		}else if (document.getElementById("first2").checked){  
			incorrect++;
		}else if (document.getElementById("first3").checked){
			incorrect++;
		}else if (document.getElementById("first4").checked){
			incorrect++;
		}else {
			unanswered++;
		}
	});
	$("#firstNextButton").click(function(){
			time = 16;
			counter=setInterval(inc,1000);
			$("#timer").html(time);
			$("#questionBox2").show();
			$("#firstCorrect").hide();
			delete firstQuestion;
			b();
	});

	//second question
	secondQuestion ={
		question:"What year did the Titanic Sink?",
		choice1:"1906",
		choice2:"1924",
		choice3:"1937",
		answer:"1912",
	}
	function b(){
			$("#question2").text(secondQuestion.question)
			$("#secondSelectionOne").text(secondQuestion.choice1)
			$("#secondSelectionTwo").text(secondQuestion.answer)
			$("#secondSelectionThree").text(secondQuestion.choice2)
			$("#secondSelectionFour").text(secondQuestion.choice3)

	};
	function b1(){
			$("#secondAnswer").text(secondQuestion.answer)
			$("#questionBox2").hide();
			$("#secondCorrect").removeClass("hidden");
	}
	$('#secondSubmit').click(function() {
		b1();
		clearInterval(counter);
		if (document.getElementById("second2").checked){
			correct++;
		}else if (document.getElementById("second1").checked){  
			incorrect++;
		}else if (document.getElementById("second3").checked){
			incorrect++;
		}else if (document.getElementById("second4").checked){
			incorrect++;
		}else {
			unanswered++;
		}
	});
	$("#secondNextButton").click(function(){
			time = 16;
			counter = setInterval(inc,1000);
			$("#secondCorrect").hide();
			$("#timer").html(time);
			$("#questionBox3").show();
			delete secondQuestion;
			// delete secondQuestion;
			c();
	});

	//third question
	thirdQuestion ={
		question:"What is the diameter of the Earth?",
		choice1:"10,000 miles",
		choice2:"16,000 miles",
		choice3:"26,000 miles",
		answer:"8,000 miles",
	}
	function c(){
			$("#question3").text(thirdQuestion.question)
			$("#thirdSelectionOne").text(thirdQuestion.answer)
			$("#thirdSelectionTwo").text(thirdQuestion.choice1)
			$("#thirdSelectionThree").text(thirdQuestion.choice2)
			$("#thirdSelectionFour").text(thirdQuestion.choice3)
	};
	function c1(){
			$("#thirdAnswer").text(thirdQuestion.answer)
			$("#questionBox3").hide();
			$("#thirdCorrect").removeClass("hidden");
	}
	$('#thirdSubmit').click(function() {
		$("#thirdCorrect").show();
		$("#questionBox3").hide();
		clearInterval(counter);
		c1();
		if (document.getElementById("third1").checked){
			correct++;
		}else if (document.getElementById("third2").checked){  
			incorrect++;
		}else if (document.getElementById("third3").checked){
			incorrect++;
		}else if (document.getElementById("third4").checked){
			incorrect++;
		}else {
			unanswered++;
		}
	});
	$("#thirdNextButton").click(function(){
			// time = 16;
			// counter = setInterval(inc,1000);
			$("#gameOverPage").removeClass("hidden");
			$("#thirdCorrect").hide();
			delete thirdQuestion;
			gameover();
	});




};

//gameover
function gameover(){
	clearInterval(counter);
	$("#correct").text("You got " + correct + " correct!");
	$("#incorrect").text("You got " + incorrect + " incorrect.");
	$("#unanswered").text("You have " + unanswered + " unanswered questions...")
};
$("#tryAgainButton").click(function(){
	location.reload(true);
});
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
	




