let todoInput = document.querySelector(".todo-input")
let todoButton = document.querySelector(".todo-button")
let todoList = document.querySelector(".todo-list")
let filterOption = document.querySelector(".filter-todo")




todoButton.addEventListener("click" , addTodo)
todoList.addEventListener("click" , deleteCheck)
filterOption.addEventListener("click" , filterTodo)

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)


    const copleteButton = document.createElement("button")
    copleteButton.innerText = '✓'
    copleteButton.classList.add("btncomplete")
    todoDiv.appendChild(copleteButton)


    const trashButton = document.createElement("button")
    trashButton.innerText = '✕'
    trashButton.classList.add("trashButton")
    todoDiv.appendChild(trashButton) 

    todoList.appendChild(todoDiv)
    todoInput.value = ""
}

function deleteCheck(e){
    const item = e.target
    if(item.classList[0] === "trashButton"){
        const todo = item.parentElement
        todo.classList.add("fall")
        // todo.remove()
    }
    if(item.classList[0]  === "btncomplete") {
        const tado = item.parentElement
        tado.classList.toggle("completed")
    }
}
function filterTodo(e){
    let todos  = todoList.childNodes
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex"
                break;
                case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
        }
    })
}


















