const prompt = require('prompt-sync')()

let matrice = []
let sum = 0
let counter = 0

for(let i = 0; i < 3; ++i){
    matrice[i] = []
    for (let j = 0; j < 3; ++j) {
      matrice[i][j] = parseInt(prompt("Digite o elemento da posição [" + (i+1)+"]"+"["+(j+1) + "] : "))
    }
}

for(let i = 0; i < matrice.length; ++i) {
    sum += matrice[i][matrice.length - 1 - i]
    ++counter
}

sum /= counter

for(let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (i == j) {
       matrice[i][j] *= sum
      }
    }
}

console.log("Matriz modificada: ")
console.log(matrice)