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

    function INIT(){
        for(const item of tasks.current){
            createItem(item);
        }
        for(const item of tasks.done){
            createItem(item);
        }
        allTasks.innerHTML = tasks.allTasks;
        doneTasks.innerHTML = tasks.doneTasks;
    }

    INIT();


    function createItem(el) {
        let item = document.createElement('li'),
            remove = document.createElement('div'),
            text = document.createElement('span');
        remove.classList.add('app__list-remove');
        remove.addEventListener('click', function () {
            removeTask(this);
        });
        text.classList.add('app__list-text');
        text.addEventListener('click', function () {
            doneTask(this);
        });
        switch (el.taskState) {
            case 'done':
                item.classList.add('app__list-item', 'app__list-item--done');
                break;
            default:
                item.classList.add('app__list-item');
        }
        item.id = el.taskId;
        text.innerHTML = el.taskContent;
        item.appendChild(text);
        item.appendChild(remove);
        tasksList.appendChild(item);
    }

    function doneTask(el) {
        //создать 3 переменные, первая elem которая будет хранить родитель елемента который к нам пришёл
        //вторая переменная elemId хранит айдишник(id) этого элемента 
        //третья переменная elemState булевую переменную(true/false) которая проверяет наличие класса у элемента app__list-item--done

        //создате переменную itemsRemove,itemsAdd
        //положить в них с помощью проверки значения elemState (if) если выполняется то task.done и task.current соответственно
        //а если ложь (блок else) то положить tasks.current и task.done соответсвенно (то есть наоборот от предыдущего)
        
        //для элемента нужно удалить класс app__list-item--done с помощью функции toggle
        //написать цикл for each который будет итерироватся переменной [index, item] по itemsRemove.entries()
        //внутри цикла сделать проверку если item.taskId не ровняется (!==) переменной elemId (которую мы объявили выше) то перейти на следующую итерацию цикла
        //в следующей строчке внутри цикла нужно в itemsAdd добавить с помощью push элемент item
        //так же внутри цикла добавить в следующей строчке вырезание значений из itemsRemove с помощью splice от index до 1
        //ну и последняя строчка уже вне цикла это обновление отображения с помощью добавления объекту doneTasks в свойство innerHTML массива выполненых задач(doneTasks)
    }

    function removeTask(el) {
        let removeEl = el.parentNode,
            removeElId = removeEl.id,
            removeElState = removeEl.classList.contains('app__list-item--done');

        removeEl.remove();
        const items = removeElState ? tasks.done : tasks.current;
        for (const [index, item] of items.entries()) {
            if (item.taskId !== removeElId) continue;
            items.splice(index, 1);
        }
        allTasks.innerHTML = tasks.allTasks;
        doneTasks.innerHTML = tasks.doneTasks;
    }

    function addTasks(str) {
        let elem = {
            taskId: doId(),
            taskContent: str,
            taskState: "current"
        };
        tasks.current.push(elem);
        createItem(elem);
        allTasks.innerHTML = tasks.allTasks;
    }

    function doId() {
        return Math.random().toString(36).substr(2, 16);
    }

    addNewTaskField.addEventListener('keyup',function (e) {
        if(e.keyCode === 13) {
            addTasks(this.value);
            this.value = "";
        }
    })
    
})();

