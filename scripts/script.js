const botao = document.getElementById('btnComecar')
const calculoEstado = document.getElementById('calculoEstado')
const calculoinicio = document.getElementById('calculoinicio')

botao.addEventListener('click', function(){
    calculoinicio.classList.add('animateSair')
    calculoEstado.classList.add('animateEntrar')
})