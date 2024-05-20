const prompt = require('prompt-sync')()

let number
let pares = []
let impares = []

for (let i = 0; i < 30; ++i){
      number = parseInt(prompt("Digite um elemento: "))
      if(number % 2 == 0){
        pares.push(number)
      }else{
        impares.push(number)
      }
      if(pares.length == 5){
        console.log("Vetor Pares cheio! Números: " + pares)
        pares = []
      }
      if(impares.length == 5){
        console.log("Vetor Impares cheio! Números: " + impares)
        impares = []
      }
}

console.log("Versão final dos vetores: ")
console.log("Pares: " + pares)
console.log("Impares: " + impares)