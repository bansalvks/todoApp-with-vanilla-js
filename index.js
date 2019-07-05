/**
 * READ Arraylike Objects (e.g. localStorage, sessionStorage)
 * LocalStorage persists even after we close the tab. SessionStorage does not.
 */

let newTaskInput = null;
let addTaskButtonElement = null;
let todoListUl = null;

const todoService = new TodoServices();
const onTodoListDataChange = function() {};

todoService.addEventListener();

const addTaskButtonClicked = function(event) {
    console.log('Add New Task Button Clicked');

    const text = newTaskInput.value;
    const newTask = new TaskModel(text, false);

    todoService.add(newTask);
    // TodoUiService.renderTasks(todoListUl, [newTask]);
};

function DOMContentLoadedCallback(event) {
    addTaskButtonElement = document.getElementById("addTaskButton");
    newTaskInput = document.getElementById("newTaskInput");
    todoListUl = document.getElementById("todoListUl");

    addTaskButtonElement.addEventListener('click', addTaskButtonClicked);

    document.removeEventListener('DOMContentLoaded', DOMContentLoadedCallback);
}

document.addEventListener('DOMContentLoaded', DOMContentLoadedCallback);