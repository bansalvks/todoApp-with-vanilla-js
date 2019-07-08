// let newTaskInput = null
// let addTaskButton =null
// const buttonclick= function (event) {
//     console.log("button clicked")
//     const text = newTaskInput.value
//     const newTask = new TaskModel(text,false)
//     }

// function DOMContentLoadedCallback(){
//     const addTaskButtonElement = document.getElementById("addTaskButton")
//     addTaskButtonElement.addEventListener('click',buttonclick)
//     newTaskInput=document.getElementById("newTaskInput")

//     }

// document.addEventListener('DOMContentLoaded',DOMContentLoadedCallback)



let newTaskInput = null;
let addTaskButton = null;
let todoListUl = null;
const todoService = new TodoServices();

const onTodoListDataChange = function(){
    // console.log(todoService.getAll())
    const taskList = todoService.getAll()

    TodoUiService.renderTasks(todoListUl, taskList)
}

todoService.addEventListener(onTodoListDataChange)

const addTaskButtonClick = function (event){
    console.log("button clicked");
    const text = newTaskInput.value

    const newTask = new TaskModel(text, false);

    todoService.add(newTask)

    // TodoUiService.renderTasks(todoListUl,[newTask])
}
function DOMContentCallback(){
    addTaskButton = document.getElementById("addTaskButton");
    newTaskInput = document.getElementById("newTaskInput");
    todoListUl = document.getElementById("todoListUl");
    
    addTaskButton.addEventListener('click', addTaskButtonClick);
    // document.removeEventListener('DOMContentLoaded', DOMContentCallback)
}

document.addEventListener('DOMContentLoaded', DOMContentCallback)