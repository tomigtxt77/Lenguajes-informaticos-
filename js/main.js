// Modo claro / oscuro: la elección se guarda en localStorage
// para que se mantenga al cambiar de página
const botonModo = document.getElementById("btn-modo");

function aplicarModo(claro) {
    document.body.classList.toggle("claro", claro);
    if (botonModo) {
        botonModo.textContent = claro ? "🌙 Modo oscuro" : "☀ Modo claro";
    }
}

// Al cargar la página, se aplica el modo guardado
aplicarModo(localStorage.getItem("modo") === "claro");

if (botonModo) {
    botonModo.addEventListener("click", () => {
        const claro = !document.body.classList.contains("claro");
        localStorage.setItem("modo", claro ? "claro" : "oscuro");
        aplicarModo(claro);
    });
}
