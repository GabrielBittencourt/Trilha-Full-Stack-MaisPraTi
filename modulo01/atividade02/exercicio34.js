const prompt = require('prompt-sync')()

let matrice = []

for (let i = 0; i < 5; ++i){
    matrice[i] = []
    for (let j = 0; j < 5; ++j) {
      matrice[i][j] = parseInt(prompt("Digite o elemento da posição [" + (i+1)+"]"+"["+(j+1) + "] : "))
    }
}

for (let i = 0; i < 5; ++i) {
    for(let j = 0; j < 5; ++j){
        if(i != j){
            matrice[i][j] *= matrice[i][i]
        }        
    }
}

console.log("Matriz modificada: ")
console.log(matrice)