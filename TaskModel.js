//View Object Model (VO)

function TaskModel(text, isDone) {
    this.id = new Date().getTime()
    this.text = text
    this.done = isDone
}