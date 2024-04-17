const prompt = require('prompt-sync')();

let nota = parseInt(prompt('Digite uma nota: '))
let contador = 0
let soma = 0
let media

while(nota != 0){
    soma += nota
    ++contador
    nota = parseInt(prompt('Digite uma nota: '))
}

media = soma / contador

console.log("Média: " + media)