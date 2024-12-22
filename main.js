const level = document.getElementById('level');  

const cguess = document.getElementById('choice');
const btn = document.getElementById('btn');

const results1 = document.getElementById('results1');



let scnb = Math.floor(Math.random() * 10) + 1;
const clevel = parseInt(level.value);
if (clevel ===  1){
 btn.addEventListener('click', function() {
	const guess = parseInt(cguess.value);
	if (guess >= 1 && guess <= 10) {
		if (guess === scnb) {
			results1.textContent = 'Congratulations! You guessed the number ';
			document.body.style.backgroundColor = 'green';
		} 
    else if (guess > scnb) {
			results1.textContent = 'Incorrect guess.  the number is smaller';
		}
    else if (guess < scnb) {
			results1.textContent = 'Incorrect guess.  the number is greater';
    }
    
	}else {
    results1.textContent = 'Please enter a number between 1 and 10.';
  }
  
 });
}