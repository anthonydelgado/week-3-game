//Variables

	var wordsList = ["kitchen", "bedroom", "livingroom", "bathroom"];
	var remainingGuesses = 14;
	var lettersGuessed;
	var cpWordChoice = wordsList[Math.floor(Math.random() * wordsList.length)];
	var incorrectLetters = [];
	var correctLetters = [];
	var splitWord = cpWordChoice.split("");
	
	console.log(cpWordChoice);


var onkeyup = function(event) {

	var userLetterChoice = String.fromCharCode(event.keyCode).toLowerCase();


	//checks if userLetterChoice matches any letters in cpWordChoice
	var a = splitWord.indexOf(userLetterChoice);
	console.log("Split Word [a]: ", splitWord[a])




	if(typeof splitWord[a] === "undefined"){

		incorrectLetters.push(userLetterChoice); //pushes letter chosen into an array to be displayed
		--remainingGuesses;
		
		//Displays how many chances users has left before user loses game
		var counterHtml = document.getElementById("wordCount");
		counterHtml.innerHTML = "Remaining Guesses: " + remainingGuesses;  

		//Displays the letters user guessed that are incorrect
		var displayedIncorrectLetters = document.getElementById("incorrectLettersGuessed");	
		displayedIncorrectLetters.innerHTML = "Incorrect Letters Guesses: " + incorrectLetters;

		console.log("Letters Guessed: ", incorrectLetters);
		console.log("Remaining Guesses: ",remainingGuesses);
	} else{
		

		correctLetters.push(userLetterChoice);
		console.log("Correct Letters:", correctLetters);
		splitWord.splice(a,1, "_");

		var placeHolders= []
		for(var i=0; i<splitWord.length; i++){

			placeHolders[i] = "_";
			
		}
		// for(var i=0; i<placeHolders.length; i++){
		// 		placeHolders.splice(a,1, "$");
		// 	}


			 console.log("Place Holders: ", placeHolders);
			 console.log("SplitWord: ", splitWord);

		// for(var i=0; i<placeHolders.length; i++){
		//     placeHolders.splice(i, "*");
		//     }

		//placeHolders.splice("-");
		//console.log("Place Holders:" ,placeHolders);

		// var displayedHolders = document.getElementById("correctLettersDisplayed");	
		// displayedHolders.innerHTML = "Your Word: " + placeHolders;
		// console.log("Place Holders: ", placeHolders);


		var displayedCorrectLetters = document.getElementById("correctLettersGuessed");
		displayedCorrectLetters.innerHTML = "Correct Letters Guessed: " +splitWord;

		//displays the correct guesses onto screen
		// function correctGuesses(arr){

		// 	splitWord.splice(a "_");

		
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
//print letters 



}//end function(event)


