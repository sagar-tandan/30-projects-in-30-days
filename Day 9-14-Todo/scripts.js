const todoedit = document.querySelector(".todo-list");
const button = document.getElementById("btn");
const container = document.querySelector(".container");
// const allTodo = document.querySelector(".allTodo");
const allTodo = document.createElement("div");
allTodo.classList.add("allTodo");

let finaltodo = [];

getTodo();

console.log(finaltodo);

button.addEventListener("click", () => {
  const currentTodo = todoedit.value.trim();
  if (currentTodo === "") {
    alert("Please enter the todo");
  } else {
    addTodo(currentTodo);
  }
});

function getTodo() {
  const allTodos = localStorage.getItem("TODO");
  if (allTodos) {
    container.appendChild(allTodo);
    const todoArray = JSON.parse(allTodos);
    todoArray.forEach((todo) => {
      finaltodo.push({id: 1, value: todo.value, checked: todo.checked });
    });
  }
}

function addTodo(todo) {
  finaltodo.push({ value: todo, checked: false });
  // console.log(finaltodo);
  localStorage.setItem("TODO", JSON.stringify(finaltodo));
  todoedit.value = "";
  location.reload();
}

function mapTodo() {
  finaltodo.forEach((todo) => {
    const oneTodo = document.createElement("div");
    oneTodo.classList.add("oneTodo");
    const input1 = document.createElement("input");
    input1.id = "checkbox";
    input1.type = "checkbox";
    oneTodo.appendChild(input1);
    const input2 = document.createElement("input");
    input2.id = "actualtodo";
    input2.type = "text";
    input2.value = todo.value;
    input2.disabled = true;
    oneTodo.appendChild(input2);
    const image = document.createElement("img");
    image.src = "https://cdn-icons-png.flaticon.com/128/6861/6861362.png";
    image.classList.add("delete");
    oneTodo.appendChild(image);
    allTodo.appendChild(oneTodo);
  });
}

mapTodo();
