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

const updateTaskHandler = function(id, text){
    // console.log(id, text)
    todoService.update(id, text)
}

const deleteTaskHandler = function(id){
    todoService.remove(id)
}

const doneTaskHandler = function(id, isDone){
    todoService.update(id, undefined, isDone)
}

const onTodoListDataChange = function(){
    // console.log(todoService.getAll())
    const taskList = todoService.getAll()

    TodoUiService.renderTasks(todoListUl, taskList, updateTaskHandler, deleteTaskHandler, doneTaskHandler)
}

todoService.addEventListener(onTodoListDataChange)

const addTaskButtonClick = function (event){
    console.log("button clicked");
    const text = newTaskInput.value

    const newTask = new TaskModel(text, false);

    todoService.add(newTask)

    newTaskInput.value = '';

    // TodoUiService.renderTasks(todoListUl,[newTask])
}
function DOMContentCallback(){
    addTaskButton = document.getElementById("addTaskButton");
    newTaskInput = document.getElementById("newTaskInput");
    todoListUl = document.getElementById("todoListUl");
    
    addTaskButton.addEventListener('click', addTaskButtonClick);
    // document.removeEventListener('DOMContentLoaded', DOMContentCallback)
    onTodoListDataChange();
}

document.addEventListener('DOMContentLoaded', DOMContentCallback)