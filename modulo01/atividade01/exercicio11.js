const prompt = require('prompt-sync')();

let valor = prompt('Digite um valor: ')

while(valor != null && valor > 0){
    if(valor % 2 == 0){
        console.log("O número é par")
    }
    else{
        console.log("O número é impar")
    }
    valor = prompt('Digite um valor: ')
}