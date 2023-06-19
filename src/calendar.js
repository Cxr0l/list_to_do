const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// obteniendo la nueva fecha, el año actual y el mes
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// almacenando el nombre completo de todos los meses en un arreglo
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
              "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // obteniendo el primer día del mes
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // obteniendo la última fecha del mes
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // obteniendo el último día del mes
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // obteniendo la última fecha del mes anterior
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creando li de los últimos días del mes anterior
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creando li de todos los días del mes actual
        // agregando la clase "active" al li si el día actual, mes y año coinciden
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creando li de los primeros días del siguiente mes
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // pasando el mes y año actual como texto para currentDate
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // obteniendo los íconos previo y siguiente
    icon.addEventListener("click", () => { // agregando evento de clic en ambos íconos
        // si el ícono clickeado es el ícono anterior, se decrementa el mes actual en 1, de lo contrario se incrementa en 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // si el mes actual es menor que 0 o mayor que 11
            // se crea una nueva fecha con el año y mes actual y se pasa como valor de fecha
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // actualizando el año actual con el año de la nueva fecha
            currMonth = date.getMonth(); // actualizando el mes actual con el mes de la nueva fecha
        } else {
            date = new Date(); // pasa la fecha actual como valor de fecha
        }
        renderCalendar(); // llamando a la función renderCalendar
    });
});