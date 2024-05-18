const prompt = require('prompt-sync')();

let matrice = []

let vector = []

for (let i = 0; i < 6; ++i){
    matrice[i] = []
    for (let j = 0; j < 6; ++j) {
        matrice[i][j] = parseFloat(prompt("Digite o elemento da posição [" + (i+1)+"]"+"["+(j+1) + "] : "))
    }
}

let value = parseFloat(prompt("Digite o número a ser multiplicado: "))

for (let i = 0; i < 6; ++i){
    for (let j = 0; j < 6; ++j){
        vector.push(matrice[i][j] * value)
    }
    
}

console.log("Vetor com as multiplicações: ")
console.log(vector)