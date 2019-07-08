const TodoUiService = {
    renderTasks: function (targetUL, tasks, updateCallback, deleteCallback, completedCallback) {

        targetUL.innerHTML = ""
        tasks.forEach(function(task){
            const editButton = document.createElement('button');

            const doneCheckBox = document.createElement('input');
            doneCheckBox.setAttribute("type", "checkbox")
            doneCheckBox.checked = task.isDone 

            const removeButton = document.createElement('button');

            editButton.innerHTML = "Edit"
            removeButton.innerHTML = "Remove"

            const inputElement = document.createElement('input');
            inputElement.value = task.text;

            const liElement = document.createElement('li');

            liElement.appendChild(doneCheckBox)
            liElement.appendChild(inputElement)
            liElement.appendChild(editButton)
            liElement.appendChild(removeButton)

            editButton.addEventListener('click', function(event){
                updateCallback(task.id, inputElement.value)
            }.bind(this))  // because of scoping. When button is clicked, the scope becomes button but we want the scope to be of parent's scope
            removeButton.addEventListener('click', function(event){
                deleteCallback(task.id)
            }.bind(this))
            doneCheckBox.addEventListener('click', function(event){
                completedCallback(task.id, doneCheckBox.checked)
            }.bind(this))

            targetUL.appendChild(liElement)
        });
    }
}