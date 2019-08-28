var wins;
var losses;
var guessesLeft;
var guessesSoFar;
var userGuess = "";
var computerGuess = "";

function main() {

  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  function letterGuesser() {
    var Index = Math.floor(Math.random() * 26);
    computerGuess = letters[Index];
    // computerGuess = "a"; I want this game to keep guessing random letters as the user guesses. 
  }

  function compareGuess() {
    if (userGuess === computerGuess) {
      console.log("win");
      // wins++;
      wins++;
      guessesSoFar++;
      guessesLeft--;
    }
    else {
      console.log("loser!")
      losses++;
      guessesSoFar++;
      guessesLeft--;
    }
  }



  function updateDisplay() {
    document.getElementById("user-text").innerHTML = wins;
    document.getElementById("user-text2").innerHTML = losses;
    document.getElementById("user-text3").innerHTML = guessesLeft;
    document.getElementById("user-text4").innerHTML = guessesSoFar;
    document.getElementById("user-text5").innerHTML = computerGuess;
    document.getElementById("user-text6").innerHTML = userGuess;

    if (guessesSoFar >= 10) {
      console.log("Exceeded turn limit.");
      console.log(wins);
      // originalValues();
      // updateDisplay();
      // alert("End of game! Keep pressing keys for more rounds. ");

    }


  }




  function originalValues() {
    wins = 0;
    losses = 0;
    guessesSoFar = 0;
    guessesLeft = 10;
    computerGuess = ("Press a key to see my guess!");
    userGuess = ("Press a key to guess a letter!");

  }
  //letterGuesser();
  //  $( function() {
  //   $( "#dialog" ).dialog();
  // } );


  $(document).on('keypress', function () { //handler

    userGuess = event.key.toLowerCase(); //create the key event!!!!
    //var userText = userGuess
    letterGuesser();
    console.log(userGuess, "these are the 2 letters ", computerGuess);
    compareGuess();
    updateDisplay();



    if (guessesSoFar >= 10) {
      console.log("Exceeded turn limit.");
      console.log(wins);
      originalValues();
      updateDisplay();
      //we are going to try a timeout to slow down the alert
      setTimeout(myFunction, 500); 
      function myFunction() {
      alert("End of game! Keep pressing keys for more rounds. ")};


{/* <p>Click "Try it". Wait 3 seconds, and the page will alert "Hello".</p>

<button onclick="setTimeout(myFunction, 3000);">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}
</script> */}

      //try modal then timeOut 
    }



  })

  originalValues();
  updateDisplay(); //initial display 

}

main();

