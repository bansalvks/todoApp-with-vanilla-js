/**
 * READ Arraylike Objects (e.g. localStorage, sessionStorage)
 * LocalStorage persists even after we close the tab. SessionStorage does not.
 */

let newTaskInput = null;
let addTaskButtonElement = null;
let todoListUl = null;

const todoService = new TodoServices();

const updateTaskHandler = function(id, text) {
    console.log(event);
    todoService.update(id, text);

}

const deleteTaskHandler = function(id) {
    todoService.remove(id);
}

const doneTaskHandler = function(id, isDone) {
    console.log(isDone);
    todoService.update(id, undefined, isDone);
}

const onTodoListDataChange = function() {
    const taskList = todoService.getAll();
    // console.log(taskList);
    TodoUiService.renderTasks(todoListUl, taskList, updateTaskHandler, deleteTaskHandler, doneTaskHandler);
};

todoService.addEventListener(onTodoListDataChange);

const addTaskButtonClicked = function(event) {
    console.log('Add New Task Button Clicked');

    const text = newTaskInput.value;
    const newTask = new TaskModel(text, false);

    todoService.add(newTask);

    newTaskInput.value = '';
};

function DOMContentLoadedCallback(event) {
    addTaskButtonElement = document.getElementById("addTaskButton");
    newTaskInput = document.getElementById("newTaskInput");
    todoListUl = document.getElementById("todoListUl");

    addTaskButtonElement.addEventListener('click', addTaskButtonClicked);
    onTodoListDataChange();

    document.removeEventListener('DOMContentLoaded', DOMContentLoadedCallback);
}

document.addEventListener('DOMContentLoaded', DOMContentLoadedCallback);


/**
 * Capturing: Event Fired from parent to child
 * Bubling: Event fired from child to parent
 * 
 * Stop propagation: stops the firing of events among children and parents
 * Stop propagation immediate: stops the firing of events even among siblings
 * 
 * Preventive Call: Prevent the redirection of link
 * 
 * Webpec, gulp: Task runners -- e.g. merge multiple files into one.
 */