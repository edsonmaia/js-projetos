/* Aula 14 de JS Manipular dados de Formulario */

/* SELECIONE TODOS OS ELEMENTOS QUE
DESEJA MANIPULAR */
let formulario = document.querySelector('form')

let cxNome   = document.querySelector('#nome')
let cxIdade  = document.querySelector('#idade')
let cxPeso   = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc    = document.querySelector('#resultadoImc')

let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

/* PARA PEGAR OS DADOS QUE ESTAO DENTRO DAS
CAIXAS USE A PROPRIEDADE .value
MAS, ANTES DETERMINE UM EVENTO COMO REFERENCIA PARA PEGAR OS DADOS */

/* Adicionei escutador para o btnEnviar */
// Uma funcao anonima para pegar os valores
// calcular o imc
btnEnviar.addEventListener('click', function (e) {
    // pegar os values de cada input
    let nome   = cxNome.value
    let idade  = cxIdade.value
    let peso   = cxPeso.value
    let altura = cxAltura.value
    let imc    = (peso / (altura * altura)).toFixed(1)

    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cxImc.value = imc
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    // SAIDA DE DADOS
    /*
    alert(
        'Nome ' + nome + '\n' +
        'Idade ' + idade + ' anos\n' +
        'Peso ' + peso + 'Kg\n' +
        'Altura ' + altura + 'm\n' +
        'IMC ' + imc + ' ' +
        sit
    ) */
    
    // criar objeto pessoa
    let pessoa = {
        nome   : nome,
        idade  : idade,
        peso   : peso,
        altura : altura,
        imc    : imc,
        sit    : sit,
    }

    console.log(pessoa)
    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + " anos"
    dados[3].textContent = pessoa.peso + " Kg"
    dados[4].textContent = pessoa.altura + " m"
    dados[5].textContent = pessoa.imc + " " + pessoa.sit

    // previnir o comportamento padrao
    e.preventDefault()
})

function situacaoDoPeso(imc) {
    let situacao = ''
    if (imc < 18.5) {
        situacao = 'Baixo peso'	
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >= 40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return situacao
}
