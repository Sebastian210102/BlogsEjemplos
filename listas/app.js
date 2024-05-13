const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        cambiarColor();
    });
});

function cambiarColor() {
    const colores = ['#FF5733', '#33FF57', '#5733FF', '#FF3377', '#33A8FF'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}
