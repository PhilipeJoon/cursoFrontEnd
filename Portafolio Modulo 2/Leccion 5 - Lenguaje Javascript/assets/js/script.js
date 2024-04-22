let contador = 0;
function sumar (){
    contador++;
    document.getElementById("contador").innerHTML = contador;
}
document.getElementById("contador").addEventListener("click", sumar);