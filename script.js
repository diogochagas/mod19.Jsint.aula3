
// SELETOR POR ID
document.querySelector('#título').innerHTML = 'EXEMPLO'

// SELETOR POR TAG
document.querySelector('a').InnerText = '<b>teste ancora</b>'

// SELECIONANDO MAIS DE 1 ITEM POR TAG
let ancoras = document.querySelectorAll('a')

ancoras.forEach(function(elemento){ // função anonima / callback
  elemento.innerHTML = 'teste'
})

// SELECIONANDO MAIS DE 1 ITEM POR CLASSE
let boxes = document.querySelectorAll('.box')

boxes.forEach(function(box){
  box.innerHTML = 'box'
})

