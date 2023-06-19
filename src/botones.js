const buttonCreate = document.querySelector('#button-create');
const cancelButton = document.querySelector('#cancelarTodo');

const buttonTodo = document.getElementById("addTodo");

const titleList = document.querySelector('#title1');
const titleList2 = document.querySelector('#title2');
const listaTodo = document.querySelector("listTodo2");
let isTitleListVisible = true;

const textArea = document.querySelector(".createTodo");

buttonCreate.addEventListener('click', function() {
  if (isTitleListVisible) {
    titleList.classList.add('close');
    titleList2.classList.remove('close');
    isTitleListVisible = false;
  } else {
    titleList2.classList.add('close');
    titleList.classList.remove('close');
    isTitleListVisible = true;
    textArea.value = ""; // borramos el contenido del textArea
    cardName.textContent = nombreOriginal;
  }
});

cancelButton.addEventListener('click', function(event) {
  event.preventDefault();
  titleList2.classList.add('close');
  titleList.classList.remove('close');
  isTitleListVisible = true;
  textArea.value = ""; // borramos el contenido del textArea
});

// buttonTodo.addEventListener("click", function(event) {
//   event.preventDefault(); // detener el comportamiento predeterminado
//   titleList.classList.add('close');
//   titleList2.classList.add('close');
//   listaTodo.classList.remove('close');
// });