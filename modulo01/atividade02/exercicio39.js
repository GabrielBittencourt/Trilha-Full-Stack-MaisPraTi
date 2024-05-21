const prompt = require('prompt-sync')()

let vector = []
let finalVector = []

for(let i = 0; i < 10; ++i){
      vector[i] = parseFloat(prompt("Digite o elemento " + (i+1) + " do vetor: "))
      if(!isNaN(vector[i]) && vector[i] > 0){
        finalVector.push(vector[i])
        console.log("Entrei")
      }
}

console.log("Vetor final com números positivos: " + finalVector)
