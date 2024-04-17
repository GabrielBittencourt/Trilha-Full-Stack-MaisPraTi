const prompt = require('prompt-sync')();

let valor1 = prompt('Digite o primeiro valor: ')
let valor2 = prompt('Digite o segundo valor: ')

if(valor1 == valor2){
    console.log("Erro! Valores iguais")
}else if(valor1 > valor2){
    console.log(valor2, valor1)
}else{
    console.log(valor1, valor2)
}