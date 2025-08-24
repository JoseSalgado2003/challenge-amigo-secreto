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
        document.getElementById("Amigo").value = '';
    }
}

function actualizarListaDeAmigos() {
    const amigos = ['Carlos', 'Ana', 'Luis', 'Sofía'];
    const lista = document.getElementById('listaAmigos');

    function crearListaAmigos(amigosArray, listaElemento) {
    // Limpiamos la lista existente
    listaElemento.innerHTML = '';

    // Recorremos el array y agregamos cada nombre
    amigosArray.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElemento.appendChild(li);
    });
    }
}

function sortearAmigos() {
    const amigos = ['Carlos', 'Ana', 'Luis', 'Sofía'];
    const resultadoElemento = document.getElementById('resultadoSorteo');

    // Validar que el array no esté vacío
    if (amigos.length === 0) {
        resultadoElemento.innerHTML = 'No hay amigos en la lista.';
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultadoElemento.innerHTML = `¡El amigo sorteado es: ${amigoSorteado}! 🎉`;
}