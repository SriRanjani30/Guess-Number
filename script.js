let numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const words = ['apple', 'banana', 'cherry', 'orange', 'grape']; // List of words to guess
let wordToGuess = '';
let guessedLetters = [];

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

function showGame(game) {
    document.getElementById('guessGame').style.display = game === 'guess' ? 'block' : 'none';
    document.getElementById('wordGame').style.display = game === 'word' ? 'block' : 'none';
    if (game === 'word') {
        startWordGame();
    }
}

function startWordGame() {
    wordToGuess = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    updateWordToGuessDisplay();
    document.getElementById('wordFeedback').textContent = '';
}

function updateWordToGuessDisplay() {
    let displayText = '';
    for (let letter of wordToGuess) {
        if (guessedLetters.includes(letter)) {
            displayText += letter + ' ';
        } else {
            displayText += '_ ';
        }
    }
    document.getElementById('wordToGuess').textContent = displayText;
}

function guessLetter() {
    let letterInput = document.getElementById('letterInput').value.toLowerCase();
    if (letterInput.length !== 1 || !/[a-z]/.test(letterInput)) {
        document.getElementById('wordFeedback').textContent = 'Please enter a single letter.';
        return;
    }
    if (guessedLetters.includes(letterInput)) {
        document.getElementById('wordFeedback').textContent = 'You have already guessed that letter.';
        return;
    }

    guessedLetters.push(letterInput);
    updateWordToGuessDisplay();

    if (wordToGuess.includes(letterInput)) {
        if (guessedLetters.length === new Set(wordToGuess).size) {
            document.getElementById('wordFeedback').textContent = 'Congratulations! You guessed the word!';
        } else {
            document.getElementById('wordFeedback').textContent = 'Good guess! Keep going.';
        }
    } else {
        document.getElementById('wordFeedback').textContent = 'Oops! Wrong guess. Try another letter.';
    }
}
