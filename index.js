let newTaskInput = null;
const todoService = new TodoService();
let todoListUl = null;
const updateTaskHandler = function (id,text) {
    console.log(event)
    todoService.update(id,text)
}
const deleteTaskHandler = function (id) {
    todoService.remove(id)
}
const doneTaskHandler = function (id,isDone) {
    console.log(isDone)
    todoService.update(id, undefined,isDone)
}
const onTodoListDataChange = function () {
    const taskList = todoService.getAll();
    console.log(todoService.getAll());
    TodoUiService.renderTasks(todoListUl, taskList, updateTaskHandler, deleteTaskHandler, doneTaskHandler);
}

//const onTodoList
todoService.addEventListener(onTodoListDataChange);

const addTaskFunction = function (event) {
    console.log("Task Updated")
    console.log(event)
    const text = newTaskInput.value
    const newTask = new TaskModel(text, false)
    todoService.add(newTask);
    // TodoUiService.renderTasks(todoListUl,[newTask])

}


function DOMContentLoadedCallback() {
    const addTaskButton = document.getElementById("addTaskButton")
    todoListUl = document.getElementById('todoListUl')
    newTaskInput = document.getElementById('newTaskInput')


    addTaskButton.addEventListener('click', addTaskFunction);
    document.removeEventListener('DOMContentLoaded', DOMContentLoadedCallback)

}

document.addEventListener('DOMContentLoaded', DOMContentLoadedCallback)