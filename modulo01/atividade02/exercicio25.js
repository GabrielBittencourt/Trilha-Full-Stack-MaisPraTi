const prompt = require('prompt-sync')();

let matrice = []

for (let i = 0; i < 15; ++i){
    matrice[i] = []
    for (let j = 0; j < 20; ++j) {
        matrice[i][j] = parseFloat(prompt("Digite o elemento da posição [" + (i+1)+"]"+"["+(j+1) + "] : "))
    }
}

for (let j = 0; j < 20; ++j) {
    let columnSum = 0
    for (let i = 0; i < 15; i++) {
        columnSum += matrice[i][j]
    }
    console.log("Soma da coluna " + (j+1) + " : " + columnSum)
}