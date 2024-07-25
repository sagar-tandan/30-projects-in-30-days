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
      finaltodo.push({ id: 1, value: todo.value, checked: todo.checked });
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
  finaltodo.forEach((todo, index) => {
    const oneTodo = document.createElement("div");
    oneTodo.classList.add("oneTodo");
    const input1 = document.createElement("input");
    input1.id = "checkbox";
    input1.type = "checkbox";
    input1.checked = todo.checked;
    input1.addEventListener("change", () => changeCheckValue(index));
    oneTodo.appendChild(input1);
    const input2 = document.createElement("input");
    input2.id = "actualtodo";
    input2.type = "text";
    input2.value = todo.value;
    if (todo.checked) {
      input2.style.textDecoration = `line-through`;
    }
    input2.disabled = true;
    oneTodo.appendChild(input2);
    const image2 = document.createElement("img");
    image2.src = "  https://cdn-icons-png.flaticon.com/128/17328/17328580.png";
    image2.classList.add("delete");
    oneTodo.appendChild(image2);
    image2.addEventListener("click", () => editTodo(index, input2));
    const image = document.createElement("img");
    image.src = "https://cdn-icons-png.flaticon.com/128/6861/6861362.png";
    image.classList.add("delete");
    image.addEventListener("click", () => deleteTodo(index));
    oneTodo.appendChild(image);
    allTodo.appendChild(oneTodo);
    const horizontal = document.createElement("hr");
    allTodo.appendChild(horizontal);
  });
}

mapTodo();

function changeCheckValue(index) {
  const updatedTodo = [];
  finaltodo[index].checked = !finaltodo[index].checked;
  const completedTodo = finaltodo[index];
  const nowTodo = {
    value: completedTodo.value,
    checked: finaltodo[index].checked,
  };
  for (let i = 0; i < finaltodo.length; i++) {
    if (i == index) {
      updatedTodo.push(nowTodo);
    } else {
      updatedTodo.push(finaltodo[i]);
    }
  }

  uploadWholeTodo(updatedTodo);
}

function uploadWholeTodo(todo) {
  localStorage.setItem("TODO", JSON.stringify(todo));
  location.reload();
}

function deleteTodo(index) {
  finaltodo.splice(index, 1);
  uploadWholeTodo(finaltodo);
}

function editTodo(index, input) {
  input.disabled = false;
  input.focus();
  input.style.cursor = "text";
  input.style.outline = "none";

 
}
