// coge los ajustes del formulario y los guarda en sessionStorage o localStorage
function guardarAjustes() {
    const ajustesNombre = document.getElementById('ajustesNombre').value;
    const ajustesModo = document.querySelector('input[name="modo"]:checked').value;
    const ajustesColor = document.getElementById('ajustesColor').value;

    window.sessionStorage.setItem("--usuario", ajustesNombre);
    window.localStorage.setItem("--modo", ajustesModo);
    window.localStorage.setItem("--colorMenu", ajustesColor);
    console.log("Ajustes actualizados");
    activarAjustes();
}

activarAjustes();

// activar los ajustes que se han puesto en la página de ajustes
function activarAjustes() {
    // coge el usuario del sessionStorage y si existe lo pone en pantalla
    let usuario = window.sessionStorage.getItem("--usuario");
    if (usuario) {
        document.getElementById('usuario').innerHTML = "Hola " + usuario + "!";
        const ajustesNombre = document.getElementById('ajustesNombre');
        if (ajustesNombre) {
            ajustesNombre.value = usuario;
        }
    }

    // coge el color del menú del localStorage y si existe lo pone de color en el menú
    let colorMenu = window.localStorage.getItem("--colorMenu");
    if(colorMenu) {
        document.getElementsByTagName("nav")[0].style.backgroundColor = colorMenu;
        const ajustesColor = document.getElementById('ajustesColor');
        if (ajustesColor) {
            ajustesColor.value = colorMenu;
        }

    }

    // coge el modo día o noche del localStorage y lo aplica a la página. Si no existe coge por defecto el modo noche
    let modo = window.localStorage.getItem("--modo");
    if (!modo) {
        modo = "noche";
    }

    const radioModo = document.getElementById("modo_" + modo);
    if (radioModo) {
        radioModo.checked = true;
    }
    console.log("aplicado modo "+modo);
    let body=document.getElementsByTagName("body")[0];
    body.className = "";
    body.classList.add(modo);
}