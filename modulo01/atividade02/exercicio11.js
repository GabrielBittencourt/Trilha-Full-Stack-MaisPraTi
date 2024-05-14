const prompt = require('prompt-sync')();

let termo = parseInt(prompt('Digite o primeiro termo da PA: '))
let razao = parseInt(prompt('Digite a razão da PA: '))
let soma = 0

for(let i = 0; i < 10; ++i){
    soma += termo
    console.log("Termo " + (i+1) + ": " + termo)
    termo += razao
}

console.log("Soma total dos termos: " + soma)
