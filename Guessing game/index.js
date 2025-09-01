 var randomNumber = Math.floor(Math.random() * 100) + 1;
 const guess_input_= document.getElementById('guessInput');
 const guessbtn = document.getElementById("Guess");
const  result= document.getElementById("result");
const attempt = document.getElementById("attempt");
let attempts = [];
 guessbtn.addEventListener("click", () => {
   const guess = parseInt(guessInput.value);
   
   if(isNaN(guess) || guess < 1 || guess > 100) {
     result.textContent = "Please a valid number between 1 and 100";
 } else if (guess === randomNumber){
  result.textContent = "Congratulations! You guessed the right number";
 } else if (guess < randomNumber) {
   result.textContent = "Too low! guess higher";
 } else {
     result.textContent = "Too high! guess lower";
 }
});
