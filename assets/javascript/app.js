window.onload = function(){
	var time = 15;//31 if full page, 15 if section by section keeping at 5 for test
	correct = 0;
	incorrect = 0;
	unanswered = 0;

	//opening game
	$('#startButton').click(function() {
		$(this).hide();
		$("div#game").removeClass("hidden");
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
		return a()
		return b()
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
		$("#question").text(firstQuestion.question)
		$("#selectionOne").text(firstQuestion.answer)
		$("#selectionTwo").text(firstQuestion.choice1)
		$("#selectionThree").text(firstQuestion.choice2)
		$("#selectionFour").text(firstQuestion.choice3)
	};
	function a1(){
		$("#answer").text(firstQuestion.answer)
		$("#game").hide();
		$("#correct").removeClass("hidden");

	}
	$('#submit').click(function() {
		return b()
		clearInterval(counter);
		$("#submit").attr("id","submit2");
		time = 16;
		counter=setInterval(inc,1000);
		//$("#nextButton").attr("id","nextButton2");
		if (document.getElementById("1").checked){
			correct++;
			$("#message").text("That's right!");
		}else if (document.getElementById("2").checked){  
			incorrect++;
		}else if (document.getElementById("3").checked){
			incorrect++;
		}else if (document.getElementById("4").checked){
			incorrect++;
		}else {
			unanswered++;
		}
	});
	// $("#nextButton").click(function(){
	// 		time = 16;
	// 		counter=setInterval(inc,1000);
	// 		$("#game").show();
	// 		$("#correct").hide();
	// 		$("#submit").attr("id","submit2");
			//$("#nextButton").attr("id","nextButton2");
			// delete firstQuestion;
			// return b();
	// });
};


//second question
secondQuestion ={
	question:"What year did the Titanic Sink?",
	choice1:"1906",
	choice2:"1924",
	choice3:"1937",
	answer:"1912",
}
function b(){
		$("#question").text(secondQuestion.question)
		$("#selectionOne").text(secondQuestion.choice1)
		$("#selectionTwo").text(secondQuestion.answer)
		$("#selectionThree").text(secondQuestion.choice2)
		$("#selectionFour").text(secondQuestion.choice3)
};
// function b1(){
// 	$("#answer").text(secondQuestion.answer)

// }
$('#submit2').click(function() {
	return c();
	clearInterval(counter);
	time = 16;
	counter = setInterval(inc,1000);
	$("#submit2").attr("id","submit3");
	$("#nextButton2").attr("id","nextButton3");
	if (document.getElementById("2").checked){
		correct++;
	}else if (document.getElementById("1").checked){  
		incorrect++;
	}else if (document.getElementById("3").checked){
		incorrect++;
	}else if (document.getElementById("4").checked){
		incorrect++;
	}else {
		unanswered++;
	}
});
// $("#nextButton2").click(function(){
// 		time = 16;
// 		counter = setInterval(inc,1000);
// 		$("#game").show();
// 		$("#correct").hide();
// 		$("#submit2").attr("id","submit3");
// 		$("#nextButton2").attr("id","nextButton3");
// 		// delete secondQuestion;
// 		return c();
// });

//third question
thirdQuestion ={
	question:"What is the diameter of the Earth?",
	choice1:"10,000 miles",
	choice2:"16,000 miles",
	choice3:"26,000 miles",
	answer:"8,000 miles",
}
function c(){
		$("#question").text(thirdQuestion.question)
		$("#selectionOne").text(thirdQuestion.answer)
		$("#selectionTwo").text(thirdQuestion.choice1)
		$("#selectionThree").text(thirdQuestion.choice2)
		$("#selectionFour").text(thirdQuestion.choice3)
};
// function b1(){
// 	$("#answer").text(secondQuestion.answer)

// }
$('#submit3').click(function() {
	$("#correct").show();
	$("#game").hide();
	clearInterval(counter);
	return d();
	if (document.getElementById("1").checked){
		correct++;
	}else if (document.getElementById("2").checked){  
		incorrect++;
	}else if (document.getElementById("3").checked){
		incorrect++;
	}else if (document.getElementById("4").checked){
		incorrect++;
	}else {
		unanswered++;
	}
});
$("#nextButton3").click(function(){
		time = 16;
		counter = setInterval(inc,1000);
		$("#game").show();
		$("#correct").hide();
		// delete secondQuestion;
		return d();
});
//gameover
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
	




