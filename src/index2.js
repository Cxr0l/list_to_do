const createTodo = document.getElementById("createTodo");
const addTodo = document.getElementById("addTodo");
const todoList = [];

const createName = document.getElementById("createName");

const doneTodo = () => {
    const valueInputTodo = createTodo.value;
    todoList.push(valueInputTodo);
    console.log(todoList);

    const valueInLocalStonrage = JSON.stringify(todoList);
    console.log(valueInLocalStonrage);

    window.localStorage.setItem("myListTodo", valueInLocalStonrage);
}

const getListTodo = window.localStorage.getItem("myListTodo");
const originalValue = JSON.parse(getListTodo);

console.log(originalValue);

//Manipular arreglos:
//Map recorrer arreglos sin tener que cambiar el arreglo, mutabilidad al arreglo original.

const listTodoMap = originalValue.map((values) =>{
    createName.innerHTML = values;
})

addTodo.addEventListener("click", doneTodo);

