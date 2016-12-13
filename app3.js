//Global Variables
var author = ["PROUST", "JOYCE", "CERVANTES", "MELVILLE", "SHAKESPEARE"];
var availableLetters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var game = {
    wins: 0,
    losses: 0,
    guessesLeft: 7,
    correct: 0,
}

var resetBtn = document.querySelector("#reset");
// Sets the mysteryAuthor variable equal to a random choice from the author array.
var mysteryAuthor = author[Math.floor(Math.random() * author.length)];
var chosenWord = "";
var index = [];
var wrongGuesses = [];
var wrongs = [];
var splitAuthor = mysteryAuthor.split("");
  console.log(mysteryAuthor);

  

// when player presses a letter, run the following function

document.onkeyup = function (event) {

  // Determine which key was pressed, make it upper case, and set it to the guess variable.
  var guess = String.fromCharCode(event.keyCode).toUpperCase();
  //Created a variable that turns the letters of mysteryAuthor into an array
  for (var i = 0; i < splitAuthor.length; i++) {
    // Is guess a valid letter?  If yes, proceed.
    if (availableLetters.indexOf(guess) > -1) {
        if (guess === splitAuthor[i]) {
        game.correct++;
        console.log("correct:" + game.correct);
        document.getElementById("ltrPosition" + i).innerHTML = splitAuthor[i];
        }
          if(splitAuthor.indexOf(guess) === -1){
            wrongGuesses.push(guess); 
              
          
        }
      }
    }
    

  for(var i = 0; i < 1; i++){
    if (game.correct === splitAuthor.length){
      winning();
    }
    if (game.guessesLeft === 1){
      losing();
    }
  }
  //Looping through the array of letters in the splitAuthor
//    
reset();
if (wrongGuesses.indexOf(guess) != -1){
  // Is this letter already in your wrong guesses? If not, proceed.
  if  (wrongs.indexOf(guess) === -1){
      wrongs.push(guess);    
      console.log(wrongs);
      document.getElementById('wrongs').innerHTML = wrongs;
      game.guessesLeft--;
      document.querySelector("#guessCounter").innerHTML = game.guessesLeft;
      console.log("guesses left:" + game.guessesLeft);
  }
  }
  };




function reset() {
    index = [];
}

function winning() {
    alert("You Win!  The mystery author was: " + mysteryAuthor + "!");
    console.log("WIN");
    game.wins++;
    document.querySelector("#winsCounter").innerHTML = game.wins;
}

function losing() {
    alert("You Lose!  The mystery author was: " + mysteryAuthor + "!");
    console.log("LOSE");
    game.losses++;
    document.querySelector("#lossesCounter").innerHTML = game.losses;
}




// End of event

//Created load function
function load() {
  //HTML that will be placed into game div and displayed on the page.
  chosenWord = mysteryAuthor.split(''),
    console.log(chosenWord);
  document.querySelector("#guessCounter").innerHTML = game.guessesLeft;

  for (var i = 0; i < mysteryAuthor.length; i++) {
    var dashes = document.createElement("span");
    dashes.setAttribute("class", mysteryAuthor.charAt(i));
    dashes.setAttribute("id", "ltrPosition" + i)
    dashes.textContent = " _ ";
    console.log(document.getElementById("hangmanWord").appendChild(dashes));
  }
};

//Created event listener to call load function when page opens
window.addEventListener("load", function() {
    console.log("loading");
    load();
    var resetBtn = document.querySelector("#reset");
    console.log(resetBtn);
    resetBtn.addEventListener("click", function() {
        console.log("reset");
        location.reload();
    });
});

document.getElementById("reset").addEventListener("click", function(){
  console.log("reset");
  load();
  });
