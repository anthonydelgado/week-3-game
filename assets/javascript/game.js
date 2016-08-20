//Variables

	var wordsList = ["kitchen", "bedroom", "livingroom", "bathroom"];
	var remainingGuesses = 14;
	var lettersGuessed;
	var cpWordChoice = wordsList[Math.floor(Math.random() * wordsList.length)];
	var incorrectLetters = [];
	var splitWord = cpWordChoice.split("");
	
	console.log(cpWordChoice);


var onkeyup = function(event) {

	var userLetterChoice = String.fromCharCode(event.keyCode).toLowerCase();


	//checks if userLetterChoice matches any letters in cpWordChoice
	var a = splitWord.indexOf(userLetterChoice);

	if(typeof splitWord[a] === "undefined"){

		incorrectLetters.push(userLetterChoice); //pushes letter chosen into an array to be displayed
		--remainingGuesses;
		var counterHtml = document.getElementById("wordCount");
		counterHtml.innerHTML = "Remaining Guesses: " + remainingGuesses;  

		console.log("Remaining Guesses: ",remainingGuesses);
	} else{
		console.log("Letters Found: ", splitWord[a]);
		splitWord.splice(a,1);
	}

	if(remainingGuesses === 0){
		console.log("Game Over");
		return;
	}

	if(splitWord.length === 0){
		console.log("You Won");
		return;
	}

//figure out how to do duplicate letters because I'm using index of
//instead of using indexOf , use a for loop 
//inside of splice do for loop to check if theres duplicate letters and splice that amount
//seperate function that returns to me an array and that array contains the duplicate letters that I have 
//find out how to end game properly 




}//end function(event)


