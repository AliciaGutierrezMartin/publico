
function informacion() {
    alert("Alicia Gutiérrez Martín, 1º DAM, Videojuegos retro");
}

// función para que cambie de color el cuadrito cuando el usuario pasa el ratón por encima
function pasaRaton(id) {
    document.getElementById(id).style.backgroundColor = "#76c442";
}

// función para que cuando el cursor del ratón ya no esté encima del cuadrito se ponga de color blanco
function quitaRaton(id) {
    document.getElementById(id).style.backgroundColor = "transparent";
}

const simbolo1='X';
const simbolo2='O';

let turno=0;
// posiciones válidas para que alguien gane
var ganar = [ [0,1,2],[3,4,5],[6,7,8], // horizontal
             [0,3,6],[1,4,7],[2,5,8], // vertical
             [0,4,8],[2,4,6] // diagonal
           ];

const cuadro_btn = document.querySelectorAll(".cuadrito");
// lo llamamos para que cuando carge la página de quién es el primer turno
actualizarEstado();

// funcion para mostrar de quién es el turno actual
function actualizarEstado () {
    let elem=document.getElementById('partida');
    // si es par pone un simbolo, en caso contrario el otro
    const simbolo=turno % 2 ? simbolo1 : simbolo2;
    // dentro del párrafo escribimos de quién es el turno
    elem.innerHTML='Turno de '+ simbolo;
}

function hacerClick(id) {
    let elem = document.getElementById('c' + id);
    if(elem.innerHTML !='') {
        return;
    }
    // si es par pone un simbolo, en caso contrario el otro
    const simbolo=turno % 2 ? simbolo1 : simbolo2;
    elem.innerHTML=simbolo;
    turno++;
    // lo llamamos porque un jugador acaba de poner un símbolo y le toca al siguiente
    actualizarEstado();
    comprobar();
}

// recorro el array y compruebo si en esas posiciones ganadoras en el cuadrito está el mismo simbolo
function comprobar() {
    for (var i = 0; i<ganar.length;i++) {
        if(cuadro_btn[ganar[i][0]].innerHTML==simbolo1 && cuadro_btn[ganar[i][1]].innerHTML==simbolo1 && cuadro_btn[ganar[i][2]].innerHTML==simbolo1) {
            // llamo a la librería para mostrarla
            alert('jugador 1 gana');
            resetear();
            return; // con return hacemos que al haber ganado no compruebe nada más y salga de la función
        } else if (cuadro_btn[ganar[i][0]].innerHTML==simbolo2 && cuadro_btn[ganar[i][1]].innerHTML==simbolo2 && cuadro_btn[ganar[i][2]].innerHTML==simbolo2) {
            // llamo a la librería para mostrarla
            alert('jugador 2 gana');
            resetear();
            return;
        }
    }
    // comprueba que ningún cuadrito esté sin rellenar. Si no hay ganador es que es un empate
    if(cuadro_btn[0].innerHTML != "" && cuadro_btn[1].innerHTML != "" && cuadro_btn[2].innerHTML != "" && cuadro_btn[3].innerHTML !== "" && cuadro_btn[4].innerHTML != "" && cuadro_btn[5].innerHTML != "" && cuadro_btn[6].innerHTML != "" && cuadro_btn[7].innerHTML != "" && cuadro_btn[8].innerHTML != ""){
        alert('empate');
        resetear();
    }
}

// reinicia el tablero
function resetear() {
    turno=0;
    // coge todos los cuadrados y hace un bucle de todos uno a uno
    cuadro_btn.forEach(boton => {
        boton.innerHTML=''; // vaciamos los simbolos
      });
    // cuando finaliza una partida hacemos que empiec de nuevo por el primer jugador  
    actualizarEstado();  
}
