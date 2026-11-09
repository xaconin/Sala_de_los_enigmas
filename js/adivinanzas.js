// Lista de adivinanzas y sus respuestas
let adivinanzas = [
    {
        pregunta: "Tengo agujas y no se coser, tengo numeros y no se leer. ¿Que soy?",
        respuesta: "reloj"
    },
    {
        pregunta: "Cuanto mas me quitas, mas grande me hago. ¿Que soy?",
        respuesta: "agujero"
    },
    {
        pregunta: "Tiene dientes y no come, tiene cabeza y no es persona. ¿Que es?",
        respuesta: "ajo"
    },
    {
        pregunta: "Vuelo sin alas, lloro sin ojos. ¿Que soy?",
        respuesta: "nube"
    }
];

// Funcion para normalizar las respuestas, todo a mayusculas y eliminamos acentos
function normalizarTexto(texto) {

    return texto.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}

// Variables del juego
let adivinanzaActual = 0;
let aciertos = 0;
let respondida = false;

// Mostrar una adivinanza
function mostrarAdivinanza() {

    respondida = false;

    document.getElementById("pregunta").textContent =
        adivinanzas[adivinanzaActual].pregunta;

    document.getElementById("respuesta").value = "";
    document.getElementById("resultadoAdivinanza").textContent = "";
}

// Comprobar la respuesta
function comprobarAdivinanza() {

    if (respondida) {
        return;
    }

    let respuestaUsuario =
        document.getElementById("respuesta").value;

    let respuestaCorrecta =
        adivinanzas[adivinanzaActual].respuesta;

    if (normalizarTexto(respuestaUsuario) ===
        normalizarTexto(respuestaCorrecta)) {

        aciertos++;
        respondida = true;

        document.getElementById("resultadoAdivinanza").textContent =
            "¡Correcto! Has acertado.";

        document.getElementById("aciertos").textContent = aciertos;

    } else {

        document.getElementById("resultadoAdivinanza").textContent =
            "Incorrecto. Inténtalo de nuevo.";

    }
}

// Pasar a la siguiente adivinanza
function siguienteAdivinanza() {
    adivinanzaActual++;

    if (adivinanzaActual >= adivinanzas.length) {
        document.getElementById("pregunta").textContent =
            "¡Has terminado todas las adivinanzas!";
        document.getElementById("respuesta").style.display = "none";
        document.getElementById("resultadoAdivinanza").textContent =
            "Tu puntuación final es: " + aciertos + " aciertos.";
        document.getElementById("botonComprobar").style.display = "none";
        document.getElementById("botonSiguiente").textContent = "Volver a empezar";
        document.getElementById("botonSiguiente").onclick=reiniciar;
        return;
    }

    mostrarAdivinanza();
}

function reiniciar(){
    adivinanzaActual = 0;
     aciertos = 0;
    respondida = false;
    document.getElementById("botonSiguiente").textContent = "Siguiente adivinanza";
    document.getElementById("botonSiguiente").onclick = siguienteAdivinanza;
    document.getElementById("respuesta").style.display = "block";
    document.getElementById("botonComprobar").style.display = "inline-block";
    document.getElementById("aciertos").textContent = aciertos;

    mostrarAdivinanza();
}

// Iniciar el juego
mostrarAdivinanza();