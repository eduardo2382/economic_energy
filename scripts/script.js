const btnAvancar = document.querySelectorAll('.btnAvancar')
const areaCalculo = document.getElementsByClassName('areaCalculo')


btnAvancar.forEach(function(btn, i){
    btn.addEventListener('click', function(){
        if(i == btnAvancar.length - 1){
            console.log("acabou")
        } else{
            console.log(i)
            animateSair(areaCalculo[i], i+1)
            animateEntrar(areaCalculo[i+1], i+1)
        }
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