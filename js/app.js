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
boton.addEventListener('click', buscar);

// Funciones
function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('cambioModo');
    selector.dispatchEvent(evento);
}

function mensajeModo(){
    alert("el archivo de busqueda es " + selector.value);
}

function verificarInput(e){
    if((e.keyCode < 65 || e.keyCode > 90) && e.keyCode != 32 && e.keyCode != 8){
        e.preventDefault();
    }
}

function buscar(){
    lista.innerHTML = "";
    
    fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function(salida) {
        for(let item of salida.data){
            if(item.nombre.startsWith(input.value.toUpperCase())){
                let p = document.createElement('p');
                p.id = item.nombre;
                p.innerHTML = item.sinopsis;
                p.style.display = "none";

                let li = document.createElement('li');
                li.innerHTML = item.nombre;
                li.addEventListener('mouseover', function() {
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'block';
                });

                li.addEventListener('mouseout', function(){
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'none';
                });

                li.appendChild(p);
                lista.appendChild(li);
            }
        }
    })

    .catch(function(error) {
        console.log(error);
    })
}