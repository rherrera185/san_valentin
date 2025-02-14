// Mensajes especiales
const mensajes = [
    "Eres lo mejor que me ha pasado. 💖",
    "Gracias por hacerme tan feliz. 🌟",
    "Contigo, los dias son bonitos. 🥰",
    "Te amo CARIÑO. ❤️",
    "Eres la que me inspira en momentos dificiles. 🌹",
    "Gracias por ser mi compañera de vida. 🌸",
    "Eres mi sueño bonito. 🌠",
    "NO dejes de brillar, porque iluminas mi vida. ✨",
];

// Sorpresas
const sorpresas = [
    "¡Eres increíble! 🎉",
    "¡Gracias por estar siempre a mi lado! 🌈",
    "¡Eres mi persona favorita! 🥳",
    "¡Te amo más cada día! 💞",
    "¡Eres mi todo! 🌟",
];

// Botón de mensaje especial
document.getElementById("btnMensaje").addEventListener("click", function() {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    document.getElementById("mensajeEspecial").textContent = mensajeAleatorio;
    confetti(); // Efecto de confeti
});

// Botón de sorpresa
document.getElementById("btnSorpresa").addEventListener("click", function() {
    const sorpresaAleatoria = sorpresas[Math.floor(Math.random() * sorpresas.length)];
    document.getElementById("sorpresa").textContent = sorpresaAleatoria;
    confetti(); // Efecto de confeti
});

// Modo oscuro/claro
document.getElementById("btnModo").addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");
    const icono = document.querySelector("#btnModo i");
    if (document.body.classList.contains("modo-oscuro")) {
        icono.classList.remove("fa-moon");
        icono.classList.add("fa-sun");
        this.textContent = " Modo Claro";
    } else {
        icono.classList.remove("fa-sun");
        icono.classList.add("fa-moon");
        this.textContent = " Modo Oscuro";
    }
});

// Personalizar nombre
const nombre = prompt("Ingresa el nombre cariño:");
if (nombre) {
    document.getElementById("nombrePareja").textContent = nombre;
}