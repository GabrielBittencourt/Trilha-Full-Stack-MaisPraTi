const prompt = require('prompt-sync')()

let matrice = []
let result = []

let number
let counter = 0

for (let i = 0; i < 30; ++i) {
    result[i] = []
    for (let j = 0; j < 30; ++j) {
      result[i][j] = null
    }
  }

for (let i = 0; i < 30; ++i){
    matrice[i] = []
    for (let j = 0; j < 30; ++j) {
      matrice[i][j] = parseInt(prompt("Digite o elemento da posição [" + (i+1)+"]"+"["+(j+1) + "] : "))
    }
}

number = parseInt(prompt("Agora digite o valor: "))


for(let i = 0; i < 30; ++i){
    for(let j = 0; j < 30; ++j){
        if(matrice[i][j] == number){
            ++counter
        }else{
           result[i][j] = matrice[i][j]
        }
    }
}

console.log("Matriz criada com os valores diferentes: ")
console.log(result)
console.log("Valores iguais ao número digitado: " + counter)