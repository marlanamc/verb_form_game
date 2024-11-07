let currentVerb;
let score = 0;
let totalQuestions = 0;

// DOM Elements
const verbDisplay = document.getElementById('verb-display');
const checkButton = document.getElementById('check-answer');
const resultDiv = document.getElementById('result');
const scoreSpan = document.getElementById('correct-count');
const percentageSpan = document.getElementById('correct-percentage');
const difficultySelect = document.getElementById('difficulty');
const verbTypeSelect = document.getElementById('verb-type');
const generateQuestionButton = document.getElementById('generate-question');

// Get irregular verbs from the verb data
const irregularVerbs = verbData.filter(verb => 
    verb[0] !== verb[3] || verb[0] !== verb[4]
);

function getRandomVerb() {
    const verbList = verbTypeSelect.value === 'irregular' ? irregularVerbs : verbData;
    return verbList[Math.floor(Math.random() * verbList.length)];
}

function displayVerb() {
    currentVerb = getRandomVerb();
    const difficulty = difficultySelect.value;

    let display = '<tr>';
    let blankIndices = [];

    // Determine which fields should be blank based on difficulty
    if (difficulty === 'only-v1') blankIndices = [0];
    else if (difficulty === 'only-v1-3rd') blankIndices = [1];
    else if (difficulty === 'only-v1-ing') blankIndices = [2];
    else if (difficulty === 'only-v2') blankIndices = [3];
    else if (difficulty === 'only-v3') blankIndices = [4];
    else {
        let blankCount = difficulty === 'easy' ? 1 : (difficulty === 'medium' ? 3 : 4);
        let allIndices = [0, 1, 2, 3, 4];

        while (blankIndices.length < blankCount) {
            const randomIndex = Math.floor(Math.random() * allIndices.length);
            blankIndices.push(allIndices[randomIndex]);
            allIndices.splice(randomIndex, 1);
        }
    }

    // Create the display row with inputs for blank fields
    for (let i = 0; i < 5; i++) {
        if (blankIndices.includes(i)) {
            display += `<td><input type="text" id="input-${i}" autocomplete="off"></td>`;
        } else {
            display += `<td>${currentVerb[i]}</td>`;
        }
    }

    display += '</tr>';
    verbDisplay.innerHTML = display;

    // Clear previous result
    resultDiv.textContent = '';
    resultDiv.className = 'esol-result';

    // Focus the first input
    const firstInput = document.querySelector('input[type="text"]');
    if (firstInput) firstInput.focus();
}

function calculatePercentage() {
    return totalQuestions === 0 ? 0 : Math.round((score / totalQuestions) * 100);
}

function updateScoreDisplay() {
    const percentage = calculatePercentage();
    percentageSpan.textContent = `${percentage}%`;
    
    // Update percentage color based on score
    percentageSpan.style.color = percentage >= 70 ? '#22c55e' : 
                                percentage === 0 ? '#6366f1' : '#ef4444';
}

function checkAnswer() {
    let correct = true;
    totalQuestions++;

    // Check each input against the correct answer
    for (let i = 0; i < 5; i++) {
        const input = document.getElementById(`input-${i}`);
        if (input) {
            const userAnswer = input.value.trim().toLowerCase();
            const correctAnswer = currentVerb[i].toLowerCase();

            // Handle special cases like "was/were"
            const isCorrect = correctAnswer.includes('/') 
                ? correctAnswer.split('/').includes(userAnswer)
                : userAnswer === correctAnswer;

            if (!isCorrect) {
                correct = false;
                break;
            }
        }
    }

    // Update score and display result
    if (correct) {
        score++;
        resultDiv.textContent = "Correct!";
        resultDiv.className = 'esol-result success';
    } else {
        resultDiv.textContent = "Incorrect. The correct forms are: " + currentVerb.join(' - ');
        resultDiv.className = 'esol-result error';
    }

    scoreSpan.textContent = score;
    updateScoreDisplay();
}

// Event Listeners
checkButton.addEventListener('click', checkAnswer);
generateQuestionButton.addEventListener('click', displayVerb);
difficultySelect.addEventListener('change', displayVerb);
verbTypeSelect.addEventListener('change', displayVerb);

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkAnswer();
    }
    if (event.key === "ArrowRight") {
        event.preventDefault();
        displayVerb();
    }
});

// Tab navigation between inputs
document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
        const maxIndex = inputs.length - 1;
        const currentIndex = inputs.indexOf(document.activeElement);
        
        if (currentIndex === maxIndex && !event.shiftKey) {
            event.preventDefault();
            inputs[0].focus();
        } else if (currentIndex === 0 && event.shiftKey) {
            event.preventDefault();
            inputs[maxIndex].focus();
        }
    }
});

// Initialize the game
displayVerb();
