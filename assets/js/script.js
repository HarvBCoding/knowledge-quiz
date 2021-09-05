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
            // create element to hold question
            let questionEl = document.createElement("div");
            questionEl.className = "question";
            questionEl.innerHTML =
                `<h3 class="question-main">${currentQuestion.question}<h3>`;   
            quizDivEl.appendChild(questionEl)    ;
            for(letter in currentQuestion.answers) {
                // create element to hold answer options
                let answerOption = document.createElement("div");
                answerOption.className = "answer-option";
                // add a radio button
                answerOption.innerHTML = 
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}`
                    questionEl.appendChild(answerOption);
            }   
        })
};

const displayResults = () => {
    // get all answer containers
    let answerButton = document.getElementsByTagName('input');
    for (let i = 0; i < answerButton.length; i++) {
        if(answerButton[i].checked) {
            let userAnswer = answerButton[i].value;
            return userAnswer;
        }
        if(userAnswer = quizQuestions.correctAnswer) {
            console.log("it worked!");
        }
    }
};

displayQuiz();

// on click the quiz will start
startButton.addEventListener("click", displayQuiz);

// on click, the results will display
submitButton.addEventListener("click", displayResults);

