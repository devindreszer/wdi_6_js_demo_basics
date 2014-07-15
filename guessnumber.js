var random = Math.floor((Math.random() * 10) + 1);

var guess = prompt("Guess a number between 1 and 10");

var remainingGuesses = 2;

while(guess != random && remainingGuesses > 0) {
  if(guess == random) {
    alert("Your guess is correct!");
  } else {
    alert("Your guess is incorrect!");
    guess = prompt("Guess again");
    remainingGuesses -= 1;
  }
}

if(guess != random) {
  alert("Your guess is incorrect! The correct number was " + random + ".");
}

