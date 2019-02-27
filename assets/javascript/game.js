

var wins = "1";
var losses = "1";
var guessesLeft = "26";
var guessesSoFar = "1";
var userGuess = "1";
var computerGuess;
var userText;
// We wil use if statemetn to keep track of user/computer guesses and win/losses



$(document).ready(function () {  //this is the standard line of code to begin a Javascript thing

  //the app randomly picks a letter


  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  function letterGuesser() {
    var Index = Math.floor(Math.random() * 25);
    //console.log(computerGuess);
    computerGuess = letters[Index];


  }

  //NOW....I mist figure out how to end the game at 26 tries.... errr.reSTART the game at 26 key events. 

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
     var userText = userGuess
    letterGuesser();
    console.log(userGuess, "these are the 2 letters ", computerGuess);
    compareGuess();

    if (userGuess = userGuess) {
      document.getElementById("user-text5").innerHTML = computerGuess;


    }

    if (computerGuess = computerGuess) {
      document.getElementById("user-text6").innerHTML = userText;

    }

    



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
      document.getElementById("user-text4").innerHTML = guessesSoFar++;
      document.getElementById("user-text3").innerHTML = guessesLeft--;



    }
    if (userGuess = compareGuess) {
      console.log("loser!");
      document.getElementById("user-text2").innerHTML = losses++;
      document.getElementById("user-text4").innerHTML = guessesSoFar++;
      document.getElementById("user-text3").innerHTML = guessesLeft--;
    }

  }


})


//if userevent occurs 26 times, resart values.... 

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
