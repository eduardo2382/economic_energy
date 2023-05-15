var areasCalculo = document.querySelectorAll('.areaCalculo');
var btnAvancar = document.querySelectorAll('.btnAvancar')
var btnVoltar = document.querySelectorAll('.btnVoltar')
var novoAparelho = document.getElementById('calculoNovoAparelho')
var selectAparelho = document.getElementById('selectAparelho')
var selectEstado = document.getElementById('selectEstado')



btnAvancar.forEach( (item, index) => { // obtem todos os botões avancar
    item.addEventListener('click', () => { // quando um botão avancar for clicado ele chama a função "avancar"
        
        switch(index) {
            case 0:
                avancar(index)
                break;

            case 1:
                verificarSelect(selectEstado) ? avancar(index) : undefined
                break;

            case 2:
                if(verificarSelect(selectAparelho)){
                    if(verificarSelect(selectAparelho) == 'outro'){
                        if(verificarInput(document.getElementById('potenciaNovoAparelho'))){
                            avancar(index)
                        }
                    } else{
                        avancar(index)
                    }
                }

                break

            case 3:
                avancar(index)
        
            default:
                break;
        }
    })
})


btnVoltar.forEach( (item, index) => { // obtem todos os botões voltar
    item.addEventListener('click', () => { // quando um botão voltar for clicado ele chama a função "voltar"
        voltar(index)
    })
})

selectAparelho.addEventListener('change', function(){
    let optionSelected = selectAparelho.options[selectAparelho.selectedIndex].value

    if(optionSelected == 'outro'){
        document.getElementById('areaNovoAparelho').style.display = 'block'
    } else{
        document.getElementById('areaNovoAparelho').style.display = 'none'
    }
})

function avancar(index){ // funcao para avancar os sections
    if(index == 0){
        areasCalculo.forEach( (item) => {
            item.style.transform = `translateX(-100%)`
        })
    } else{
        areasCalculo.forEach( (item) => {
            item.style.transform = `translateX(${-100 * (index + 1)}%)`
            
        })
    }
}

function voltar(index){ // funcao para voltar os sections
    areasCalculo = document.querySelectorAll('.areaCalculo'); 

    if(index == 0){
        areasCalculo.forEach((item) => {
            item.style.transform = `translateX(${+100 * 0}%)`
        })
    } else{
        areasCalculo.forEach((item) => {
            item.style.transform = `translateX(${-100 * index}%)`
        })
    }
}

function verificarSelect(select){
    let optionSelected = select.options[select.selectedIndex].value

    if(optionSelected == 'invalid'){
        return false
    } else{
        return optionSelected
    }
}

function verificarInput(input){
    let inputValue = input.value

    if(inputValue.length != 0){
        return true
    }
}
