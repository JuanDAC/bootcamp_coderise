


export const advanceItem = ({ title, percentage }) => `
    <article class="advance__item">
        <figure class="advance__graph" style="--percentage: ${percentage}%;"></figure>
        <small class="advanced__title">${title}</small>
    </article>
`;


export const taskItem = ({ title, id }) => `
    <li class="todolist__item">
        <input type="checkbox" name="id_task" id="task-${id}" />
        <label for="task-${id}" class="todolist__content">
            <h2 class="todolist__title">${title}</h2>
            <span class="todolist__info">Mañana a las
                11:00pm</span>
        </label>
    </li>
`;