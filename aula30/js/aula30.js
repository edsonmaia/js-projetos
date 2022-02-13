/* Aula 30 de JS Jogo das Coordenadas Geográficas */
let aviso = document.querySelector('#aviso')
let abrirModal2 = document.querySelector('#abrirModal2')

let pontosGreen  = 0 // pontos1
let pontosOrange = 0 // pontos2

let pontos1 = document.querySelector('#pontosGreen')
let pontos2 = document.querySelector('#pontosOrange')

pontos1.textContent = pontosGreen
pontos2.textContent = pontosOrange

let latitude  = document.querySelector('.latitude')
let longitude = document.querySelector('.longitude')
//console.log(latitude)
//console.log(longitude)

latitude.style.top = "358px"
longitude.style.left = (window.innerWidth-5)/2+"px"

let posicaoInicialLatitude = latitude.offsetTop
let posicaoInicialLongitude = longitude.offsetLeft
//console.log(posicaoInicialLatitude)
//console.log(posicaoInicialLongitude)

function moverLatitude(lat, direcao) {
    // indice usado para mover a div para o Norte (-) ou para o Sul (+)
    let indice = 2.4

    if (lat < 30) {
        indice = 2.5
    } else if (lat <= 40) {
        indice = 2.6
    } else if (lat <= 50) {
        indice = 2.7
    } else if (lat <= 60) {
        indice = 2.8
    } else if (lat <= 70) {
        indice = 2.9
    } else if (lat <= 90) {
        indice = 3.1
    } else if (lat > 90 || lat < 0) {
        console.log('Latitude inválida')
        return
    } else {
        indice = 2.4
    }
            
    let posIniLat = 0
    if(direcao == 'N') posIniLat = posicaoInicialLatitude - indice * lat
    if(direcao == 'S') posIniLat = posicaoInicialLatitude + indice * lat
    latitude.style.top = posIniLat+"px"    
}

function moverLongitude(lon, direcao) {
    // indice usado para mover a div para o Leste (+) ou para o Oeste (-)
    let indice = 2.4
    if(lon <= 30) {
        indice = 2.5
    } else if (lon < 0 || lon > 180) {
        console.log('Longitude inválida')
        return
    }

    let posIniLon = 0
    if(direcao == 'E') posIniLon = posicaoInicialLongitude + indice * lon
    if(direcao == 'O') posIniLon = posicaoInicialLongitude - indice * lon
    longitude.style.left = posIniLon+"px"    
}

let lat1 = document.querySelector('#lat1')
let lon1 = document.querySelector('#lon1')

let coordenadasDaJogada = document.querySelector('#coordenadasDaJogada')

function jogada() {
    let latitudeJogada = document.querySelector('#latitude').value
    let direcaoLatitudeJogada = (document.querySelector('#ns').value).toUpperCase()

    let longitudeJogada = document.querySelector('#longitude').value
    let direcaoLongitudeJogada = (document.querySelector('#eo').value).toUpperCase()

    let latJogada = latitudeJogada+direcaoLatitudeJogada
    let lonJogada = longitudeJogada+direcaoLongitudeJogada

    console.log('Lat. ' + latJogada)
    console.log('Lon. ' + lonJogada)

    if(latitudeJogada == '' || longitudeJogada == '') {
        alert('Informe a latitude e a longitude')
    } else {
        moverLatitude(latitudeJogada, direcaoLatitudeJogada)
        moverLongitude(longitudeJogada, direcaoLongitudeJogada)
        lat1.textContent = latitudeJogada+'°'+direcaoLatitudeJogada
        lon1.textContent = longitudeJogada+'°'+direcaoLongitudeJogada
    }
    
    for(let v = 0; v <= 4; v++) {
        if(latJogada == ships[v].lat && lonJogada == ships[v].long) {
            pontosGreen = pontosGreen+1
            pontos1.textContent = pontosGreen
            abrirModal(latitudeJogada, direcaoLatitudeJogada, longitudeJogada, direcaoLongitudeJogada, 'verde')
            desenharNavio(ships[v].y,ships[v].x, 'green')
        }
    }
    for(let l = 5; l <= 9; l++) {
        if(latJogada == ships[l].lat && lonJogada == ships[l].long) {
            pontosOrange = pontosOrange+1
            pontos2.textContent = pontosOrange
            abrirModal(latitudeJogada, direcaoLatitudeJogada, longitudeJogada, direcaoLongitudeJogada, 'laranja')
            desenharNavio(ships[l].y,ships[l].x, 'orange')
        }
    }
    // verificar o fim do jogo
    gameOver(pontosGreen, pontosOrange)
}

function abrirModal(latitudeJogada, direcaoLatitudeJogada, longitudeJogada, direcaoLongitudeJogada, color) {
    location.href="#abrirModal"
    coordenadasDaJogada.textContent = `Latitude  ${latitudeJogada}°${direcaoLatitudeJogada} Longitude ${longitudeJogada}°${direcaoLongitudeJogada} Navio ${color}`
}

