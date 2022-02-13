/* Aula 24 Desafio Refatoracao */

// ELEMENTOS DA 1a CARTA APENAS
let imgFoto       = document.querySelector('#foto')
let nome          = document.querySelector('#nome')
let nacionalidade = document.querySelector('#nacionalidade')
let idade         = document.querySelector('#idade')
let peso          = document.querySelector('#peso')
let altura        = document.querySelector('#altura')

// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// ENDERECO DO ARQUIVO JSON
const url = 'cards.json'

function pegarDados(i) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
        // console.log(dados)
        // Quantidade de lutadores
        let qtdLutadores = (dados.lutadores.length)
        console.log("Quant. de Lutadores " + qtdLutadores)
        // passe o valor de i no parametro
        atribuirDados2(dados, i)
    })
} // fim pegarDados

// atribuir dados individualmente, ou seja, so para uma carta
// ela so funciona se for chamada dentro da funcao pegarDados
function atribuirDados(dados, i) {
    imgFoto.setAttribute('src', "images/pride/"+dados.lutadores[i].foto)
    nome.textContent          = dados.lutadores[i].nome
    nacionalidade.textContent = dados.lutadores[i].nacionalidade
    idade.textContent         = dados.lutadores[i].idade + " anos"
    peso.textContent          = (dados.lutadores[i].peso).toString(2) + " Kg"
    altura.textContent        = (dados.lutadores[i].altura).toString(2) + " m"
}

// SELECIONAR TODOS OS CARDS por class
let imgsFoto = document.getElementsByClassName('foto')
let nomesLutadores         = document.getElementsByClassName('nome')
let nacionalidadeLutadores = document.getElementsByClassName('nacionalidade')
let idadeLutadores         = document.getElementsByClassName('idade')
let pesoLutadores          = document.getElementsByClassName('peso')
let alturaLutadores        = document.getElementsByClassName('altura')

// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function atribuirDados2(dados, i) {
    imgsFoto[i].setAttribute('src', "images/pride/"+dados.lutadores[i].foto)
    nomesLutadores[i].textContent         = dados.lutadores[i].nome
    nacionalidadeLutadores[i].textContent = dados.lutadores[i].nacionalidade
    idadeLutadores[i].textContent         = dados.lutadores[i].idade + " anos"
    pesoLutadores[i].textContent          = dados.lutadores[i].peso + " Kg"
    alturaLutadores[i].textContent        = dados.lutadores[i].altura + " m"
}

// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
function desenharCarta(id) {
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

    // IMAGEM DENTRO DO CARD
    let imagem = document.createElement("img")
    carta.appendChild(imagem)
    imagem.setAttribute('class', 'foto')
    imagem.setAttribute('src', 'images/pride/pride_fc.jpg')

    // NOME DO LUTADOR
    let nomeLutador = document.createElement("h2")
    nomeLutador.setAttribute('class', 'nome')
    carta.appendChild(nomeLutador)
    nomeLutador.textContent = "Nome"

    // NACIONALIDADE DO LUTADOR
    let nacionalidadeLutador = document.createElement("h3")
    nacionalidadeLutador.setAttribute('class', 'nacionalidade')
    carta.appendChild(nacionalidadeLutador)
    nacionalidadeLutador.textContent = "Nacinalidade"

    // IDADE DO LUTADOR
    let idadeLutador = document.createElement("h3")
    idadeLutador.setAttribute('class', 'idade')
    carta.appendChild(idadeLutador)
    idadeLutador.textContent = "idade anos" 

    // PESO DO LUTADOR
    let pesoLutador = document.createElement("h3")
    pesoLutador.setAttribute('class', 'peso')
    carta.appendChild(pesoLutador)
    pesoLutador.textContent = "peso Kg" 

    // ALTURA DO LUTADOR
    let alturaLutador = document.createElement("h3")
    alturaLutador.setAttribute('class', 'altura')
    carta.appendChild(alturaLutador)
    alturaLutador.textContent = "altura m" 

    pegarDados(id)
}

// 1a carta pegamos os dados. Ela ja esta desenhada na tela
pegarDados(0)

// 2a carta em diante desenhamos em tela usando as funcoes
//desenharCarta(0)
desenharCarta(1)
desenharCarta(2)
desenharCarta(3)
desenharCarta(4)

desenharCarta(5)
desenharCarta(6)
desenharCarta(7)
desenharCarta(8)
desenharCarta(9)
