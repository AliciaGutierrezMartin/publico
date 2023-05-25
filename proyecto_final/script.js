
function guardarAjustes() {
    const ajustesNombre = document.getElementById('ajustesNombre').value;
    const ajustesModo = document.querySelector('input[name="modo"]:checked').value;
    window.localStorage.setItem("--usuario", ajustesNombre);
    window.localStorage.setItem("--modo", ajustesModo);
    console.log("Ajustes actualizados");
    activarAjustes();
}

activarAjustes();

function activarAjustes() {
    let usuario = window.localStorage.getItem("--usuario");
    if (usuario) {
        document.getElementById('usuario').innerHTML = "Hola " + usuario + "!";
        const ajustesNombre = document.getElementById('ajustesNombre');
        if (ajustesNombre) {
            ajustesNombre.value = usuario;
        }
    }

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