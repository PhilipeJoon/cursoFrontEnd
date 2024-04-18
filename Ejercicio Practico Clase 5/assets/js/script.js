const button = document.getElementById('boton');
button.addEventListener('click', function() {
    console.log('has hecho click en el boton')
});

document.addEventListener('DOMContentLoaded', function(){
    const boton = document.getElementById('boton');

boton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});    
});
