const startButton = document.getElementById('start-btn')
const quizDivEl = document.getElementById('quiz-container');
const resultsDivEl = document.getElementById('results-container');
const submitButton = document.getElementById('submit-btn');
const answersDivEl = document.getElementById('answers-container');
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

function startQuiz(){
    quizDivEl.textContent = quizQuestions[0].question;
    //put a question on the page.
    //start timer.
}


function nextQuestion(){
//this function needs to run when a choice button is clicked.
//determine right or wrong, adjust score/timer however.

//put the next question on the page if there's another question. Otherwise, show the highscore form.
}
  
function endQuiz(){
//run this when the high score form is submitted.
//store stuff in localStorage
//take us to highscores.html
}

// on click the quiz will start
startButton.addEventListener("click", startQuiz);

// on click, the results will display
submitButton.addEventListener("click", endQuiz);