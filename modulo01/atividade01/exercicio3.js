const prompt = require('prompt-sync')();

let numero1 = parseInt(prompt('Digite o primeiro número: '))
let numero2 = parseInt(prompt('Digite o segundo número: '))
let numero3 = parseInt(prompt('Digite o terceiro número: '))
let numero4 = parseInt(prompt('Digite o quarto número: '))

numero4 = numero1 + numero2 + numero3
numero1 += 25
numero2 *= 3
numero3 *= .12

console.log("Primeiro número mais 25: " + numero1)
console.log("Segundo número triplicado: " + numero2)
console.log("Terceiro número com 12% do valor original: " + numero3)
console.log("Quarto número com a soma dos três primeiros originais: " + numero4)