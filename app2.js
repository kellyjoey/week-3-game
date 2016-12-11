var wordLists = ["PROUST", "JOYCE", "CERVANTES", "MELVILLE", "SHAKESPEARE"];

var wordToGuess = {
	initialize: function(listOfWords){
		this.listOfWords = (listOfWords);
		this.generateKey(this.selectWord());
		this.generateRevealedLetters();
	},

	selectWord: function(){
		return this.listOfWords[Math.floor(Math.random() * this.listOfWords.length)];
	},

	setCustomWord: function(customWord){
		this.generateKey(customWord);
		this.generateRevealedLetters();
	},

	generateKey: function(word){
		this.key = word.split("");
	},

	generateRevealedLetters: function(){
		this.revealedLetters = [];
		for (var i = this.key.length; i > 0; i--){
			this.revealedLetters.push("");
		}
	},

	hasGuessedLetter: function(guessedLetter){
		return this.key.some(function(unguessedLetter){
			return unguessedLetter === guessedLetter;
		});
	},

	revealLetters: function(guessedLetter){
		var key = this.key;
		this.revealedLetters = this.revealedLetters.map(function(revealedLetter,index){
			if (guessedLetter === key[index]){
				return guessedLetter;
			}
			else{
				return revealedLetter;
			}
			});
	},

	isRevealed: function(){
		return !this.revealedLetters.some(function(letter){
			return letter ==='';
		});
	}
};


$("#gameHTML").append(wordToGuess);

    // Injecting the HTML from above into game div and updating the game information on page.
  //         document.getElementById('game').innerHTML = html;
  // 