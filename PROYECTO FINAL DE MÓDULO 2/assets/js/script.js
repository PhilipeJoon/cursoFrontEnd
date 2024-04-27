let puntosUsuario = 0;
let puntosCPU = 0;

let contadorUsuario = document.querySelector("#contadorUsuario");
let contadorCPU = document.querySelector("#contadorCPU");
let contadorEmpate = document.querySelector("#vs");

let botonesEleccion = document.querySelectorAll(".eleccion");
botonesEleccion.forEach(boton=>{
    boton.addEventListener("click", iniciarPartida);
});

let botonInicio = document.querySelector("#inicioJuego");
botonInicio.addEventListener("click", iniciar);

function iniciarPartida(e) {
    let eleccionCPU = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;
    console.log(eleccionUsuario);

    //piedra => 0
    //papel => 1
    //tijera => 2

    if(eleccionCPU === 0) {
        eleccionCPU = "botonPiedra";
    } else if(eleccionCPU === 1) {
        eleccionCPU = "botonPapel";
    } else if(eleccionCPU === 2) {
        eleccionCPU = "botonTijera";
    }

    console.log("Usuario: " + eleccionUsuario);
    console.log("CPU: " + eleccionCPU);

    //piedra vence a tijera
    //tijera vence a papel
    //papel vence a piedra
    //si son iguales es empate

    if(
        (eleccionUsuario === "botonPiedra" && eleccionCPU === "botonTijera") ||
        (eleccionUsuario === "botonTijera" && eleccionCPU === "botonPapel") ||
        (eleccionUsuario === "botonPapel" && eleccionCPU === "botonPiedra")
    ) {
        ganaUsuario();
    } else if (
        (eleccionCPU === "botonPiedra" && eleccionUsuario === "botonTijera") ||
        (eleccionCPU === "botonTijera" && eleccionUsuario === "botonPapel") ||
        (eleccionCPU === "botonPapel" && eleccionUsuario === "botonPiedra")
    ) {
        ganaCPU();
    } else {
        empate();
    }
}

function ganaUsuario() {
    puntosUsuario++;
    contadorUsuario.innerText = puntosUsuario;
}

function ganaCPU() {
    puntosCPU++;
    contadorCPU.innerText = puntosCPU;
}

function empate() {
    console.log("Empate");
    contadorEmpate.innerText = "Empate"
}

function iniciar() {
    alert("Da click en tu eleccion");

    puntosUsuario = 0;
    puntosCPU = 0;

    contadorUsuario.innerText = puntosUsuario;
    contadorCPU.innerText = puntosCPU;
}
