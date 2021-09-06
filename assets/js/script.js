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

function createRadioBtn(){
    const radioAnswers = document.createElement("input");
    radioAnswers.type = "radio";
    radioAnswers.value
}

// when the start button is clicked
function startQuiz(){
    //put a question on the page.
    let questionEl = document.createElement("div");
    questionEl.innerHTML = 
        `<h3 class="question">${quizQuestions[0].question}</h3>`;
    quizDivEl.appendChild(questionEl);
    // put answers for question on the page
    // option a
    let answerOption = document.createElement("div");
    answerOption.className = "answer-option";
    answerOption.innerHTML =
        `<label>
        <input type="radio" name="question0" value="a">
        ${quizQuestions[0].answers.a}`
        questionEl.appendChild(answerOption);
    // option b
    answerOption = document.createElement("div");
    answerOption.className = "answer-option";
    answerOption.innerHTML =
        `<label>
        <input type="radio" name="question0" value="a">
        ${quizQuestions[0].answers.b}`
        questionEl.appendChild(answerOption);
    // option c
    answerOption = document.createElement("div");
    answerOption.className = "answer-option";
    answerOption.innerHTML =
        `<label>
        <input type="radio" name="question0" value="a">
        ${quizQuestions[0].answers.c}`
        questionEl.appendChild(answerOption);

    //start timer.

}


function countdown() {
    let timeLeft = 50;

    let timeInterval = setInterval(function() {
        // if the remaining time is greater than 1
        if (timeLeft > 0) {
            // decrement time left by 1
            timeLeft --
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
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
startButton.onclick = countdown;

// on click, the results will display
submitButton.addEventListener("click", endQuiz);