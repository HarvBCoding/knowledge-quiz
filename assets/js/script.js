let startButton = document.getElementById('start-btn')
let submitButton = document.getElementById('initials')
let quizDivEl = document.getElementById('quiz-container');
let resultsDivEl = document.getElementById('results-container');
let timer = document.getElementById('countdown');
let timeLeft = 120;
let quizEnd = false;
let currentQuestion = 0;

const quizQuestions = [
    {
        question: "The condtion of an if/else statement is enclosed in ____ ?",
        answers: {
            a: "Curly Brackets {}",
            b: "Parenthesis ()",
            c: "Square Brackets []"
        },
        correctAnswer: "b"
    },
    {
        question: "Which syntax creates single-line comments in JavaScript?",
        answers: {
            a: "//",
            b: "*/",
            c: "/*"
        },
        correctAnswer: "a"
    },
    {
        question: "Arrays in JavaScript can be used to store _______ ?",
        answers: {
            a: "Other arrays",
            b: "Strings",
            c: "Both"
        },
        correctAnswer: "c"
    },
    {
        question: "{let x = 14 % 2}; What will x evaluate to?",
        answers: {
            a: "7",
            b: "0",
            c: "28"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the INCORRECT way of declaring a variable?",
        answers: {
            a: "const age = 3",
            b: "let age += 3",
            c: "var age = '3'"
        },
        correctAnswer: "b"
    }
]

function getQuestion(q) {
    let questionEl = document.createElement("div");
    questionEl.className = "question-answer";
    questionEl.innerHTML = 
        `<h3 class="question">${quizQuestions[q].question}</h3>`;
    quizDivEl.appendChild(questionEl);

    // put answers for question on the page
    // option a
    let answerOption = document.createElement("div");
    answerOption.className = "answer-option";
    answerOption.innerHTML =
        `<label>
        <input type="radio" name="question0" value="a">
        ${quizQuestions[q].answers.a}`
        questionEl.appendChild(answerOption);

    // option b
    answerOption = document.createElement("div");
    answerOption.className = "answer-option";
    answerOption.innerHTML =
        `<label>
        <input type="radio" name="question0" value="b">
        ${quizQuestions[q].answers.b}`
        questionEl.appendChild(answerOption);

    // option c
    answerOption = document.createElement("div");
    answerOption.className = "answer-option";
    answerOption.innerHTML =
        `<label>
        <input type="radio" name="question0" value="c">
        ${quizQuestions[q].answers.c}`
        questionEl.appendChild(answerOption);
    
}

function clearDivs(el) {
    el.innerHTML = ``;
}

// when the start button is clicked
function startQuiz(){
    //put a question on the page.
    getQuestion(currentQuestion)

    //start timer.
    countdown();
}


function countdown() {
    
    let timeInterval = setInterval(function() {
        // if the remaining time is greater than 1
        if (quizEnded) {
            clearInterval(timeInterval);
            console.log("here");
        } else if (timeLeft > 0) {
            timer.innerHTML = timeLeft;
            // decrement time left by 1
            timeLeft --
        } else {
            clearInterval(timeInterval); 
            endQuiz();
        }
        // else if quiz is ended clear time interval
    }, 1000);
}
// once an answer is clicked the nextQuestion function runs
quizDivEl.addEventListener("click", nextQuestion);

function nextQuestion(){
    // let anAnswer = event.target.getElementsByClassName("answer-option");
    clearDivs(resultsDivEl)
    let userAnswer = event.target.value;
    console.log("userAnswer", userAnswer);

    if (userAnswer === quizQuestions[currentQuestion].correctAnswer) {

        resultsDivEl.innerHTML = `<h4>You got it right!</h4>`
        timeLeft = timeLeft + 5;
        
    } else {
        resultsDivEl.innerHTML = `<h4>Sorry! The correct answer is ${quizQuestions[currentQuestion].correctAnswer}!</h4>`
        timeLeft = timeLeft - 5;

    };

    clearDivs(quizDivEl);
    currentQuestion++;
    if(currentQuestion < quizQuestions.length)
        getQuestion(currentQuestion);
    else
        endQuiz();
}

function saveScore(score) {
      //store stuff in localStorage
      let storedScores = JSON.parse(localStorage.getItem("highscores")) || [];

      let initials = document.querySelector('[name="initials"]').value;
      console.log(initials);
      let user = {
          name: initials,
          score: score
      };

      storedScores.push(user);

      localStorage.setItem("highscores", JSON.stringify(storedScores));
}
  
//run this when the high score form is submitted.
function endQuiz(){
    quizEnded = true;
    clearDivs(resultsDivEl);
    // grab the time from the countdown div and set it to the score
    let score = timeLeft;
    resultsDivEl.innerHTML = `
    <h1> All Done!</h1>
    <p> Your final score is ${score}.</p>
    <form>
        <label for="initials">Enter your initials</label>
        <input type="text" id="initials" name="initials">
        <button type="button" onclick="saveScore(${score}); location.href='./highscores.html'">Submit</button>
    </form>`
}

// on click the quiz will start
startButton.addEventListener("click", startQuiz);

