let postButton = document.getElementById("todoPost");
let clearButton = document.getElementById("todoClear");
let deleteButton = document.getElementById("todoDelete");
let markButton = document.getElementById("todoMark");

clearButton.addEventListener("click", (evt) => {
    evt.preventDefault();

    let todos = document.getElementsByName("todo");

    todos.forEach(todo => {
        todo.checked = false;
    })
})
postButton.addEventListener("click", (evt) => {

    evt.preventDefault();
    let todo = document.getElementById("todoText").value;
    let list = document.getElementById("todoList");

    let currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + '<input type="checkbox" name="todo"/> ' + todo + '<br>'

    document.getElementById("todoText").value = "";

})

markButton.addEventListener("click", (evt) => {
    evt.preventDefault();

    let todos = document.getElementsByName("todo");

    todos.forEach(todo => {
        todo.checked = true;
    })
})

deleteButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    let list = document.getElementById("todoList");
    list.innerHTML = "";
})