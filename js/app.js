// Variables
let selector = document.getElementById('miSelector');
let input = document.getElementById('miInput');
let boton = document.getElementById('miBoton');
let lista = document.getElementById('miListado');

let archivo = 'peliculas.json';

//Escuchadores de eventos
selector.addEventListener('change', cambiarArchivo);
selector.addEventListener('cambioModo', mensajeModo);


// Funciones
function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('cambioModo');
}

function mensajeModo(){
    alert("el archivo de busqueda es " + selector.value);
}