//Variables

	var wordsList = ["kitchen", "bedroom", "livingroom", "bathroom"];
	var remainingGuesses = 14;
	var lettersGuessed;
	var incorrectLetters = [];


	var cpWordChoice = wordsList[Math.floor(Math.random() * wordsList.length)];
	var chosenWord = cpWordChoice.split("");

	var placeHolders= [];
	var correctLetters = [];

	console.log(cpWordChoice);


var onkeyup = function(event) {

	var userLetterChoice = String.fromCharCode(event.keyCode).toLowerCase();


	//checks if userLetterChoice matches any letters in cpWordChoice
	var a = chosenWord.indexOf(userLetterChoice);
	console.log("Chosen Word [a]: ", chosenWord[a])




	if(typeof chosenWord[a] === "undefined"){

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
		

		// correctLetters.push(userLetterChoice);
		// console.log("Correct Letters:", correctLetters);
		//chosenWord.splice(a,1, "_");



		for(var i=0; i<chosenWord.length; i++){
			placeHolders[i] = "_";

				if((userLetterChoice) === (chosenWord[a])){
					//placeHolders[i] = chosenWord[a];
					
				}	
		}	

			


		



			// correctLetters.push(userLetterChoice);
			// console.log("Correct Letters:", correctLetters);




			 console.log("Place Holders: ", placeHolders);
			 // console.log("chosenWord: ", chosenWord);
			 console.log("-------");


		// var displayedHolders = document.getElementById("correctLettersDisplayed");	
		// displayedHolders.innerHTML = "Your Word: " + placeHolders;
		// console.log("Place Holders: ", placeHolders);


		// var displayedCorrectLetters = document.getElementById("correctLettersGuessed");
		// displayedCorrectLetters.innerHTML = "Correct Letters Guessed: " +chosenWord;

		//displays the correct guesses onto screen
		// function correctGuesses(arr){

		
	}

	if(remainingGuesses === 0){
		console.log("Game Over");
		return;
	}

	if(chosenWord.length === 0){
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


