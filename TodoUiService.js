const TodoUiService = {
    renderTasks: function (targetUL, tasks, updateCallback, deleteCallback, completedCallback) {
       targetUL.innerHTML=""
        tasks.forEach(task => {
            const editButton = document.createElement('button');

            const doneCheck = document.createElement('input');
            doneCheck.setAttribute("type" , "checkbox")
            doneCheck.checked=task.isDone

            const removeButton = document.createElement('button');

            editButton.innerHTML = "Edit"
            removeButton.innerHTML = "Remove"

            const inputElement = document.createElement('input');
            inputElement.value = task.text;

            const liElement = document.createElement('li');

            liElement.appendChild(inputElement)
            liElement.appendChild(editButton)
            liElement.appendChild(doneCheck)
            liElement.appendChild(removeButton)

            editButton.addEventListener('click',function(event){
                updateCallback(task.id,inputElement.value)
            }.bind(this));
            removeButton.addEventListener('click',function(event){
                deleteCallback(task.id)}.bind(this));
            doneCheck.addEventListener('change',function(event){
                completedCallback(task.id,doneCheck.checked)}.bind(this));

            targetUL.appendChild(liElement)
        });
    }
}