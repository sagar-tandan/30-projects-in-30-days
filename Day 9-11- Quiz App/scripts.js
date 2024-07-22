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
    id: 2,
    question: "Which lamguage runs in web ?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
];

const question = document.getElementById("question");
const allAnswer = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const button = document.getElementById("btn");

const container = document.querySelector(".container");

let currentIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselect();
  question.innerText = quizData[currentIndex].question;
  a_text.innerText = quizData[currentIndex].a;
  b_text.innerText = quizData[currentIndex].b;
  c_text.innerText = quizData[currentIndex].c;
  d_text.innerText = quizData[currentIndex].d;
}

function deselect() {
  allAnswer.forEach((answer) => {
    answer.checked = false;
  });
}

function getSelected() {
  let selectedAnswer;
  allAnswer.forEach((answer) => {
    if (answer.checked) {
      selectedAnswer = answer.id;
    }
  });
  return selectedAnswer;
}

button.addEventListener("click", () => {
  const answer = getSelected();
  if (answer === quizData[currentIndex].correct) {
    score++;
  }
  currentIndex++;
  if (currentIndex >= quizData.length) {
    container.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly. </h2> 
    <button class = "btn" onClick ="location.reload()"> Reload </button>`;
  } else {
    loadQuiz();
  }
});
