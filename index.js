let newTaskInput = null;
let addTaskButton = null;
let todoListUl = null;

const todoService = new TodoServices();

const updateTaskHandler = function(id,text){
    todoService.update(id,text)
}

const deleteTaskHandler = function(id){
    console.log('removed!')
    todoService.remove(id)
}

const doneTaskHandler = function(id, isDone){
    console.log(isDone)
    todoService.update(id, undefined, isDone)
}

const onTodoListDataChange = function () {
    const taskList = todoService.getAll()
    TodoUiService.renderTasks(todoListUl, taskList, updateTaskHandler, deleteTaskHandler, doneTaskHandler)
}

todoService.addEventListener(onTodoListDataChange)

const addTaskButtonClick = function (event) {
    console.log('button clicked')
    const text = newTaskInput.value;

    const newTask = new TaskModel(text, false);
3
    todoService.add(newTask)

    //TodoUiService.renderTasks(todoListUl, [newTask])
}


function DOMContentLoadedCallback() {
    addTaskButton = document.getElementById("addTaskButton");
    newTaskInput = document.getElementById('newTaskInput');
    todoListUl = document.getElementById('todoListUl');

    addTaskButton.addEventListener('click', addTaskButtonClick)
}




document.addEventListener('DOMContentLoaded', DOMContentLoadedCallback)
