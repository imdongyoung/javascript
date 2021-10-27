const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form Input");
const toDoList = document.getElementById("todo-list");

const TODOS = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

}

function paintToDo(NewTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = NewTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


