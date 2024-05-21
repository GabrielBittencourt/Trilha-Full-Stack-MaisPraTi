const prompt = require('prompt-sync')()

let matrice = []
let sl = []
let sc = []


for(let i = 0; i < 5; ++i){
    matrice[i] = []
    for (let j = 0; j < 5; ++j) {
      matrice[i][j] = parseFloat(prompt("Digite o elemento da posição [" + (i+1)+"]"+"["+(j+1) + "] : "))
    }
}

for(let i = 0; i < 5; ++i){
    let sumLine = 0
    let sumRow = 0
    for(let j = 0; j < 5; ++j){
        sumLine +=  matrice[i][j]
        sumRow += matrice[j][i]
    }
    sl.push(sumLine)
    sc.push(sumRow)
}

console.log("Matriz criada: ")
console.log(matrice)
console.log("Soma das linhas: " + sl)
console.log("Soma das colunas: " + sc)
