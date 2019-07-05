function TodoServices() {
    this.tasks = [];
    
    this.add = function(tasks) {
        this.tasks.push(task)
        this.notify();
    }; 
    
    this.remove = function(id) {
        this.notify();
    };
    
    this.update = function(id, text, isDone) {
        this.notify();
    };
    
    this.getAll = function() {
        return this.tasks;
    };
   
    this.subscribers = [];
    
    this.addEventListener = function(callback) {
        this.subscribers.push(callback)
    };
    
    this.removeEventListener = function(callback) {};
    
    this.notify = function() {
        this.subscribers.forEach(subscriber => {
            subscriber()
        });
    };
};


/**
 * READ Solid Principles
 */