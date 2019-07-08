const TodoUiService = {

    renderTasks: function (targetUL, tasks, updateCallback, deleteCallback, completedCallback) {
        targetUL.innerHTML = ''
        tasks.forEach(function(task) {
            

            const editButton = document.createElement('button');

            const doneCheckbox = document.createElement('input');
            doneCheckbox.setAttribute('type', 'checkbox');
            
            const removeButton = document.createElement('button');

            editButton.innerHTML = "Edit"
            doneCheckbox.innerHTML = "Done"
            removeButton.innerHTML = "Remove"

            const inputElement = document.createElement('input');
            inputElement.value = task.text;
            doneCheckbox.checked = task.isDone;


            const liElement = document.createElement('li');

            liElement.appendChild(doneCheckbox)
            liElement.appendChild(inputElement)
            liElement.appendChild(editButton)
            liElement.appendChild(removeButton)
            
            editButton.addEventListener('click', function (){
                
                updateCallback(task.id, inputElement.value);
             }.bind(this))
            removeButton.addEventListener('click', function(){
                deleteCallback(task.id);
            }.bind(this))
            doneCheckbox.addEventListener('click', function(){
                console.log(doneCheckbox.checked)
                completedCallback(task.id, doneCheckbox.checked);
            }.bind(this))

            targetUL.appendChild(liElement)
        });
    }
}