const quizQuestions = [
    {
        question: "What does HTML stand for?",
        choices: ["HyperText Markup Language", "HighText Machine Language", "HyperText and Links Markup"],
        correctAnswer: 0,
        flagged: false
    },
    {
        question: "Which programming language is used for styling web pages?",
        choices: ["HTML", "CSS", "JavaScript"],
        correctAnswer: 1,
        flagged: false
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        choices: ["<js>", "<script>", "<javascript>"],
        correctAnswer: 1,
        flagged: false
    }
];

let currentQuestionIndex = 0;
const questionContainer = document.getElementById('question-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const flagButton = document.getElementById('flag');

function showQuestion(index) {
    const questionData = quizQuestions[index];
    const choicesHTML = questionData.choices.map((choice, i) =>
        `<label>
            <input type="radio" name="choice" value="${i}">
            ${choice}
        </label>`).join("");
    questionContainer.innerHTML = `
        <div class="question">${questionData.flagged ? '<span class="flagged">Flagged: </span>' : ''}${questionData.question}</div>
        <div class="choices">${choicesHTML}</div>`
    ;
    prevButton.disabled = index === 0;
    nextButton.textContent = index === quizQuestions.length - 1 ? 'Submit' : 'Next';
}

function handleNavigation(next = true) {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        quizQuestions[currentQuestionIndex].selected = parseInt(selectedChoice.value);
    }
    currentQuestionIndex += next ? 1 : -1;
    if (currentQuestionIndex >= quizQuestions.length) {
        showResults();
    } else {
        showQuestion(currentQuestionIndex);
    }
}

function toggleFlag() {
    quizQuestions[currentQuestionIndex].flagged = !quizQuestions[currentQuestionIndex].flagged;
    showQuestion(currentQuestionIndex);
}

function showResults() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
        if (q.selected === q.correctAnswer) {
            score++;
        }
    });
    questionContainer.style.display = 'none';
    flagButton.style.display = 'none';
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
    const resultsContainer = document.getElementById('results');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `You scored ${score} out of ${quizQuestions.length}.`;
}

prevButton.addEventListener('click', () => handleNavigation(false));
nextButton.addEventListener('click', () => handleNavigation(true));
flagButton.addEventListener('click', toggleFlag);

showQuestion(currentQuestionIndex);
