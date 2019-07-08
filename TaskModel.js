function TaskModel(text,isDone){
    this.id=new Date().getTime()
    this.text=text
    this.isDone=isDone

}