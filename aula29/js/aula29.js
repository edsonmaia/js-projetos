/* MAIAFLIX */

let divAviso = document.querySelector('#aviso')

// CARROSSEL
// Selecionar todos os lis de todas as listas
let ulsElis = document.querySelectorAll('ul li')
//console.log(ulsElis)

// Cada lista e uma categoria pela class
let numDeListas = document.querySelectorAll('.categoria').length
console.log('Núm. de Categorias ' + numDeListas)

// Serve para fazer o controle do carrossel
let numDeItens = 5 // sao as capas visiveis no carrossel

function show(indice, indiceLista) {
    // selecionar a lista com base no nome #lista + numero da lista
    let listaUl = document.querySelector('#lista'+indiceLista)
    //console.log(listaUl)

    let mover = 100
    let posicaoXDireita  = mover
    let posicaoXEsquerda = -mover

    if(indice == +1) listaUl.scrollBy(posicaoXDireita, 0)
    if(indice == -1) listaUl.scrollBy(posicaoXEsquerda, 0)
}

// JANELA MODAL COM VIDEO
// EXIBE O VIDEO USANDO IFRAME DO YOUTUBE COM BASE NO CODIGO DO VIDEO
let iframeVideo = document.querySelector('#iframeVideo')
//console.log(iframeVideo)

function abrirModal(videoId) {
    location.href="#abrirModal"
    iframeVideo.setAttribute('src', `https://www.youtube.com/embed/${videoId}`)
}

// ENDERECO DO ARQUIVO JSON
const url = 'videos.json'

function pegarDados() {
    fetch(url)
    .then( response => response.json() )
    .then( dados => {
        console.log(dados)
        // Quantidade de videos
        let qtdDeVideosJson = dados.videos.length
        console.log("Quant. de Vídeos JSON " + qtdDeVideosJson)
   
        let qtdDeCategorias = dados.categorias.length
        console.log("Quant. de Categorias " + qtdDeCategorias)
        //console.log(dados.categorias)
        //console.log(dados.videos)
        /*
        for(let x = 0; x <= 6; x++) { console.log(dados.categorias[x]) }
        */
    })
} // fim pegarDados

// LISTAS com lis e images das capas
let ul1 = document.querySelector('#lista1')
let ul2 = document.querySelector('#lista2')
let ul3 = document.querySelector('#lista3')
let ul4 = document.querySelector('#lista4')
let ul5 = document.querySelector('#lista5')
let ul6 = document.querySelector('#lista6')
//let listaDeVideos = document.querySelector('#lista1')

let titulosCategorias = document.querySelectorAll('.tituloCategoria')

function pegarDadosPorCategoria(categoriaId, lista) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        //console.log(dados)

        // passe a categoria no parametro
        //atribuirDadosPorCategoria(dados, categoria)
        let quantDeVideos = dados.videos.length
        //console.log(quantDeVideos)

        let indiceAtual = categoriaId-1
        titulosCategorias[indiceAtual].textContent = dados.categorias[indiceAtual].titulo

        for(let y = 0; y < quantDeVideos ; y++) {
            if(dados.videos[y].categoriaId == categoriaId) {
                criarLiImg(categoriaId, dados.videos[y].videoId , lista)
            }
        }
    })
} // fim pegarDadosPorCategoria

// ATRIBUIR DADOS PARA CADA LISTA
pegarDadosPorCategoria(1, ul1)
pegarDadosPorCategoria(2, ul2)
pegarDadosPorCategoria(3, ul3)
pegarDadosPorCategoria(4, ul4)
pegarDadosPorCategoria(5, ul5)
pegarDadosPorCategoria(6, ul6)

function dadosPorCategoria(categoria) {
    console.log(categoria)
}

// usamos as funcoes createElement e appendChild
// para criar li (elemento html que vai acomodar cada video)
// criamos tambem img. Depois colocamos eles dentro do article
function criarLiImg(categoriaId, idVideo, nLista) {
    let lista = nLista
    // LI
    let item = document.createElement("li")
    //console.log(item)
    lista.appendChild(item)

    let imagem = document.createElement("img")
    imagem.setAttribute('src', `https://img.youtube.com/vi/${idVideo}/maxresdefault.jpg`)
    imagem.setAttribute('class', 'capa-thumb')
    imagem.setAttribute('onClick', `abrirModal("${idVideo}")`)
    item.appendChild(imagem)

}
