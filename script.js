(function (){
    let tasks = {
        current: [{
            taskId: doId(),
            taskContent: "Task 1",
            taskState: "current"
        },{
            taskId: doId(),
            taskContent: "Task 1",
            taskState: "current"
        }],
        done:[{
            taskId: doId(),
            taskContent: "Task 1",
            taskState: "current"
        }],
        get allTasks(){
            return this.current.length + this.done.length
        },
        get doneTasks(){
            return this.done.length
        }
    },
    taskList = document.getElementById("app__list"),
    allTasks = document.getElementById("js-all-tasks"),
    doneTasks = document.getElementById("js-done-tasks"),
    addNewTaskField = document.getElementById("app__task-new");

    function doId(){
        //метод "заглушка" для написания функции
		
    }
})();