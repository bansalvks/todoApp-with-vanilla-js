
let newTaskInput=null
let todoListUl=null
const todoService=new TodoServices()

const addTaskButtonClick=function(event){
    console.log("Button Clicked")
    const text=newTaskInput.value
    const newTask=new TaskModel(text,false);
    TodoUiService.renderTasks(todoListUl,[newTask])
}



function DOMContentLoadedCallBack(){
    const addTaskButton=document.getElementById('addTaskButton')
    newTaskInput=document.getElementById("newTaskInput")
    console.log(addTaskButton)
    todoListUl=document.getElementById('todoListUl')
    addTaskButton.addEventListener('click', addTaskButtonClick);

}



document.addEventListener('DOMContentLoaded',DOMContentLoadedCallBack)