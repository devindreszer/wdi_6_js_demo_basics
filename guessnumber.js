var random = Math.floor((Math.random() * 10) + 1);

var guess = prompt("Guess a number between 1 and 10");

if(guess == random) {
  alert("Your guess is correct!");
} else {
  alert("Your guess is incorrect!");
}
