const quizData = [
  {
    id: 1,
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    id: 2,
    question: "What does HTML stand for?",
    a: "Hyper Text Preprocessor",
    b: "Hyper Text Markup Language",
    c: "Hyper Text Multiple Language",
    d: "Hyper Tool Multi Language",
    correct: "b",
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    a: "Common Style Sheet",
    b: "Colorful Style Sheet",
    c: "Computer Style Sheet",
    d: "Cascading Style Sheet",
    correct: "d",
  },
  {
    id: 4,
    question: "What does SQL stand for?",
    a: "Stylish Question Language",
    b: "Stylesheet Query Language",
    c: "Statement Question Language",
    d: "Structured Query Language",
    correct: "d",
  },
  {
    id: 5,
    question: "What does PHP stand for?",
    a: "Hypertext Preprocessor",
    b: "Hypertext Programming",
    c: "Hypertext Preprogramming",
    d: "Hometext Preprocessor",
    correct: "a",
  },
  {
    id: 6,
    question: "What does XML stand for?",
    a: "eXtensible Markup Language",
    b: "eXecutable Multiple Language",
    c: "eXTra Multi-Program Language",
    d: "eXamine Multiple Language",
    correct: "a",
  },
  {
    id: 7,
    question: "Which language is used for web apps?",
    a: "PHP",
    b: "Python",
    c: "JavaScript",
    d: "All",
    correct: "d",
  },
  {
    id: 8,
    question: "How to include an external JavaScript file in HTML?",
    a: "<script href='filename.js'>",
    b: "<script name='filename.js'>",
    c: "<script src='filename.js'>",
    d: "<script file='filename.js'>",
    correct: "c",
  },
  {
    id: 9,
    question: "Which company developed JavaScript?",
    a: "Netscape",
    b: "Bell Labs",
    c: "Sun Microsystems",
    d: "IBM",
    correct: "a",
  },
  {
    id: 10,
    question: "Which symbol is used for comments in JavaScript?",
    a: "//",
    b: "/* */",
    c: "#",
    d: "<!-- -->",
    correct: "a",
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
