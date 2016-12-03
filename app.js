var availableLetters = ["A", "B", "C", "D", "E", "F", "G", "H",
        "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
        "T", "U", "V", "W", "X", "Y", "Z"];

    var author = ["PROUST", "JOYCE", "CERVANTES", "MELVILLE", "SHAKESPEARE"];

    // variables for tracking wins/losses
    var wins= 0 ;
    var losses= 0;

    // Sets the mysteryAuthor variable equal to a random choice from the title array.
        var mysteryAuthor = author[Math.floor(Math.random() * author.length)];

        chosenAuthor = mysteryAuthor.replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/g, " _ ");
        console.log(mysteryAuthor);
        var html =  mysteryAuthor;
        var reveal = [];

        // function revealLetters 

    // when player presses a letter, run the following function

    document.onkeyup = function(event) {

    // Determine which key was pressed, make it upper case, and set it to the guess variable.
        var guess = String.fromCharCode(event.keyCode).toUpperCase();
    //Created a variable that turns the letters of mysteryAuthor into an array
        var splitAuthor = mysteryAuthor.split("");
        // console.log(splitAuthor);
    //Empty array where the location of correct guesses live

    //Looping through the array of letters in the splitAuthor array
        for (i=0; i < splitAuthor.length; i++){ 
    //If user's guess appears in the array then run this code...      
          if (guess === splitAuthor[i]){
            console.log(splitAuthor [i]);
            console.log(i);
            console.log("yes");

            function locateCorrectGuess(){
              console.log([i])
            }
            locateCorrectGuess()
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

          };

          }
        // else{
        //   console.log("well dang")
        // }
      }



     // If the user presses a letter, run the game logic.
   // * When user provides a letter, compare that letter to the chosenAuthor.  If they match do something, if not do something else. */
     
     // if (guess == "B" ){
     //  console.log("got it");}
        

     //         // End of event
            
//Created load function
  function load() {
    //HTML that will be placed into game div and displayed on the page.
        html = "<p>Press any letter to start playing.</p>"+
                chosenAuthor + ;

    // Injecting the HTML from above into game div and updating the game information on page.
          document.getElementById("game").innerHTML = html;
  }
//Created event listener to call load function when page opens
  window.addEventListener("load", function(){
    console.log("loading");
    load();
  })

    