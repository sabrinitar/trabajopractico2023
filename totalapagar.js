const valorTicket = 200;

document.addEventListener("DOMContentLoaded", function () {

const cantidadTickets = document.getElementById("CantTickets");
const categoria = document.getElementById("categoria");
const totalApagar = document.getElementById("liveAlertPlaceholder");

document.getElementById("form_tickets").addEventListener("submit", function (comprafinal) {
    comprafinal.preventDefault();

    const cantidad = parseInt(cantidadTickets.value);
    const tipoCategoria = categoria.value;

    let descuento;
  if (tipoCategoria === "Estudiante") {
    descuento = 0.8; 
  } else if (tipoCategoria === "Trainee") {
    descuento = 0.5; 
  } else if (tipoCategoria === "Junior") {
    descuento = 0.15; 
  } 

  const total = cantidad * valorTicket * (1 - descuento);

  totalApagar.textContent = "Total a pagar $ " + total;
});
});