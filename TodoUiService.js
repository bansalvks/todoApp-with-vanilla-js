const TodoUiService = {
    renderTasks: function (targetUL, tasks, updateCallback, deleteCallback, completedCallback) {

        targetUL.innerHTML = '';

        tasks.forEach(function(task){
            const editButton = document.createElement('button');

            const doneCheckBox = document.createElement('input');
            doneCheckBox.setAttribute("type", "checkbox");
            doneCheckBox.checked = task.isDone

            const removeButton = document.createElement('button');

            editButton.innerHTML = "Edit"
            doneCheckBox.innerHTML = "Done"
            removeButton.innerHTML = "Remove"

            const inputElement = document.createElement('input');
            inputElement.value = task.text;

            const liElement = document.createElement('li');

            liElement.appendChild(doneCheckBox)
            liElement.appendChild(inputElement)   
            liElement.appendChild(editButton) 
            liElement.appendChild(removeButton)

            editButton.addEventListener('click',function(){
                updateCallback(task.id, inputElement.value)
            }.bind(this));
            doneCheckBox.addEventListener('click', function(){
                completedCallback(task.id, doneCheckBox.checked)
            }.bind(this));
            removeButton.addEventListener('click', function(){
                deleteCallback(task.id);
            }.bind(this));

            targetUL.appendChild(liElement)
        });
    }
}