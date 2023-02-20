let calcular = document.querySelector('#calcular')

calcular.addEventListener('click', function(){

    let duracao = document.querySelector('#duracao')
    let inputDias = parseInt(document.querySelector('#dias').value)
    let inputHoras = parseInt(document.querySelector('#horas').value)

    duracao.textContent = `${(inputDias * 24) + inputHoras}`

})



