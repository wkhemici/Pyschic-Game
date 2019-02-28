

var wins = "1";
var losses = "1";
var guessesLeft = "10";
var guessesSoFar = "1";
var userGuess = "1";
var computerGuess;
var userText;
var newGame = "New round!"
// We wil use if statemetn to keep track of user/computer guesses and win/losses

$(document).ready(function () {  //this is the standard line of code to begin a Javascript thing

  //the app randomly picks a letter


  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  function letterGuesser() {
    var Index = Math.floor(Math.random() * 10);
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

  })

     if (guessesSoFar === 10) {

      var totalGuesses = "10" ;
      guessesSoFar = totalGuesses;
      console.log("that's all the guess you have!");
     }
    //   document.getElementById("user-text1").innerHTML = 0; 
    //   document.getElementById("user-text2").innerHTML = 0; 
    //   document.getElementById("user-text3").innerHTML = 0; 
    //   document.getElementById("user-text4").innerHTML = 0; 
    //   document.getElementById("user-text5").innerHTML = 0; 
    //   document.getElementById("user-text6").innerHTML = 0; 

    




    

    // if (userGuess= 0) {
    //   document.getElementById("user-text3").innerHTML = newGame;

    // }

    //  reset value

    //if (guessesLeft=0) {
    //function reset ()   

    //so once reset, the guesses need to go up ++ again.. here, I will limit the guesses to 10. After 10 guesses, the game will reset all variables to their starting value. 
  // }


    // if (computerguess = letters.length) {
    //   document.getElementById("user-text3").innerHTML = ("you are done!");







    //document.getElementById("user-text").innerHTML = wins++; //this almost worked! this actually shows a value on the site next to "wins". but now i just need to properly idenity wins.
    //now, in response to a key press event, I want to log 1) the number of events in Guesses so far2) make the guesses left count down from 26

    //  document.getElementsByClassName("wins" + computerGuess);
    //  getElementsByClassName();    I am trying to hook an HTML element into my JVS




    // var userText = document.getElementById("user-text");
    //   // Next, we give JavaScript a function to execute when onkeyup event fires.
    //   document.onkeyup = function(event) {
    //   userText.textContent = event.key;

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

//here, I am trying to figure out how to do:
//when the number of guesses has reached ten, i want to create an alert message that says "game over"
// and/or i want to reset the variables all to their original values, so as to restart the game after 10 keypresses. 
  // if (guessesSoFar === guessesLeft) {
  //   console.log("that is ten rounds!")

  //  clearTimeout;

  // }

  //   funtion newGame() {
  //   document.getElementById("user-text2").innerHTML = 0;
  //   document.getElementById("user-text4").innerHTML = 0;
  //   document.getElementById("user-text3").innerHTML = 0;

  // }



// }


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



})
