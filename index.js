let newTaskInput = null;
let addTaskButton = null;
let todoListUl = null;

const todoService = new TodoServices();

const updateTaskHandler=function(id,text){
//console.log(event);
todoService.update(id,text);

}
const deleteTaskHandler=function(id){
    console.log(id);
    
todoService.remove(id)
}
const doneTaskHandler=function(id,isDone){
todoService.update(id,undefined,isDone)
}

const onTodoListDataChange = function () {
//console.log(TodoService.getAll());

const taskList=todoService.getAll()
console.log(taskList);
TodoUiService.renderTasks(todoListUl,taskList,updateTaskHandler,deleteTaskHandler,doneTaskHandler)

}

todoService.addEventListener(onTodoListDataChange)

const addTaskButtonClick = function (event) {
    console.log('button clicked')
    const text = newTaskInput.value;

    const newTask = new TaskModel(text, false);

    todoService.add(newTask)

    // TodoUiService.renderTasks(todoListUl, [newTask])
}


function DOMContentLoadedCallback() {
    addTaskButton = document.getElementById("addTaskButton");
    newTaskInput = document.getElementById('newTaskInput');
    todoListUl = document.getElementById('todoListUl');

    addTaskButton.addEventListener('click', addTaskButtonClick)
}




document.addEventListener('DOMContentLoaded', DOMContentLoadedCallback)
