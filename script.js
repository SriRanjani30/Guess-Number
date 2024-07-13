let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
    let userGuess = document.getElementById("guessInput").value;
    let feedback = document.getElementById("feedback");
    let attemptsDisplay = document.getElementById("attempts");
    attempts++;

    if (userGuess == numberToGuess) {
        feedback.textContent = `Congratulations! You've guessed the number ${numberToGuess} in ${attempts} attempts.`;
        feedback.style.color = "green";
        feedback.classList.add("animate");
    } else if (userGuess < numberToGuess) {
        feedback.textContent = "Too low! Try again.";
        feedback.style.color = "orange";
        feedback.classList.add("animate");
    } else {
        feedback.textContent = "Too high! Try again.";
        feedback.style.color = "red";
        feedback.classList.add("animate");
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    setTimeout(() => feedback.classList.remove("animate"), 1000);
}
