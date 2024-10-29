function mostrar(elemento){
    elemento.style.display = "block";
}

function noMostrar(elemento){
    elemento.style.display = "none";
}

function validarStringInside(elemento, min, max) {
    if (!validarString(elemento.value, min, max)) {
        elemento.className = "form-control is-invalid";
    } else {
        elemento.className = "form-control is-valid";
    }
}

function validarEmailInside(elemento) {
    if (!validarEmail(elemento.value)) {
        elemento.className = "form-control is-invalid";
    } else {
        elemento.className = "form-control is-valid";
    }
}

function validarTelefonoInside(elemento) {
    if (!validarTelefono(elemento)) {
        elemento.className = "form-control is-invalid";
    } else {
        elemento.className = "form-control is-valid";
    }
}

function validarFechaNacimientoInside(elemento) {
    if (!validarFechaNacimiento(elemento.value)) {
        elemento.className = "form-control is-invalid";
    } else {
        elemento.className = "form-control is-valid";
    }
}

function validarRadioBotonesInside(elemento) {
    if (!validarRadioBotones("opciones")) {
        elemento.className = "form-check-input is-invalid";
    } else {
        elemento.className = "form-check-input is-valid";
    }
}

function validarDolenciasInside(elemento) {
    if (!validarIntereses(elemento)) {
        elemento.className = "form-control is-invalid";
    } else {
        elemento.className = "form-control is-valid";
    }
}

function validarCPInside(elemento, provincia) {
    if (!validarCP(elemento.value)) {
        elemento.className = "form-control is-invalid";
        clearProvincia(provincia);
    } else {
        putProvincia(provincia, elemento);
        elemento.className = "form-control is-valid";
    }
}

function validarInteresesInside(elemento) {
    if (!validarIntereses(elemento)) {
        elemento.className = "form-control is-invalid";
    } else {
        elemento.className = "form-control is-valid";
    }
}

function putProvincia(elemento, prefijoCP) {
    var prefijo = parseInt(prefijoCP.value.substring(0, 2));
    elemento.value = cargarProvincia(prefijo);
}

function clearProvincia(elemento) {
    elemento.value = "";
}

function validarComentarioInside(elemento) {
    if (!validarComentario(elemento)) {
        elemento.className = "form-control is-invalid";
    } else {
        elemento.className = "form-control is-valid";
    }
}

function validarTerminosInside(elemento) {
    if (!validarTerminos()) {
        elemento.className = "form-check-input is-invalid";
    } else {
        elemento.className = "form-check-input is-valid";
    }
}

function validarForm() {
    var valido = true;
    var mensaje = "";

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono");
    var cp = document.getElementById("cp").value;
    var fechaNacimiento = document.getElementById("fecha").value;

    if (!validarString(nombre, 2, 30)) {
        valido = false;
        mensaje += "El nombre es obligatorio. <br>";
    }

    if (!validarEmail(email)) {
        valido = false;
        mensaje += "El email es obligatorio.<br>";
    }

    if (!validarTelefono(telefono)) {
        valido = false;
        mensaje += "El telefono es obligatorio.<br>";
    }

    if (!validarCP(cp)) {
        valido = false;
        mensaje += "El C.P. es obligatorio.<br>";
    }

    if (!validarRadioBotones("opciones")) {
        valido = false;
        mensaje += "El tipo de lente es obligatorio.<br>";
    }

    if (obtenerValoresSeleccionados("selectDolencias").length == 0) {
        valido = false;
        mensaje += "El tipo de dolencia es obligatorio. <br>";
    }

    if (!validarFechaNacimiento(fechaNacimiento)) {
        valido = false;
        mensaje += "La fecha de nacimiento es obligatoria. <br>";
    }

    if (!validarTerminos()) {
        valido = false;
        mensaje += "Debes aceptar los terminos y condiciones. <br>";
    }

    if (!valido) {
        var modalBody = document.getElementById('modalBodyMessage');
        modalBody.innerHTML = mensaje;
        var modal = new bootstrap.Modal(document.getElementById('validacionErrorModal'));
        modal.show();
    }

    return valido;
}

function recuperarDatos() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var cp = document.getElementById("cp").value;
    var fechaNacimiento = document.getElementById("fecha").value;
    var comentarios = document.getElementById("comentariosTxt").value;

    var mensajeCorrecto = "";
    mensajeCorrecto += "Nombre: " + nombre + "<br>";
    mensajeCorrecto += "Email: " + email + "<br>";
    mensajeCorrecto += "Teléfono: " + telefono + "<br>";
    mensajeCorrecto += "C.P.: " + cp + "<br>";
    mensajeCorrecto += "Tipo de lente: " + obtenerValorRadioBotones("opciones") + "<br>";
    mensajeCorrecto += "Tipo de dolencia: " + obtenerValoresSeleccionados("selectDolencias") + "<br>";
    mensajeCorrecto += "Fecha de nacimiento: " + fechaNacimiento + "<br>";
    mensajeCorrecto += "Comentarios: " + comentarios + "<br>";

    var bodyModal = document.getElementById('modalExitoBodyMessage');
    bodyModal.innerHTML = mensajeCorrecto;

    var modalExito = document.getElementById('validacionExitoModal');
    modalExito.addEventListener('hidden.bs.modal', function () {
        document.getElementById("myForm").submit();
    });

    var modal = new bootstrap.Modal(modalExito);
    modal.show();
}

function validarYRecuperarDatos(event) {
    event.preventDefault();
    if (validarForm()) {
        recuperarDatos();
    }
}