/* // BOTAO ZERAR
let btnZerar = document.querySelector('#btnZerar')
btnZerar.addEventListener('click', () => {
    //window.location.reload()
})
*/
const ships = [
    {
        id: 1,
        color: 'green',
        lat : '80N',
        long: '140O',
        y: 105,
        x: 349
    },
    {
        id: 2,
        color: 'green',
        lat : '10N',
        long: '40O',
        y: 330,
        x: 587
    },
    {
        id: 3,
        color: 'green',
        lat : '70N',
        long: '20E',
        y: 150,
        x: 730
    },
    {
        id: 4,
        color: 'green',
        lat : '30S',
        long: '100O',
        y: 438,
        x: 444
    },
    {
        id: 5,
        color: 'green',
        lat : '60S',
        long: '160E',
        y: 524,
        x: 1064
    },
    {
        id: 6,
        color: 'orange',
        lat : '20N',
        long: '160O',
        y: 300,
        x: 301
    },
    {
        id: 7,
        color: 'orange',
        lat : '40N',
        long: '160E',
        y: 250,
        x: 1064
    },
    {
        id: 8,
        color: 'orange',
        lat : '50S',
        long: '60O',
        y: 490,
        x: 539
    },
    {
        id: 9,
        color: 'orange',
        lat : '20S',
        long: '60E',
        y: 408,
        x: 826
    },
    {
        id: 10,
        color: 'orange',
        lat : '70S',
        long: '120O',
        y: 560,
        x: 396
    }
]
//console.log(ships)

// ARTICLE MAPA
let articleMapa = document.querySelector('#articleMapa')

function desenharNavio(posicaoY, posicaoX, cor) {
    let navio = document.createElement('img')
    navio.setAttribute('src', `./images/navio-${cor}.png`)
    navio.setAttribute('width', '25px')
    navio.style.position = 'absolute'
    navio.style.top = posicaoY+'px'
    navio.style.left = posicaoX-12.5+'px'
    articleMapa.appendChild(navio)
}

// COORDENADAS DO CLICK DO MOUSE NO MAPA
let coordenadas = document.querySelector('#coordenadas')
let posicaoDoClick
articleMapa.addEventListener('click', pegaPosicao, true)
function pegaPosicao(e) {
    posicaoDoClick = { x: e.pageX, y: e.pageY }
    coordenadas.textContent = posicaoDoClick.x + "x" + posicaoDoClick.y
}

const posicaoLongitudes = [
    // oeste
// 180O 160O 140O 120O 100O  80O  60O  40O  20O
    253, 301, 349, 396, 444, 490, 539, 587, 634,
// 0O/E
    680, // greenwich
    // leste
//  20E  40E  60E  80E 100E 120E  140E  160E  180E
    730, 778, 826, 873, 921, 969, 1016, 1064, 1111
]

const posicaoLatitudes = [
    // norte
// 90N  80N  70N  60N  50N  40N  30N  20N  10N
    80, 105, 150, 190, 220, 250, 274, 300, 330,
// 0 N/S
    355, // equador
    // sul
//  10S  20S  30S  40S  50S  60S  70S  80S  90S
    380, 408, 438, 464, 490, 524, 560, 604, 630
]

// ships1
desenharNavio(105, 349, 'black')  // 80N 140O green
desenharNavio(330, 587, 'black')  // 10N  40O green
desenharNavio(150, 730, 'black')  // 70N  20E green
desenharNavio(438, 444, 'black')  // 30S 100O green
desenharNavio(524, 1064, 'black') // 60S 160E green

// ships2
desenharNavio(300, 301, 'black')  // 20N 160O orange
desenharNavio(250, 1064, 'black') // 40N 160E orange
desenharNavio(490, 539, 'black')  // 50S 60O  orange
desenharNavio(408, 826, 'black')  // 20S 60E  orange
desenharNavio(560, 396, 'black')  // 70S 120O  orange

//desenharNavio(355, 680, 'black') // Greewich 690 x 355 Equador

// ships NO
desenharNavio(220, 587, 'black') // 50N  40O 
desenharNavio(330, 444, 'black') // 10N 100O
desenharNavio(274, 396, 'black') // 30N 120O

// ships NE
desenharNavio(330, 826, 'black')  // 10N  60E
desenharNavio(150, 778, 'black')  // 70N  40E
desenharNavio(300, 1016, 'black') // 20N 140E

// ships SO
desenharNavio(408, 634, 'black')  // 20S  20O
desenharNavio(380, 301, 'black')  // 10S 160O
desenharNavio(490, 490, 'black')  // 50S  80O

// ships SE
desenharNavio(464, 1016, 'black') // 40S 140E
desenharNavio(438, 873, 'black')  // 30S  80E
desenharNavio(464, 730, 'black')  // 40S  20E

function gameOver(pontosGreen, pontosOrange) {
    if(pontosGreen >= 5) {
        aviso.textContent = 'Equipe Laranja encontrou os 5 navios verdes de pesca ilegal'
        location.href="#abrirModal2"
        atualizarPagina()
    }
    if(pontosOrange >= 5) {
        aviso.textContent = 'Equipe Verde encontrou os 5 navios laranja de pirataria'
        location.href="#abrirModal2"
        atualizarPagina()
    }
}

function atualizarPagina() {
    setTimeout(() => {
        location.href="#abrirModal2#fechar"
        window.location.reload()
    }, 5000)
}
