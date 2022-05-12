
const KEY_APP = 'coderise';

export const load = () => {
    const key = `${KEY_APP}-tasks`;
    const valueInString = localStorage.getItem(key) ?? '[]';
    const value = JSON.parse(valueInString);
    return value;
}


export const save = (tasks = []) => {
    const key = `${KEY_APP}-tasks`;
    if (!Array.isArray(tasks))
        return null;
    const valueToString = JSON.stringify(tasks);
    localStorage.setItem(key, valueToString);
}

