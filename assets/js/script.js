const startButton = document.getElementById('start-btn')
const quizDivEl = document.getElementById('quiz-container');
const resultsDivEl = document.getElementById('results-container');
const submitButton = document.getElementById('submit-btn');

const quizQuestions = [
    {
        question: "random question 1?",
        answers: {
            a: "random answer",
            b: "random answer",
            c: "random answer"
        },
        correctAnswer: "b"
    },
    {
        question: "random question 2?",
        answers: {
            a: "random answer",
            b: "random answer",
            c: "random answer"
        },
        correctAnswer: "a"
    },
    {
        question: "random question 3?",
        answers: {
            a: "random answer",
            b: "random answer",
            c: "random answer"
        },
        correctAnswer: "c"
    },
    {
        question: "random question 4?",
        answers: {
            a: "random answer",
            b: "random answer",
            c: "random answer"
        },
        correctAnswer: "b"
    },
    {
        question: "random question 5?",
        answers: {
            a: "random answer",
            b: "random answer",
            c: "random answer"
        },
        correctAnswer: "b"
    }
]

const displayQuiz = () => {
    // for each question
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
        for(letter in currentQuestion.answers) {
            // add a radio button
            quizDivEl.innerHTML = `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} : 
            ${currentQuestion.answers[letter]}
            </label>`
        }
    })
};

const displayResults = () => {

};

displayQuiz();


// on click the quiz will start
startButton.addEventListener("click", displayQuiz);

// on click, the results will display
submitButton.addEventListener("click", displayResults);

