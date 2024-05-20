const prompt = require('prompt-sync')()

let matrice = []

for (let i = 0; i < 5; ++i){
    matrice[i] = []
    for (let j = 0; j < 5; ++j) {
      matrice[i][j] = parseFloat(prompt("Digite o elemento da posição [" + (i+1)+"]"+"["+(j+1) + "] : "))
    }
}

let sumLine = 0
let sumRow = 0
let sumDiag = 0
let totalSum = 0

for(let i = 0; i < 5; ++i){
    sumLine +=  matrice[3][i]
    sumRow += matrice[i][1]
}
for(let i = 0; i < 5; ++i){
    for(let j = 0; j < 5; ++j){
        if(i == j){
            sumDiag += matrice[i][j]
        }
        totalSum += matrice[i][j]
    }
}

console.log("Soma da linha 4: " + sumLine)
console.log("Soma da coluna 2: " + sumRow)
console.log("Soma da diagonal principal: " + sumDiag)
console.log("Soma total: " + totalSum)