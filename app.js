// Diccionario para la encriptación
let diccionarioEncriptador = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
};

// Diccionario para la desencriptación
let diccionarioDesencriptador = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
};

// Función para encriptar
function encriptardor() {
    let mensaje = document.getElementById("texto").value.toLowerCase();
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje[i];
        if (diccionarioEncriptador[char]) {
            mensajeEncriptado += diccionarioEncriptador[char];
        } else {
            mensajeEncriptado += char;
        }
    }
    console.log(mensajeEncriptado);

    return mensajeEnviar(mensajeEncriptado);
}

// Función para desencriptar
function desencriptar() {
    let mensaje = document.getElementById("texto").value.toLowerCase();
    let MensajeDesencriptar = mensaje;
    for (let key in diccionarioDesencriptador) {
        let value = diccionarioDesencriptador[key];
        let re = new RegExp(key, "g");
        MensajeDesencriptar = MensajeDesencriptar.replace(re, value);
    }
    return mensajeEnviar(MensajeDesencriptar);
}

function mensajeEnviar(Mensaje) {
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("tituloNoencontrado").style.display = "none";
    document.getElementById("copiar").removeAttribute("disabled");
    let elentoHtml = document.querySelector("p");
    elentoHtml.innerHTML = Mensaje;
}
