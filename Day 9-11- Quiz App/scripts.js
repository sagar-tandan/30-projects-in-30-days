const quizData = [
  {
    id: 1,
    question: "Which language runs in web browser ?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    id: 1,
    question: "Which lamguage runs in web browser ?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
];

const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const button = document.getElementById("btn");

let currentIndex = 0;

loadQuiz();

function loadQuiz() {
  question.innerText = quizData[0].question;
  a_text.innerText = quizData[0].a;
  b_text.innerText = quizData[0].b;
  c_text.innerText = quizData[0].c;
  d_text.innerText = quizData[0].d;
}
