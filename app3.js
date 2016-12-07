var availableLetters = ["A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
  "T", "U", "V", "W", "X", "Y", "Z"];

var author = ["PROUST", "JOYCE", "CERVANTES", "MELVILLE", "SHAKESPEARE"];

// variables for tracking wins/losses
var wins = 0;
var losses = 0;

// Sets the mysteryAuthor variable equal to a random choice from the title array.
var mysteryAuthor = author[Math.floor(Math.random() * author.length)];
var chosenWord = "";
var index = [];
var wrongGuesses = [];
var wrongs = [];

console.log(mysteryAuthor);

// var chosenAuthor = mysteryAuthor.replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/g, " _ ");
//   console.log(mysteryAuthor);
// var html =  mysteryAuthor;
// var reveal = [];




// when player presses a letter, run the following function

document.onkeyup = function (event) {

  // Determine which key was pressed, make it upper case, and set it to the guess variable.
  var guess = String.fromCharCode(event.keyCode).toUpperCase();
  //Created a variable that turns the letters of mysteryAuthor into an array
  var splitAuthor = mysteryAuthor.split("");
  console.log(splitAuthor);
  //Empty array where the location of correct guesses live

  //Looping through the array of letters in the splitAuthor array
  for (i = 0; i < splitAuthor.length; i++) {
    if (splitAuthor[i] === guess) {
            index.push(i);
            console.log(index);
      console.log('nope');
      console.log(guess);
    }

    for (var j = 0; j < chosenWord.length; j++) {
      for (var c = 0; c < index.length; c++) {
        if (index[c] === j) {
          chosenWord[j] = guess;
          let bird = chosenWord.join(" ");
          document.getElementById('game').innerHTML = bird;

        }
      }
    }
    console.log(chosenWord);    
    if( splitAuthor.indexOf(guess) === -1){
               wrongGuesses.push(guess);
               console.log(wrongGuesses);
    }

}    
reset();
if (wrongGuesses.indexOf(guess) != -1){
      wrongs.push(guess);    
      console.log(wrongs);
      document.getElementById('wrongs').innerHTML = wrongs;
  }
    console.log(wrongGuesses);
  };


function reset() {
    index = [];

  console.log(index);
}
// splitAuthor[i] = guess;
// console.log(splitAuthor);
// mysteryAuthor=splitAuthor;





// var newDiv = document.createElement("div");
// newDiv.innerHTML = splitAuthor;


// console.log(newDiv)

//       function locateCorrectGuess(){
//         return(splitAuthor.indexOf(guess));



//find the location of the correct guess in the word
// console.log(splitAuthor.indexOf(guess));
// reveal.push(splitAuthor.indexOf(guess));
// console.log(reveal);

//add the index location to the letterIndex array
// letterIndex.push(i);
// console.log(letterIndex); 

// console.log(splitAuthor(i));


// var reveal = chosenAuthor.replace (/splitAuthor(i)/, guess);
// console.log (reveal);
//   var change = function (){
//   console.log('hi');

//   for (var l = 0; l < chosenAuthor.length; l++){
//   for (var j = 0; j < letterIndex.length; j++){
//       if (l === letterIndex[j]){
//     chosenAuthor[l] = guess;
//   }

//   }
// }



// else{
//   console.log("well dang")
// }




// If the user presses a letter, run the game logic.
// * When user provides a letter, compare that letter to the chosenAuthor.  If they match do something, if not do something else. */

// if (guess == "B" ){
//  console.log("got it");}


//         // End of event



//Created load function
function load() {
  //HTML that will be placed into game div and displayed on the page.
  chosenWord = mysteryAuthor.split(''),

    console.log(chosenWord);
  for (var i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] === "A" || "B" || "C" || "D" || "E" || "F" || "G" || "H" || "I" || "J" || "K" || "L" || "M" || "N" || "O" || "P" || "Q" || "R" || "S" || "T" || "U" || "V" || "W" || "X" || "Y" || "Z") {
      chosenWord[i] = "_ ";
      console.log('yikes');
    }
  }
  var fish = chosenWord.join("");
  document.getElementById('game').innerHTML = fish;
  // html = "<p>Press any letter to start playing.</p>"+
  //         chosenAuthor;

  // Injecting the HTML from above into game div and updating the game information on page.
  // document.getElementById("game").innerHTML = mysteryAuthor;
};

//Created event listener to call load function when page opens
window.addEventListener("load", function () {
  console.log("loading");
  load();
})

var button = document.querySelectorAll("#reset");
console.log(button); 
button.addEventListener("click", function(){
  console.log("reset");
  load();
  });
