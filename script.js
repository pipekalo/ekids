(function (){
    let tasks = {
        current: [{
            taskId: doId(),
            taskContent: "Task 1",
            taskState: "current"
        },{
            taskId: doId(),
            taskContent: "Task 2",
            taskState: "current"
        }],
        done:[{
            taskId: doId(),
            taskContent: "Task 3",
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
        return Math.random().toString(36).substr(2,16);
    }

    function INIT(){}
    function addTasks(el){}
    function removeTasks(el){}
    function createTasks(el){}
    function doneTasks(el){}
})();

