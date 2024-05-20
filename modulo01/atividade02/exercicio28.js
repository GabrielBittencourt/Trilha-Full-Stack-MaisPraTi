const prompt = require('prompt-sync')()

let matrice = []

let sumAbove = 0
let sumBelow = 0

for (let i = 0; i < 10; ++i){
    matrice[i] = []
    for (let j = 0; j < 10; ++j) {
      matrice[i][j] = parseFloat(prompt("Digite o elemento da posição [" + (i+1)+"]"+"["+(j+1) + "] : "))
    }
}


for (let i = 0; i < 10; ++i){
    for (let j = 0; j < 10; ++j){
        if (j > i) {
            sumAbove += matrice[i][j]
          } else if (i > j) {
            sumBelow += matrice[i][j]
          }
    }
    
}

console.log("Soma acima da diagonal: " + sumAbove)
console.log("Soma abaixo da diagonal: " + sumBelow)