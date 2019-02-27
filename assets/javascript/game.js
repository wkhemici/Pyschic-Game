

var wins = "0";
var losses = "0";
var guessesLeft = "26";
var guessesSoFar = "0";
var userGuess;
var computerGuess;
var userText;
// We wil use if statemetn to keep track of user/computer guesses and win/losses



$(document).ready(function () {  //this is the standard line of code to begin a Javascript thing

  //the app randomly picks a letter


  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  function letterGuesser() {
    var Index = Math.floor(Math.random() * 26);
    //console.log(computerGuess);
    computerGuess= letters[Index];
  

  }

  // user has to guess which letter the app chose

  //vanilla way
  //document.onkeypress = funcion() {}
  // jQuery
  // $(document).on('keypress', function(){})
  //.on( events [, selector ] [, data ], handler )

  //function myFunc() {
  //  console.log("hello");
  //}

  //$(document).on('keypress', myFunc);

  $(document).on('keypress', function () {

    userGuess = event.key.toLowerCase(); //create the key event!!!!
    letterGuesser();
    console.log(userGuess, "these are the 2 letters ", computerGuess);
    compareGuess();
    

    //document.getElementById("user-text").innerHTML = wins++; //this almost worked! this actually shows a value on the site next to "wins". but now i just need to properly idenity wins.
   //now, in response to a key press event, I want to log 1) the number of events in Guesses so far2) make the guesses left count down from 26

  //  document.getElementsByClassName("wins" + computerGuess);
  //  getElementsByClassName();    I am trying to hook an HTML element into my JVS
    


    
    // var userText = document.getElementById("user-text");
    //   // Next, we give JavaScript a function to execute when onkeyup event fires.
    //   document.onkeyup = function(event) {
    //   userText.textContent = event.key;
    


  })


  function compareGuess() {
    if (userGuess === computerGuess) {
      console.log("win");
      document.getElementById("user-text").innerHTML = wins++;
      

    }
   if (userGuess = compareGuess) {
    console.log("loser!");
    document.getElementById("user-text2").innerHTML = losses++;
   }

  

  }




  // var lose =

  //  else lose {

  //   userGuess = computerGuess;
  //   console.log("false");

  //  }

  // if userGuess {

  //   var guessesSoFar = (guessesSoFar + i++);
  //   document.write = ("Guesses so far: " + guessesSoFar);

  // Keep track of wins, loses, guess numbers, guesses left 



  // }
})