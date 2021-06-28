const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');
let task;
let taskTitle;
let taskRemove = document.getElementsByClassName('task__remove');
let todo = '';
let todoSave = [];

createElement();
getTasks();


function createElement() {
    let html = `<div class="task" style="display: none">
<div class="task__title"></div>
<a href="#" class="task__remove">&times;</a>
</div>`;
    let arrayTask = [];
    for (let i = 1; i < 6; i++) {
        arrayTask.push(html);
    }
    tasksList.insertAdjacentHTML('beforeend', arrayTask.join(''))
    task = document.getElementsByClassName('task');
}

function onInput(e) {
    todo = e.target.value;
};

function enterAdd(e) {
    if (e.key === 'Enter') {
        buttonAdd;
    };
};

function buttonAdd() {
    taskTitle = Array.from(document.getElementsByClassName('task__title'));
    let index = taskTitle.findIndex(e => e.textContent === '');
    if (todo.trim() !== '') {
        if (index >= 0) {
            taskTitle[index].innerText = todo;
            taskTitle[index].closest('.task').style = null;
            removeToDo();
            saveTasks();
        } else {
            createElement();
            taskTitle[index].innerText = todo;
            taskTitle[index].closest('.task').style = null;
            removeToDo();
        }
        input.value = '';
    };
};

function saveTasks() {
    todoSave.push(todo);
    localStorage.task = todoSave;
    console.log(todoSave);
};

function getTasks() {
    if (localStorage.task) {
        todoSave = localStorage.task.split(',');
        let arrayTask = [];
        taskTitle = Array.from(document.getElementsByClassName('task__title'));
        for (let i = 0; i < todoSave.length; i++) {

            arrayTask.push(task[0].cloneNode(true))
        }
        arrayTask.forEach((e, i) => {
            e.querySelector('.task__title').textContent = `${todoSave[i]}`;
            e.style = null;
            return tasksList.appendChild(e)
        });
        removeToDo();
    }
}

function removeToDo() {
    taskTitle = Array.from(document.getElementsByClassName('task__title'));
    todoSave = taskTitle.map(e => e.textContent);
    console.log(todoSave);
    taskRemove = document.getElementsByClassName('task__remove');
    for (let index of taskRemove) {
        index.addEventListener('click', () => {
            index.parentElement.style = 'display: none';
            index.parentElement.querySelector('.task__title').textContent = '';
            saveTasks();
        });
    };
}

input.addEventListener('input', onInput);
input.addEventListener('keyup', enterAdd);
tasksAdd.addEventListener('click', buttonAdd);