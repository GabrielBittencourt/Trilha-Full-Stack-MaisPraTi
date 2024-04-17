const prompt = require('prompt-sync')();

const eleitores = prompt('Digite o total de eleitores: ')
let validos = prompt('Digite o total de votos válidos: ')
let nulos = prompt('Digite o total de votos nulos: ')
let branco = prompt('Digite o total de votos em branco: ')

validos = (validos * 100) / eleitores
nulos = (nulos * 100) / eleitores
branco = (branco * 100) / eleitores

console.log("Percentual de votos válidos: " + validos + "%")
console.log("Percentual de votos nulos: " + nulos + "%")
console.log("Percentual de votos em branco: " + branco + "%")