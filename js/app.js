document.addEventListener('DOMContentLoaded', function(){
    
    eventListener()
});

function eventListener(){
    const desplegar = document.querySelector('.menu');

    desplegar.addEventListener('click', desplegado);
};

function desplegado(){
    const rutas = document.querySelector('.rutas')

    if(rutas.classList.contains('mostrar')){
        rutas.classList.remove('mostrar');
    }else{
        // toggle
        rutas.classList.add('mostrar');
    }
};

console.log('Hola mundo')