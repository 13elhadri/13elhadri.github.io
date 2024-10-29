function validarEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validarFormatoTelefono(cadena) {
	const telefonoRegex = /\b\d{9}\b/;
	return telefonoRegex.test(cadena);
}

function validarTelefono(cadena) {
	const valor = cadena.value.trim();
	if (valor.length < 9 || valor.length > 15) {
		return false;
	}
	if (validarFormatoTelefono(valor) && (valor.charAt(0) === "6" || valor.charAt(0) === "7" || valor.charAt(0) === "9")) {
		return true;
	}
	return false;
}

function validarFechaNacimiento(fecha) {
    const partes = fecha.split('/');
    if (partes.length !== 3) return false;
    const dia = parseInt(partes[0]);
    const mes = parseInt(partes[1]);
    const anio = parseInt(partes[2]);
    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
        return false;
    }
    if (anio < 1950 || anio > 2024) {
        return false;
    }
    const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
    let valido = true;
    switch (mes) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            if (dia < 1 || dia > 31) valido = false;
            break;
        case 4: case 6: case 9: case 11:
            if (dia < 1 || dia > 30) valido = false;
            break;
        case 2:
            if (esBisiesto) {
                if (dia < 1 || dia > 29) valido = false;
            } else {
                if (dia < 1 || dia > 28) valido = false;
            }
            break;
        default:
            valido = false;
    }
    return valido;
}

function validarRadioBotones(genero) {
    var array = document.getElementsByName(genero);
    var ok = false;
    for(var i = 0; i < array.length; i++){
        if(array[i].checked)
            ok = true;
    }
    return ok;
}

function obtenerValoresSeleccionados(selectId) {
    var select = document.getElementById(selectId);
    var valoresSeleccionados = [];
    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].selected) {
            valoresSeleccionados.push(select.options[i].value);
        }
    }
    return valoresSeleccionados;
}

function obtenerValorRadioBotones(nameOptions) {
    var opciones = document.getElementsByName(nameOptions);
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            return opciones[i].value;
        }
    }
    return null;
}

function validarIntereses(selectElement) {
    const opcionesSeleccionadas = Array.from(selectElement.selectedOptions);
    return opcionesSeleccionadas.length > 0;
}

function validarCP(cadena){
	if(!isNaN(cadena) && cadena.length == 5 && parseInt(cadena.substr(0, 2)) > 0 && parseInt(cadena) <= 52006){
		return true;
	}else{
		return false;
	}
}

function validarRadioBotones(radioname) {
    var array = document.getElementsByName(radioname);
    var ok = false;
    for(var i = 0; i < array.length; i++){
        if(array[i].checked)
            ok = true;
    }
    return ok;
}

function cargarProvincia(prefijoCP){
    var provincias = [
        'Álava', 'Albacete', 'Alicante', 'Almería', 'Ávila', 'Badajoz', 'Baleares', 'Barcelona', 'Burgos', 'Cáceres', 
        'Cádiz', 'Castellón', 'Ciudad Real', 'Córdoba', 'A Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara', 
        'Guipúzcoa', 'Huelva', 'Huesca', 'Jaén', 'León', 'Lérida', 'La Rioja', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 
        'Navarra', 'Orense', 'Asturias', 'Palencia', 'Las Palmas', 'Pontevedra', 'Salamanca', 'Santa Cruz de Tenerife', 
        'Cantabria', 'Segovia', 'Sevilla', 'Soria', 'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 
        'Bizkaia', 'Zamora', 'Zaragoza', 'Ceuta', 'Melilla'
    ];
    return provincias[prefijoCP - 1];
}

function validarComentario(cadena){
    if(cadena.value.length > 0){
        return true;
    }else{
        return false;
    }
}

function validarTerminos(){
    if(document.getElementById("terminosChk").checked){
        return true;
    } else {
        return false;
    }
}
