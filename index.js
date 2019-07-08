let newTaskInput = null;
let addTaskButton = null;
let todoListUl = null;

const todoService = new TodoServices();

const updateTaskHandler = function(id,text){
    console.log(event)
    todoService.update(id,text)
}

const doneTaskHandler = function(id){
   todoService.remove(id)
}

const deleteTaskHandler = function(id,isDone){
    todoService.update(id,undefined,isDone)
}

const onTodoListDataChange = function () {
    const taskList = todoService.getAll()
    TodoUiService.renderTasks(todoListUl,taskList,updateTaskHandler,doneTaskHandler,deleteTaskHandler)
}

todoService.addEventListener(onTodoListDataChange)

const addTaskButtonClick = function (event) {
    console.log('button clicked')
    const text = newTaskInput.value;

    const newTask = new TaskModel(text, false);

    todoService.add(newTask)
    newTaskInput.value = ''

    //TodoUiService.renderTasks(todoListUl, [newTask])
}


function DOMContentLoadedCallback() {
    addTaskButton = document.getElementById("addTaskButton");
    newTaskInput = document.getElementById('newTaskInput');
    todoListUl = document.getElementById('todoListUl');

    addTaskButton.addEventListener('click', addTaskButtonClick)
}




document.addEventListener('DOMContentLoaded', DOMContentLoadedCallback)
