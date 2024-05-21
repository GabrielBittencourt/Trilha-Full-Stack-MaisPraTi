const prompt = require('prompt-sync')()

let matrice = []

for(let i = 0; i < 12; ++i){
    matrice[i] = []
    for (let j = 0; j < 13; ++j) {
      matrice[i][j] = parseInt(prompt("Digite o elemento da posição [" + (i+1)+"]"+"["+(j+1) + "] : "))
    }
}

console.log("Matriz lida: ")
console.log(matrice)

for(let i = 0; i < 12; ++i) {
    let number = matrice[i][0]
    for (let j = 1; j < 13; ++j) {
      if (Math.abs(matrice[i][j]) > Math.abs(number)) {
        number = matrice[i][j]
      }
    }
    for(let j = 0; j < 13; ++j) {
      matrice[i][j] /= number
    }
}

console.log("Matriz modificada: ")
console.log(matrice)
