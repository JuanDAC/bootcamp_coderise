/* importar */
import { load, save } from './storage.js'
import { advanceItem, taskItem } from './components.js'

const todolists = [...document.querySelectorAll('.todolist')];
const $newTask = document.querySelector(".actions__new");
const $newtodo = document.querySelector(".newtodo");
const $newtodoTitle = document.querySelector(".newtodo__title");
const $newtodoDays = document.querySelector(".newtodo__days");
const $newtodoInAll = document.querySelector("#newtodo__inall");
const days = [...$newtodoDays.querySelectorAll('input[type="checkbox"]')];

const { textContent: newtodoTitleInitialContent } = $newtodoTitle;

loadAppData();

function loadAppData() {
    const tasks = load();
    const currentDay = (new Date()).getDay();
    const tomorrowDay = (currentDay + 1) % 7;
    const [$todayList, $tomorrowList] = todolists;

    const currentTodos = tasks.filter((task) =>
        Array.isArray(task.days)
        && task.days[currentDay]
    );

    const tomorrowTodos = tasks.filter((task) =>
        Array.isArray(task.days)
        && task.days[tomorrowDay]
    );

    $todayList.innerHTML = currentTodos.reduce((acum, task) => {
        return acum + taskItem(task)
    }, "");

    $tomorrowList.innerHTML = tomorrowTodos.reduce((acum, task) => {
        return acum + taskItem(task)
    }, "");
    
}

$newtodoTitle.addEventListener("click", () => $newtodoTitle.textContent = "");

$newtodoInAll.addEventListener("click", () => days.forEach(($day) => {
    $day.checked = $newtodoInAll.checked;
}));

$newTask.addEventListener("click", function () {
    const value = $newtodo.classList.toggle("newtodo--show");
    if (!value) {
        const tasks = load();
        const newtask = {};
        newtask.title = $newtodoTitle.textContent;
        $newtodoTitle.textContent = newtodoTitleInitialContent;
        newtask.id = (new Date()).getTime();
        newtask.days = days.map(($day) => $day.checked);
        tasks.push(newtask);
        save([...tasks])
        loadAppData();
    }
})


