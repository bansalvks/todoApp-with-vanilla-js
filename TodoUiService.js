const TodoUiService = {
    renderTasks: function (targetUL, tasks, updateCallback, deleteCallback, completedCallback) {
        targetUL.innerHTML=''
        tasks.forEach(task => {
            const editButton = document.createElement('button');

            const doneCheckbox = document.createElement('input');
            doneCheckbox.setAttribute("type", "checkbox")
            doneCheckbox.checked = task.isDone;

            const removeButton = document.createElement('button');

            editButton.innerHTML = "Edit"
            doneCheckbox.innerHTML = "Done"
            removeButton.innerHTML = "Remove"

            const inputElement = document.createElement('input');
            inputElement.value = task.text;

            const liElement = document.createElement('li');

            liElement.appendChild(doneCheckbox)
            liElement.appendChild(inputElement)
            liElement.appendChild(editButton)
            liElement.appendChild(removeButton)

            editButton.addEventListener('click',function(event){
                updateCallback(task.id, inputElement.value)
            }.bind(this))

            removeButton.addEventListener('click',function(event){
                deleteCallback(task.id)
            }.bind(this))

            doneCheckbox.addEventListener('change', function () {
                completedCallback(task.id, doneCheckbox.checked)
            }.bind(this));

            targetUL.appendChild(liElement)
        });
    }
}