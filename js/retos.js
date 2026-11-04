let retos = [
    {
        pregunta: "¿Qué número continúa la serie? 2 - 4 - 8 - 16 - ?",
        respuesta: 32
    },
    {
        pregunta: "¿Qué número continúa la serie? 1 - 4 - 9 - 16 - ?",
        respuesta: 25
    },
    {
        pregunta: "¿Qué número continúa la serie? 3 - 6 - 9 - 12 - ?",
        respuesta: 15
    },
    {
        pregunta: "¿Qué número continúa la serie? 1 - 1 - 2 - 3 - 5 - 8 - ?",
        respuesta: 13
    },
    {
        pregunta: "¿Qué número continúa la serie? 100 - 90 - 80 - 70 - ?",
        respuesta: 60
    }
];

let retoActual = 0;
let aciertosReto = 0;
let respondido = false;


function mostrarReto() {

    respondido = false;
    document.getElementById("preguntaReto").textContent = retos[retoActual].pregunta;
    document.getElementById("respuestaReto").value = "";
    document.getElementById("resultadoReto").textContent = "";
    document.getElementById("botonComprobar").style.display = "inline-block";
    document.getElementById("botonSiguiente").style.display = "none";
}


function comprobarReto() {

    if (respondido) {
        return;
    }

    let respuesta = document.getElementById("respuestaReto").value;

    if (respuesta === "") {
        document.getElementById("resultadoReto").textContent =
            "Introduce una respuesta.";
        return;
    }

    if (Number(respuesta) === retos[retoActual].respuesta) {

        aciertosReto++;
        respondido = true;

        document.getElementById("resultadoReto").textContent =
            "¡Correcto! Muy bien.";

        document.getElementById("aciertosReto").textContent =
            aciertosReto;

        document.getElementById("botonSiguiente").style.display =
            "inline-block";

        document.getElementById("botonComprobar").style.display =
            "none";

    } else {

        document.getElementById("resultadoReto").textContent =
            "No es correcto. ¡Inténtalo de nuevo!";
    }
}


function siguienteReto() {

    retoActual++;

    if (retoActual >= retos.length) {

        document.getElementById("preguntaReto").textContent =
            "¡Has terminado todos los desafíos!";

        document.getElementById("resultadoReto").textContent =
            "Tu puntuación final es: " + aciertosReto +
            " de " + retos.length + " aciertos.";

        document.getElementById("respuestaReto").style.display = "none";
        document.getElementById("botonComprobar").style.display = "none";
        document.getElementById("botonSiguiente").style.display = "none";
        document.getElementById("botonReiniciar").style.display = "inline-block";

        return;
    }

    mostrarReto();
}


function reiniciarRetos() {

    retoActual = 0;
    aciertosReto = 0;

    document.getElementById("aciertosReto").textContent = 0;

    document.getElementById("respuestaReto").style.display = "block";
    document.getElementById("botonReiniciar").style.display = "none";

    mostrarReto();
}

mostrarReto();