"user strict";



let nombre;

let edad;

let alcancia = 0;

let coleccion = 0;

let seleccion = 0;

let valor_puntos = 10;

// aqui realizo un ejemplo de numeros no validos que van desde el 11 hasta el 30

let numeros_no_validos = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let SI = "si";

let preguntas = ["Longitud", "Masa", 
"Tiempo", "Superficie", 
"Volumen", "Temperatura", 
"Rapidez", "Densidad", 
"Energia", "Amperio"];

coleccion++;

do {
    nombre = prompt("Bienvenido querido participante ingresa por favor tu Nombre, sin espacios");

    edad = parseInt(prompt(nombre.toLowerCase() + " Ingresa por favor tu edad: "));

    let puntos_coleccion = 0;

    let preguntas_copia = preguntas.slice();

    for (let Juego = 1; Juego <= 10; Juego++) {

        do {
            var random = Math.floor(Math.random() * preguntas_copia.length);

            var preguntaSeleccionada = preguntas_copia[random];

            alert("\n***** TU PROBLEMA ES *****  \n" + preguntaSeleccionada);

            seleccion = parseInt(prompt("\n******************************" + "\nTU PROBLEMA ES: " + preguntaSeleccionada + 
            " ¿CUAL ES SU UNIDAD DE MEDIDA?" 
            + "\n1. Julius" 
            + "\n2. KG^3 (kilogramos)" 
            + "\n3. M/S (metros sobre segundos)" 
            + "\n4. °C (celsius)" 
            + "\n5. m^3 (metros al cubo)" 
            + "\n6. cm^2 (centimetros al cuadrado)" 
            + "\n7. S (segundos)" 
            + "\n8. KG (kilogramos)" 
            + "\n9. M (metros)" 
            + "\n10. Intensidad Corriente E (A)"));



            if (numeros_no_validos.includes(seleccion)) {

                alert ("<br>revisa lo digitado, No corresponde");

                document.write ("la repuesta dada no fue valida, ¯\_(ツ)_/¯");

            } else if (preguntaSeleccionada === "Amperio" && seleccion === 10) {

                puntos_coleccion += valor_puntos;

                alert("Respuesta correcta, puedes pasar a la siguiente pregunta, Tus puntos: " + puntos_coleccion);

                document.write("<br>Bien respondido Amperio");

            } else if (preguntaSeleccionada === "Longitud" && seleccion === 9) {

                puntos_coleccion += valor_puntos;

                alert("Respuesta correcta, puedes pasar a la siguiente pregunta, Tus puntos: " + puntos_coleccion);

                document.write("<br>Bien respondido Longitud");

            } else if (preguntaSeleccionada === "Masa" && seleccion === 8) {

                puntos_coleccion += valor_puntos;

                alert("Respuesta correcta, puedes pasar a la siguiente pregunta, Tus puntos: " + puntos_coleccion);

                document.write("<br>Bien respondido Masa");

            } else if (preguntaSeleccionada === "Tiempo" && seleccion === 7) {

                puntos_coleccion += valor_puntos;

                alert("Respuesta correcta, puedes pasar a la siguiente pregunta, Tus puntos: " + puntos_coleccion);

                document.write("<br>Bien respondido Tiempo");

            } else if (preguntaSeleccionada === "Superficie" && seleccion === 6) {

                puntos_coleccion += valor_puntos;

                alert("Respuesta correcta, puedes pasar a la siguiente pregunta, Tus puntos: " + puntos_coleccion);

                document.write("<br>Bien respondido Superficie");

            } else if (preguntaSeleccionada == "Volumen" && seleccion === 5) {

                puntos_coleccion += valor_puntos;

                alert("Respuesta correcta, puedes pasar a la siguiente pregunta, Tus puntos: " + puntos_coleccion);

                document.write("<br>Bien respondido Volumen");

            } else if (preguntaSeleccionada === "Temperatura" && seleccion === 4) {

                puntos_coleccion += valor_puntos;

                alert("Respuesta correcta, puedes pasar a la siguiente pregunta, Tus puntos: " + puntos_coleccion);

                document.write("<br>Bien respondido Temperatura");

            } else if (preguntaSeleccionada === "Rapidez" && seleccion === 3) {

                puntos_coleccion += valor_puntos;

                alert("Respuesta correcta, puedes pasar a la siguiente pregunta, Tus puntos: " + puntos_coleccion);

                document.write("<br>Bien respondido Rapidez");

            } else if (preguntaSeleccionada === "Densidad" && seleccion === 2) {

                puntos_coleccion += valor_puntos;

                alert("Respuesta correcta, puedes pasar a la siguiente pregunta, Tus puntos: " + puntos_coleccion);

                document.write("<br>Bien respondido Densidad");

            } else if (preguntaSeleccionada === "Energia" && seleccion === 1) {

                puntos_coleccion += valor_puntos;

                alert("Respuesta correcta, puedes pasar a la siguiente pregunta, Tus puntos: " + puntos_coleccion);

                document.write("<br>Bien respondido Energia");
            } 
            
            preguntas_copia.splice(random, 1); // Eliminar la pregunta seleccionada de la copia

        } while (isNaN(seleccion));
    }

    document.write("<br>nombre del participante: " + nombre + "<br>edad: " + edad + "<br>puntos logrados en el proyecto: " + puntos_coleccion);

    if (puntos_coleccion <= 49) {

        document.write ("<br>Muy bien, pero debes mejorar");
    
    } else if (puntos_coleccion >= 50 && puntos_coleccion < 79) {
    
        document.write ("<br>Estuviste a punto de lograrlo");
    
        document.write ("<br> tiraste buenos facts");
    
    } else if (puntos_coleccion >= 80 && puntos_coleccion <= 100) {
    
        document.write ("<br>Excelente has superado la prueba");
    
        document.write ("<br>sos un Fiera, Tifon, Mastodonte, Jefe, Titan, Master, Lider, vos > einstein");
    }
    
    SI = prompt("hay mas participantes para jugar:   (si/no)");

} while (SI.toLowerCase() === "si");

// == es abstracto, === es estricto

//  .tolowercase convierte todo a minisculas, para validar