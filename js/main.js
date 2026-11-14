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
