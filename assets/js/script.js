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
                let answerOption = document.createElement("p");
                answerOption.className = "answer-option";
                // add a radio button
                answerOption.innerHTML = 
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}`
                    quizDivEl.appendChild(answerOption);
            }   
        })
};

const displayResults = () => {

    // get user answers from containers
    const answerContainers = quizDivEl.querySelectorAll('.answer-option');
    
    // keep score
    let finalScore = 0;

    // for each question
    quizQuestions.forEach( (currentQuestion, questionNumber) => {

        // find all answers
        const answerContainer = answerContainers[questionNumber];
        // get selected user answer
        const selector = `input[name=question${questionNumber}]:checked`;
        console.log(selector);
        // get the selected radio button, if blank return empty
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to final score
            finalScore++;

            // color answers green
            answerContainers[questionNumber].style.color = 'green';
        } else {
            // if the answer is wrong or left blank

            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
            debugger;
        }

    });
    // show number of correct answers out of total
    resultsDivEl.innerHTML =
        `${finalScore} out of ${quizQuestions.length}`;
};

// on click the quiz will start
startButton.addEventListener("click", displayQuiz);

// on click, the results will display
submitButton.addEventListener("click", displayResults);

