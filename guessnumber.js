var random = Math.floor((Math.random() * 10) + 1);

var guess = prompt("Guess a number between 1 and 10");

var remainingGuesses = 2;

while(guess !== random && remainingGuesses > 0) {
  if(guess === undefined) {
    guess = prompt("Guess a number between 1 and 10");
  } else if(guess > random) {
    alert("Your guess is too high.");
    guess = prompt("Guess lower");
  } else {
    alert("Your guess is too low.");
    guess = prompt("Guess higher");
  }
  remainingGuesses -= 1;
}

if(parseInt(guess) === random) {
  alert("Correct!");
} else {
  alert("Incorrect! The correct number was " + random + ".");
}
