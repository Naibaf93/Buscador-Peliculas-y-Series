// Variables
let selector = document.getElementById('miSelector');
let input = document.getElementById('miInput');
let boton = document.getElementById('miBoton');
let lista = document.getElementById('miListado');

let archivo = 'peliculas.json';

//Escuchadores de eventos
selector.addEventListener('change', cambiarArchivo);
selector.addEventListener('cambioModo', mensajeModo);
input.addEventListener('keydown', verificarInput);

// Funciones
function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('cambioModo');
}

function mensajeModo(){
    alert("el archivo de busqueda es " + selector.value);
}

function verificarInput(e){
    if((e.keyCode < 65 || e.keyCode > 90) && e.keyCode != 32 && e.keyCode != 8){
        e.preventDefault();
    }
}