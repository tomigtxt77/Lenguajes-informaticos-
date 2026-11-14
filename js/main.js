// Modo claro / oscuro (se usa en todas las páginas)
const botonModo = document.getElementById("btn-modo");

// Aplica el modo y actualiza el texto del botón
function aplicarModo(claro) {
    document.body.classList.toggle("claro", claro);
    if (botonModo) {
        botonModo.textContent = claro ? "Modo oscuro" : "Modo claro";
    }
}

// Al cargar cada página se aplica el modo que quedó guardado
aplicarModo(localStorage.getItem("modo") === "claro");

if (botonModo) {
    botonModo.addEventListener("click", () => {
        const claro = !document.body.classList.contains("claro");
        // Se guarda la elección para que se mantenga al cambiar de página
        localStorage.setItem("modo", claro ? "claro" : "oscuro");
        aplicarModo(claro);
    });
}

// "Ver más / Ver menos" en las tarjetas de lugares.html
// En las otras páginas no hay botones, así que no hace nada
const botonesVerMas = document.querySelectorAll(".btn-ver-mas");

botonesVerMas.forEach((boton) => {
    boton.addEventListener("click", () => {
        // La lista de datos es el elemento justo antes del botón
        const datos = boton.previousElementSibling;
        const oculto = datos.classList.toggle("d-none");
        boton.textContent = oculto ? "Ver más" : "Ver menos";
        boton.setAttribute("aria-expanded", !oculto);
    });
});
