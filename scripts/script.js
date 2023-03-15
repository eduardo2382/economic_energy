const btnAvancar = document.querySelectorAll('.btnAvancar')
const btnVoltar = document.querySelectorAll('.btnVoltar')


const sectionCalculo = document.getElementById('sectionCalculo')
const calculoNovoAparelho = document.getElementById('calculoNovoAparelho')


const selectEstado = document.getElementById('selectEstado')
const selectAparelho = document.getElementById('selectAparelho')


avancar()

function avancar(){
    btnAvancar.forEach(function(btn, i){
        btn.addEventListener('click', function(){

            if(i == 1){
                if(verificarSelect(selectEstado)){
                    animatePassarArea(i)
                }
            } else if(i == 2){
                if(verificarSelect(selectAparelho)){
                    animatePassarArea(i)
                    
                }
            } else{
                animatePassarArea(i)
            }
    })
})
}


function animatePassarArea(i){
    let areaCalculo = document.getElementsByClassName('areaCalculo')

    if(i == btnAvancar.length - 1){
        console.log("acabou")
    } else{
        animateSair(areaCalculo[i], i+1, 'esquerda')
        animateEntrar(areaCalculo[i+1], i+1, 'esquerda')
    }
}

btnVoltar.forEach(function(btn, i){
    btn.addEventListener('click', function(){
        let areaCalculo = document.getElementsByClassName('areaCalculo')

        if(i == 0){
            animateEntrar(areaCalculo[i], 0, 'direita')
            animateSair(areaCalculo[i+1], 0, 'direita')
        } else{
            animateEntrar(areaCalculo[i], 1, 'direita')
            animateSair(areaCalculo[i+1], 0, 'direita')
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

function verificarSelect(select){
    let optionSelected = select.options[select.selectedIndex].value

    if(optionSelected == 'invalid'){
        return false
    } else{
        return true
    }
}

selectAparelho.addEventListener('change', function(){
    let optionSelected = selectAparelho.options[selectAparelho.selectedIndex].value


    if(optionSelected == 'outro'){
        if(!(calculoNovoAparelho.style.display == 'none')){
            calculoNovoAparelho.style.display = 'none'
            calculoNovoAparelho.classList.remove('areaCalculo')
            console.log('teste')
        }
    } else{
        if(calculoNovoAparelho.style.display == 'none'){
            calculoNovoAparelho.style.display = 'inline-block'
            calculoNovoAparelho.classList.add('areaCalculo')
        }
    }

    console.log(document.getElementsByClassName('areaCalculo'))

    avancar()
})