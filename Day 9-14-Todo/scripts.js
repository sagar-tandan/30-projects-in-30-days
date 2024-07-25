const todoedit = document.querySelector(".todo-list");
const button = document.getElementById("btn");





let finaltodo = [];

button.addEventListener("click", () => {
  const currentTodo = todoedit.value.trim();
  if (currentTodo === "") {
    alert("Please enter the todo");
  } else {
    addTodo(currentTodo);
  }
});

function addTodo(todo) {
  finaltodo.push({ value: todo, checked: false });
  console.log(finaltodo);
}
