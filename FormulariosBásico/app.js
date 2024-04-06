document.getElementById("formulario").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
  
    if (nombre === "" || email === "") {
        alert("Por favor, completa todos los campos.");
        event.preventDefault();
    }
});

$(document).ready(function() {
    var ciudades = ["Barcelona", "Madrid", "Valencia", "Sevilla", "Bilbao"];
    $("#ciudad").autocomplete({
        source: ciudades
    });
});
