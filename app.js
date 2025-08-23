// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Desarrollar una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

// Array donde almacenaré los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigos() {
    // Variable para almacenar el valor de entrada
    let capturarValorEntrada = document.getElementById("Amigo");

    // If para validar que haya escrito algo el usuario
    if(capturarValorEntrada === '' || capturarValorEntrada === null) {
        // Mostrar mensaje de error
        alert('error: Por favor, inserte un nombre.');
    } else {
        amigos.push(capturarValorEntrada);
    }
}

