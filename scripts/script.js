const btnAvancar = document.querySelectorAll('.btnAvancar')
const btnVoltar = document.querySelectorAll('.btnVoltar')

const areaCalculo = document.getElementsByClassName('areaCalculo')

const selectEstado = document.getElementById('selectEstado')
const selectAparelho = document.getElementById('selectAparelho')


selectAparelho.addEventListener('change', function(){
    let = optionSelected = selectAparelho.options[selectAparelho.selectedIndex].value
    let avisoAparelho = document.getElementById('avisoAparelho')

    if(optionSelected == 'outro'){
        avisoAparelho.style.display = 'inline-block'
    } else{
        avisoAparelho.style.display = 'none'
    }
})


btnVoltar.forEach(function(btn, i){
    btn.addEventListener('click', function(){
        if(i == 0){
            animateEntrar(areaCalculo[i], 0, 'direita')
            animateSair(areaCalculo[i+1], 0, 'direita')
        } else{
            animateEntrar(areaCalculo[i], 1, 'direita')
            animateSair(areaCalculo[i+1], 0, 'direita')
        }
    })
})

btnAvancar.forEach(function(btn, i){
    btn.addEventListener('click', function(){
        if(i == btnAvancar.length - 1){
            console.log("acabou")
        } else{
            animateSair(areaCalculo[i], i+1, 'esquerda')
            animateEntrar(areaCalculo[i+1], i+1, 'esquerda')
        }
    })
})

function animateSair(elemento, vezes=1, lado){
    if(lado == 'esquerda'){
        elemento.style.transform = `translateX(${-100 * vezes}%)`
        elemento.style.opacity = 0
    } else{
        elemento.style.transform = `translateX(${+100 * vezes}%)`
        elemento.style.opacity = 0
    }
}

function animateEntrar(elemento, vezes=1, lado){
    if(lado == 'esquerda'){
        elemento.style.transform = `translateX(${-100 * vezes}%)`
        elemento.style.opacity = 1
    } else{
        elemento.style.transform = `translateX(${-100 * vezes}%)`
        elemento.style.opacity = 1
    }
}