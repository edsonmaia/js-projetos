/* Aula 19 de JS Conversor de Temperaturas */

// input range
let celsius = document.querySelector('#celsius')
let fahrenheit = document.querySelector('#fahrenheit')
let kelvin = document.querySelector('#kelvin')

// input number
let numeroC = document.querySelector('#numeroC')
let numeroF = document.querySelector('#numeroF')
let numeroK = document.querySelector('#numeroK')

numeroC.value = celsius.value
numeroF.value = fahrenheit.value
numeroK.value = kelvin.value

function atualizaC() {
    numeroC.value = celsius.value
}

/* FORMULAS DE CONVERSAO 
celsius_fahrenheit = (celsius * 9/5) + 32
celsius_kelvin = celsius + 273.15

fahrenheit_celsius = (fahrenheit - 32) * 5/9
fahrenheit_kelvin = (fahrenheit - 32) * 5/9 + 273.15

kelvin_celsius = kelvin - 273.15
kelvin_fahrenheit = (kelvin - 273.15) * 9/5 + 32
*/

function atualizaF() {
    let celsius_fahrenheit = (celsius.value * 9/5) + 32
    numeroF.value = celsius_fahrenheit.toFixed(2)
}
 
function atualizaK() {
    let celsius_kelvin = parseFloat(celsius.value) + 273.00
    numeroK.value = parseFloat(celsius_kelvin).toFixed(2)
}

function zerar() {
    celsius.value = 0.0
    numeroC.value = celsius.value
    numeroF.value = fahrenheit.value
    numeroK.value = kelvin.value
}
