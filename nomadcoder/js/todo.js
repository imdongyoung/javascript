const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form Input");
const toDoList = document.getElementById("todo-list");

function paintToDo(NewTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = NewTodo;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);