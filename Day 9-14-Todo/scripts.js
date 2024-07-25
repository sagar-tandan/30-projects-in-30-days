const todoedit = document.querySelector(".todo-list");
const button = document.getElementById("btn");
const container = document.querySelector(".container");
// const allTodo = document.querySelector(".allTodo");
const allTodo = document.createElement("div");
allTodo.classList.add("allTodo");

let finaltodo = [];

getTodo();
mapTodo();

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
      finaltodo.push({ value: todo.value, checked: todo.checked });
    });
  }
}

function addTodo(todo) {
  finaltodo.push({ value: todo, checked: false });
  localStorage.setItem("TODO", JSON.stringify(finaltodo));
  todoedit.value = "";
  renderTodo();
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
    image2.src = "https://cdn-icons-png.flaticon.com/128/17328/17328580.png";
    image2.classList.add("delete");
    oneTodo.appendChild(image2);
    image2.addEventListener("click", () =>
      editTodo(index, input1, input2, image2)
    );
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
  renderTodo();
}

function deleteTodo(index) {
  finaltodo.splice(index, 1);
  uploadWholeTodo(finaltodo);
}

function editTodo(index, input1, input2, image2) {
  image2.src = "https://cdn-icons-png.flaticon.com/128/5234/5234222.png";
  input2.disabled = false;
  input2.style.textDecoration = "";
  input2.focus();
  image2.addEventListener("click", () => {
    const latestTodo = { value: input2.value, checked: false };
    const updatedTodo = [];
    for (let i = 0; i < finaltodo.length; i++) {
      if (i == index) {
        updatedTodo.push(latestTodo);
      } else {
        updatedTodo.push(finaltodo[i]);
      }
    }
    uploadWholeTodo(updatedTodo);
    image2.src = "https://cdn-icons-png.flaticon.com/128/17328/17328580.png";
    location.reload();
  });
}

function renderTodo() {
  allTodo.innerHTML = "";
  mapTodo();
}
