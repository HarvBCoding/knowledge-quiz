// variable to hold all questions
const quizQuestions = {
    // question one
    question: "question 1?",
    answers: {
        a: "right",
        b: "wrong",
        c: "wrong"
    },
    // question two
    question: "question 2?",
    answers: {
        a: "wrong",
        b: "right",
        c: "wrong"
    },
    // question three
    question: "question 3?",
    answers: {
        a: "wrong",
        b: "right",
        c: "wrong"
    },
    // question four
    question: "question 4",
    answers: {
        a: "wrong",
        b: "wrong",
        c: "right"
    },
    // question five
    question: "question 5?",
    answers: {
        a: "wrong",
        b: "right",
        c: "wrong"
    }
}

// variable to keep score
let quizScore = 0;

// variable to iterate over questions
let questionNumber = 1;

// start button element
const startButton = document.getElementById("start-btn");
// quiz container element
const quizContainer = document.getElementById("quiz-container");
// submit button element
const submitButton = document.getElementById("submit-btn");
// results container element
const resultsContainer = document.getElementById("results-container");

// funtion to display quiz questions and iterate over them once answered in HTML
const displayQuestions = function() {
    // iterate over questions to display them in HTML
    for (let  i = 0; i < quizQuestions.length; i++) {
        let questionTitle = document.createElement("h3");
        questionTitle.textContent = quizQuestions[i].question;
        quizContainer.appendChild(questionTitle);
    }
}
// function to add radio buttons to answers

// function to iterate over answers to identify the correct answer and subtract time if the answer is incorrect

// function to display results after quiz is over

// function to end game once the timer is at 0 or all the questions are answered

// funtion to save highscore to localStorage

// function to keep score

// function to hold timer

