
import { load, save } from './storage.js'

import { advanceItem, taskItem } from './components.js'

const todolists = [...document.querySelectorAll('.todolist')];
const $newTask = document.querySelector(".actions__new");
const $newtodo = document.querySelector(".newtodo");
const $newtodoTitle = document.querySelector(".newtodo__title");

loadAppData();

function loadAppData() {
    const task = load();
    todolists[0].innerHTML = task.reduce((acum, item) => {
        return acum + taskItem(item)
    }, "");
}


$newTask.addEventListener("click", function () {
    const value = $newtodo.classList.toggle("newtodo--show");
    if (!value) {
        const task = load();
        const newtask = {};
        newtask.title = $newtodoTitle.textContent;
        newtask.id = (new Date()).getTime();
        save([...task, newtask])
        loadAppData();
    }
})


