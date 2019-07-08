function TodoServices() {
    this.tasks = CommonUtility.parseJson(LocalStorageServices.GET(KeysConst.TODO_LIST)) || [];

    this.saveLocally = function(){
        LocalStorageServices.SET(KeysConst.TODO_LIST, CommonUtility.JsonToString(this.tasks))
    }

    this.add = function (task) {
        this.tasks.push(task);
        this.saveLocally();
        this.notify();
    };
    this.remove = function (id) {
        this.tasks = this.tasks.filter(function(task){
            return task.id !== id
        })
        this.saveLocally();
        this.notify();
    };
    this.update = function (id, text, isDone) {
        const targetTask = this.tasks.find(function(task){
            return task.id === id
        })
        targetTask.text = (text) ? text : targetTask.text //if we are getting text from parameter then update else leave as it is
        targetTask.isDone = (isDone !== undefined ) ? isDone : targetTask.isDone
        this.saveLocally();
        this.notify();
    };
    this.getAll = function () {
        return this.tasks;
    };


    this.subscribers = []; //array of functions
    this.addEventListener = function (callback) {
        this.subscribers.push(callback)
    };
    this.removeEventListener = function (callback) { };
    this.notify = function () {
        this.subscribers.forEach(subscriber => {
            subscriber();
        });
    }
}