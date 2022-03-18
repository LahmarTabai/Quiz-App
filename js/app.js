document.addEventListener("DOMContentLoaded", () => {

    const quizData = [
        {
            question: "What do you think of Tabai ? ",
            a: 'simple guy',
            b: 'Ugly',
            c: 'Mahboul Titaa',
            d: 'I dont know',
            correct : 'c'
        },

        {
            question: "Do you miss Tabai ?",
            a: 'No',
            b: 'I hate him',
            c: 'I miss him a lot',
            d: 'I dont Know',
            correct : 'c'
        },

        {
            question: "Do you believe that Tabai is in love with you ?",
            a: 'Maybe',
            b: 'I dont know',
            c: 'Yes he worships me',
            d: 'He is a lyer',
            correct : 'c' 
        },

        {
            question: "Do You Love Tabai ? (9oul l7a9) ",
            a: 'No',
            b: 'Ma Yhemmekch',
            c: 'I love him',
            d: '9ilni',
            correct : 'c' 
        },

        {
            question: "Do you wanna marry Tabai ?",
            a: 'No',
            b: 'Yeeees',
            c: 'mazel bekri',
            d: 'cha3ri a7rech',
            correct : 'b' 
        }
    ];

    
 
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else if (score == quizData.length) {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                                <br><p>7ata ana N7ebek Baaaarchaaaa ya rou7i 🎔</p>
                              <button onclick="location.reload()">Reload</button>`;
        } else if (score < quizData.length) {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                                <br><p>Mchamm3a 3awed...😡</p>
                              <button onclick="location.reload()">Reload</button>`;
        }
    }
});

});



/* } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                              <button onclick="location.reload()">Reload</button>`;
        } */