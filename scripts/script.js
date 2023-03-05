const btn_comecar = document.getElementById('btnComecar')
const calculoinicio = document.getElementById('calculoinicio') 
var calculoestado = document.getElementById('calculoEstado') 

const delay = 500

var etapa = ['estado', 'aparelho', 'potencia', 'finalizar']

btn_comecar.addEventListener('click', function(){
    calculoinicio.classList.add('animateSair')
    setTimeout(function(){
        calculoinicio.style.display = 'none'
        calculoestado.classList.add('animateEntrar')
        calculoestado.style.display = 'flex'
    }, delay)
})

