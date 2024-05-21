const prompt = require('prompt-sync')()

let vector = []
let option
let sum = 0

for(let i = 0; i < 6; ++i){
      vector[i] = parseInt(prompt("Digite o elemento " + (i+1) + " do vetor: "))
}

option = parseInt(prompt("Digite a opção desejada (1- soma dos elementos | 2- produto dos elementos | 3- média dos elementos | 4- ordene os elementos em ordem crescente | 5- mostre o vetor): "))

switch(option){
    case 1:
        for(let i = 0; i < 6; ++i){
            sum += vector[i]
        }
        console.log("Soma dos elementos do vetor: " + sum)
        return
    case 2:
        sum = vector[0] * vector[1]
        for(let i = 2; i < 6; ++i){
            sum *= vector[i]
        }
        console.log("Multiplicação dos elementos do vetor: " + sum)
        return
    case 3:
        for(let i = 0; i < 6; ++i){
            sum += vector[i]
        }
        sum /= 6
        console.log("Média dos elementos do vetor: " + sum)
        return
    case 4:
        vector.sort()
        console.log("Vetor ordenado: " + vector)
        return
    case 5:
        console.log("Vetor original: " + vector)
        return
    default:
        console.log("Opção não existe")
        return
}