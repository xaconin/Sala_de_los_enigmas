
// Variables para guardar la puntuacion
let respondida = false;
let aciertos = 0;
let errores = 0;
let solucionCorrecta = 0;

// Funcion para generar una operacion aleatoria.Primero generamos un numero entre 0 y 1 eliminamos los decimales
function generarOperacion() {

    respondida = false;

    let numero1 = Math.floor(Math.random() * 10) + 1;
    let numero2 = Math.floor(Math.random() * 10) + 1;
    
    //Generamos un numero aleatorio del 1-4 equivalente a las 4 operaciones 
    let operacion = Math.floor(Math.random() * 4);
    let simbolo = "";

    // Elegir el tipo de operacion en funcion de variable operacion
    switch (operacion) {

        case 0:
            simbolo = "+";
            solucionCorrecta = numero1 + numero2;
            break;

        case 1:
            simbolo = "-";

            // Evitar resultados negativos
            if (numero1 < numero2) {
                let temporal = numero1;
                numero1 = numero2;
                numero2 = temporal;
            }

            solucionCorrecta = numero1 - numero2;
            break;

        case 2:
            simbolo = "×";
            solucionCorrecta = numero1 * numero2;
            break;

        case 3:
            simbolo = "÷";

            // Crear una division exacta
            solucionCorrecta = numero1;
            numero1 = numero1 * numero2;
            break;
    }

    // Mostrar la operacion
    document.getElementById("operacion").textContent =
        numero1 + " " + simbolo + " " + numero2 + " = ?";

    // Limpiar el mensaje anterior
    document.getElementById("resultado").textContent = "";

    // Generar respuestas
    let respuestas = [solucionCorrecta];

    while (respuestas.length < 4) {

        let respuesta = Math.floor(Math.random() * (Math.max(20, solucionCorrecta + 10))) + 1;

        if (!respuestas.includes(respuesta)) {
            respuestas.push(respuesta);
        }
    }

    // Mezclar las respuestas
    respuestas.sort(() => Math.random() - 0.5);

    // Mostrar las respuestas
    let zonaRespuestas = document.getElementById("respuestas");

    zonaRespuestas.innerHTML = "";

    respuestas.forEach(function(respuesta) {

        let boton = document.createElement("button");

        boton.textContent = respuesta;
        boton.className = "btn btn-outline-primary";

        boton.onclick = function() {
            comprobarRespuesta(respuesta);
        };

        zonaRespuestas.appendChild(boton);

    });

}
document.getElementById("resultado").textContent = "";

function comprobarRespuesta(respuesta) {

    // Evitar responder varias veces
    if (respondida) {
        return;
    }

    respondida = true;

    let botones = document.querySelectorAll("#respuestas button");

    botones.forEach(function(boton) {
        boton.disabled = true;
    });

    if (respuesta === solucionCorrecta) {

        aciertos++;
        document.getElementById("resultado").textContent = "¡Correcto! Muy bien.";

    } else {

        errores++;
        document.getElementById("resultado").textContent =
            "Incorrecto. La respuesta era " + solucionCorrecta;

    }

    document.getElementById("aciertos").textContent = aciertos;
    document.getElementById("errores").textContent = errores;

    // Esperar antes de generar otra operacion
    setTimeout(function() {
        generarOperacion();
    }, 1200);

}

// Funcion para reiniciar la puntuacion
function reiniciarJuego() {

    aciertos = 0;
    errores = 0;

    document.getElementById("aciertos").textContent = aciertos;
    document.getElementById("errores").textContent = errores;

    generarOperacion();
}
// Iniciar el juego
generarOperacion();