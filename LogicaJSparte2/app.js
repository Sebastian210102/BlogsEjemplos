// Solicitar al usuario que ingrese su edad
let edad = prompt("Por favor, ingresa tu año de nacimiento:");

// Convertir su edad a un numero entero
edad = parseInt(edad);

// Verificar si el usuario es mayor o menor de edad
if (edad >= 18) {
    // Si la edad es mayor o igual a 18, el usuario es mayor de edad
    alert("¡Eres mayor de edad!");
} else {
    // Si la edad es menor a 18, el usuario es menor de edad
    alert("Eres menor de edad. ¡Tienes que esperar un poco más!");
}
