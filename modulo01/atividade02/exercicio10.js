const prompt = require('prompt-sync')();
let soma = 0
let menor = 9999999999
let media
let pares = 0
let contador = 0
let numero
let controle

do {
    numero = parseInt(prompt('Digite um número: '))    
    
    ++contador
    soma += numero
    media = soma / contador
    if(numero < menor){
        menor = numero
    }
    if(numero % 2 == 0){
        ++pares
    }

    console.log("Somatório: " + soma)
    console.log("Menor: " + menor)
    console.log("Média: " + media)
    console.log("Total de pares: " + pares)

    controle = parseInt(prompt('Deseja continuar? (0)Não | (1)Sim: '))  

} while (controle == 1);
