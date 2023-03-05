const btnCalculo = document.querySelectorAll('.btnCalculo')
const areaCalculo = document.getElementsByClassName('areaCalculo')


btnCalculo.forEach(function(btn, i){
    btn.addEventListener('click', function(){
        animateSair(areaCalculo[i], i+1)
        animateEntrar(areaCalculo[i+1], i+1)
        console.log('ola')
    })
})

function animateSair(elemento, vezes=1){
    elemento.style.transform = `translateX(${-100 * vezes}%)`
    elemento.style.opacity = 0
}

function animateEntrar(elemento, vezes=1){
    elemento.style.transform = `translateX(${-100 * vezes}%)`
    elemento.style.opacity = 1
}