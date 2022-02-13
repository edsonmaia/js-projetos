// CARROSSEL
// Selecionar todos os lis de todas as listas
let ulsElis = document.querySelectorAll('ul li')
//console.log(ulsElis)

// Cada lista e uma categoria
let numDeListas = document.querySelectorAll('ul').length
console.log('Núm. de Categorias ' + numDeListas)

// Quantidade total de lis de todas as listas
let qtdVideos = ulsElis.length
console.log('Quant. de Vídeos = ' + qtdVideos)

// Serve para fazer o controle do carrossel
let numDeItens = 5 // sao as capas visiveis no carrossel

let lista = [];
for(let x = 1; x <= numDeListas; x++) {
    lista[x] = document.querySelectorAll('#lista'+x+' li')
}
/*
let lista1 = document.querySelectorAll('#lista1 li')
let lista2 = document.querySelectorAll('#lista2 li')
let lista3 = document.querySelectorAll('#lista3 li')
let lista4 = document.querySelectorAll('#lista4 li')
let lista5 = document.querySelectorAll('#lista5 li')
*/

let numDeVideos = document.querySelectorAll('.numDeVideos')

for(let y = 0; y < numDeListas; y++) {
    numDeVideos[y].textContent = lista[y+1].length
}
/*
numDeVideos[0].textContent = lista1.length
numDeVideos[1].textContent = lista2.length
numDeVideos[2].textContent = lista3.length
numDeVideos[3].textContent = lista4.length
numDeVideos[4].textContent = lista5.length
*/

function show(indice, indiceLista) {
    let n = indice
    numDeItens =  numDeItens + indice
    console.log(n + " " + numDeItens)

    let listaUl = document.querySelector('#lista'+indiceLista)
    //console.log(listaUl)

    let mover  = 100
    let posicaoXDireita  = mover
    let posicaoXEsquerda = -mover

    if(indice == +1) {
        //console.log('Mover para direita')
        listaUl.scrollBy(posicaoXDireita, 0)
    }
    if(indice == -1) {
        //console.log('Mover para esquerda')
        listaUl.scrollBy(posicaoXEsquerda, 0)
    }
}

// JANELA MODAL COM VIDEO
// EXIBE O VIDEO USANDO IFRAME DO YOUTUBE COM BASE NO CODIGO DO VIDEO
let iframeVideo = document.querySelector('#iframeVideo')
//console.log(iframeVideo)

function abrirModal(videoId) {
    location.href="#abrirModal"
    iframeVideo.setAttribute('src', `https://www.youtube.com/embed/${videoId}`)
}
