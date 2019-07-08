const TodoUiService = {
    renderTasks: function(targetUL, tasks,
        updateCallback, deleteCallback,
        completedCallback){
            targetUL.innerHTML = '';
            tasks.forEach(task => {
           
            const editButton = document.createElement('button');
            const doneButton = document.createElement('button');
            const removeButton = document.createElement('button');

            editButton.innerHTML = "Edit"
            doneButton.innerHTML = "Done"
            removeButton.innerHTML = "Remove"

            const inputElement = document.createElement('input')
            inputElement.value= task.text
            const liElement = document.createElement('li')
            
            liElement.appendChild(inputElement)
            liElement.appendChild(editButton)
            liElement.appendChild(doneButton)
            liElement.appendChild(removeButton)

            targetUL.appendChild(liElement)
            });

        }
}