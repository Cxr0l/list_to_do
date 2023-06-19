const createTodo = document.getElementById("createTodo");
const addTodo = document.getElementById("addTodo");
const createName = document.getElementById("createName");
const todoList = [];

const doneTodo = () => {
    const valueInputTodo = createTodo.value;
    todoList.push(valueInputTodo);
    console.log(todoList);

    const valueInLocalStorage = JSON.stringify(todoList);
    console.log(valueInLocalStorage);

    window.localStorage.setItem("myListTodo", valueInLocalStorage);

    renderTodoList();
}

const getListTodo = window.localStorage.getItem("myListTodo");
const originalValue = JSON.parse(getListTodo) || [];

console.log(originalValue);

const renderTodoList = () => {
    createName.innerHTML = ''; // Limpiamos la lista para volver a renderizarla

    let lastElement = null;

    originalValue.forEach((value) => {
        const li = document.createElement("li");
        li.innerText = value;

        if (lastElement === null) {
            createName.appendChild(li);
        } else {
            lastElement.insertAdjacentElement("afterend", li);
        }

        lastElement = li;
    });
}

addTodo.addEventListener("click", doneTodo);

renderTodoList();
