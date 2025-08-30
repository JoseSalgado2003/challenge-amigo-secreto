// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Desarrollar una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

// Array donde almacenaré los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigos() {
    // Variable para almacenar el valor de entrada
    let capturarValorEntrada = document.querySelector("#amigo");

    // Validamos la entrada
    if(capturarValorEntrada.value.trim() === '' || capturarValorEntrada.value.trim() === null) {
        // Sino hay nada escrito mostrar mensaje de error
        alert('error: Por favor, inserte un nombre.');
    } else {
        // Caso contrario agregamos lo que haya escrito el usuario
        amigos.push(capturarValorEntrada.value);

        // Llamamos a la función para actualizar la lista en el HTML
        actualizarListaDeAmigos();
    }
        // Restablecemos el campo de texto a una cadena vacía
        document.querySelector("#amigo").value = '';
}

// Crear función para actualizar la lista de amigos
function actualizarListaDeAmigos() {
    // Crear variable lista para luego obtener el elemento de la lista
    let lista = document.querySelector("#listaAmigos");

    // Limpiamos la lista existente
    lista.innerHTML = "";

    // Recorremos el array
    for(let i = 0; i < amigos.length; i++) {
        // Crear elementos de la lista <li>
        crearElementoListaLi = document.createElement('li');

        // Asignar el nombre del amigo
        crearElementoListaLi.textContent = amigos[i];

        // Añadir el <li> ya completo a la lista <ul> en el HTML
        lista.append(crearElementoListaLi);
    }
}

// Crear función para sortear Amigos
function sortearAmigo() {
    // Crear variable para almacenar los amigos puestos en el array amigos
    let resultadoElemento = document.getElementById("resultado");


    // Validar que el array no esté vacío
    if (amigos.length === 0) {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultadoElemento.innerHTML = `¡El amigo sorteado es: ${amigoSorteado}! 🎉`;
}