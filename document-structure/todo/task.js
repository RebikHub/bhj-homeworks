const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');
const task = document.querySelector('.task');
const taskRemove = document.getElementsByClassName('task__remove');
let todo = '';
getTasks();

function onInput(e) {
    todo = e.target.value;
};

function enterAdd(e) {
    if (e.key === 'Enter') {
        buttonAdd;
    };
};

function buttonAdd() {
    if (todo.trim() !== '') {
        let newTask = tasksList.appendChild(task.cloneNode(true));
        newTask.querySelector('.task__title').innerText = todo;
        (newTask.querySelector('.task__remove')).addEventListener('click', (e) => {
            e.target.parentElement.remove();
            e.target.remove();
            localStorage.removeItem('task')
        });
        saveTasks();
    };
};

function saveTasks() {
    let html = tasksList.innerHTML;
    localStorage.setItem('task', html);
}

function getTasks() {
    return tasksList.innerHTML = localStorage.getItem('task')
}

input.addEventListener('input', onInput);
input.addEventListener('keyup', enterAdd);
tasksAdd.addEventListener('click', buttonAdd);


for (let index of taskRemove) {
    index.addEventListener('click', () => {
        index.parentElement.remove();
        index.remove();
        saveTasks();
    });
}