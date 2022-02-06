const questionsData = [
    {
        question: "What is the most used programming language in 2019?",
        a : "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "API means",
        a: "Application Programming Interface",
        b: "Authorized Partner Interface",
        c: "Automated Process Instructions",
        d: "Application Pointer Idle",
        correct: "a",
    },
    {
        question: "If function is marked as private",
        a: "You should not ever mark functions as private",
        b: "It is visible for everybody",
        c: "Nobody can use the function",
        d: "Only functions inside that object class can call it",
        correct: "d",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerElements = document.getElementsByName("answer");
const question_text = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const questionNumElement = document.getElementById("questionNum");
const questionLengthElement = document.getElementById("questionLength");
const errorElement = document.getElementById('error');
const questionLength = questionsData.length;

let currentQuiz = 0;
let score = 0;

getQuestion();

function getQuestion() {
    const currentQuestion = questionsData[currentQuiz];
    question_text.innerText = currentQuestion.question;
    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;
    questionNumElement.innerText = currentQuiz+1;
    questionLengthElement.innerText = questionLength;
}

function getSelection(){
    let answer = undefined;
    for(let i=0; i<answerElements.length; i++){
        if(answerElements[i].checked){
            answer = answerElements[i].id;
        }
    }
    console.log(answer);
    return answer;
}

function deleteSelect() {
    for(let i=0; i<answerElements.length; i++){
        answerElements[i].checked = false;
    }
}

function submit() {
    const answer = getSelection();
    if(answer === undefined){
        errorElement.innerText = "Please choose one of these options!";
        currentQuiz = currentQuiz;
    } else {
        if(answer === questionsData[currentQuiz].correct){
            score++;
        }
        errorElement.innerText = "";
        currentQuiz++;
    }

    if(currentQuiz < questionLength){
        getQuestion();
        deleteSelect();
    } else {
        quiz.innerHTML = `<p>Your score is ${score}/${questionLength}
        <button onclick="location.reload()">Reload</button>`;
        stopTimer();
    }
}