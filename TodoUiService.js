const TodoUiService = {
    renderTasks: function (targetUL, tasks, updateCallback, deleteCallback, completedCallback) {
<<<<<<< HEAD
       targetUL.innerHTML=""
        tasks.forEach(task => {
            const editButton = document.createElement('button');

            const doneCheck = document.createElement('input');
            doneCheck.setAttribute("type" , "checkbox")
            doneCheck.checked=task.isDone
=======
        targetUL.innerHTML = '';

        tasks.forEach(function (task) {

            const editButton = document.createElement('button');

            const doneCheckbox = document.createElement('input');
            doneCheckbox.setAttribute("type", "checkbox")
            doneCheckbox.checked = task.isDone;
>>>>>>> 722e99665408178e2f961b4022b1ddd0cdebcb8f

            const removeButton = document.createElement('button');

            editButton.innerHTML = "Edit"
            removeButton.innerHTML = "Remove"

            const inputElement = document.createElement('input');
            inputElement.value = task.text;

            const liElement = document.createElement('li');

            liElement.appendChild(doneCheckbox)
            liElement.appendChild(inputElement)
            liElement.appendChild(editButton)
<<<<<<< HEAD
            liElement.appendChild(doneCheck)
            liElement.appendChild(removeButton)

            editButton.addEventListener('click',function(event){
                updateCallback(task.id,inputElement.value)
            }.bind(this));
            removeButton.addEventListener('click',function(event){
                deleteCallback(task.id)}.bind(this));
            doneCheck.addEventListener('change',function(event){
                completedCallback(task.id,doneCheck.checked)}.bind(this));
=======
            liElement.appendChild(removeButton)

            editButton.addEventListener('click', function () {
                updateCallback(task.id, inputElement.value)
            }.bind(this));
            removeButton.addEventListener('click', function () {
                deleteCallback(task.id)
            }.bind(this));
            doneCheckbox.addEventListener('change', function () {
                completedCallback(task.id, doneCheckbox.checked)
            }.bind(this));
>>>>>>> 722e99665408178e2f961b4022b1ddd0cdebcb8f

            targetUL.appendChild(liElement)
        });
    }
}