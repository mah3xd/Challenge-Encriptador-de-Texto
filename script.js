document.addEventListener("DOMContentLoaded", function() {
    var botonEncriptar = document.querySelector(".btn-encriptar");
    var botonDesencriptar = document.querySelector(".btn-desencriptar");
    var amber = document.querySelector(".amber");
    var contenedor = document.querySelector(".contenedor-parrafo");
    var resultado = document.querySelector(".texto-resultado");
    var btnCopiar = document.querySelector(".btn-copiar");
    var modal = document.getElementById("customAlert");
    var closeButton = document.querySelector(".close-button");

    botonEncriptar.onclick = encriptar;
    botonDesencriptar.onclick = desencriptar;
    btnCopiar.addEventListener("click", () => {
        var contenido = document.querySelector(".texto-resultado").textContent;
        navigator.clipboard.writeText(contenido).then(() => {
            document.querySelector(".cajatexto").value = "";
            modal.style.display = "block";
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    function encriptar() {
        ocultarAdelante();
        var cajatexto = recuperarTexto();
        resultado.textContent = encriptarTexto(cajatexto);
    }

    function desencriptar() {
        ocultarAdelante();
        var cajatexto = recuperarTexto();
        resultado.textContent = desencriptarTexto(cajatexto);
    }

    function recuperarTexto() {
        var cajatexto = document.querySelector(".cajatexto");
        return cajatexto.value;
    }

    function ocultarAdelante() {
        amber.classList.add("ocultar");
        contenedor.classList.add("ocultar");
    }

    function encriptarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            if (texto[i] == "a") {
                textoFinal += "ai";
            } else if (texto[i] == "e") {
                textoFinal += "enter";
            } else if (texto[i] == "i") {
                textoFinal += "imes";
            } else if (texto[i] == "o") {
                textoFinal += "ober";
            } else if (texto[i] == "u") {
                textoFinal += "ufat";
            } else {
                textoFinal += texto[i];
            }
        }
        return textoFinal;
    }

    function desencriptarTexto(mensaje) {
        var texto = mensaje;
        var textoFinal = "";

        for (var i = 0; i < texto.length; i++) {
            if (texto[i] == "a") {
                textoFinal += "a";
                i += 1;
            } else if (texto[i] == "e") {
                textoFinal += "e";
                i += 4;
            } else if (texto[i] == "i") {
                textoFinal += "i";
                i += 3;
            } else if (texto[i] == "o") {
                textoFinal += "o";
                i += 3;
            } else if (texto[i] == "u") {
                textoFinal += "u";
                i += 3;
            } else {
                textoFinal += texto[i];
            }
        }
        return textoFinal;
    }
});
