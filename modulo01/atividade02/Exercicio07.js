const prompt = require('prompt-sync')()

const tipo_carro = parseInt(prompt('Digite o tipo de carro (Popular - 1 | Luxo - 2): '))

if((tipo_carro < 1) || (tipo_carro > 2)){
    console.log("Tipo de carro escolhido inválido")
    return
}

let dias_aluguel = parseInt(prompt('Digite quantos dias de aluguel: '))
let km_percorrido = parseInt(prompt('Digite quantos quilômetros foram percorridos: '))

if(tipo_carro == 1){
    dias_aluguel *= 90
    if(km_percorrido > 100){
        km_percorrido *= .1
    }else{
        km_percorrido *= .2
    }
}

if(tipo_carro == 2){
    dias_aluguel *= 150
    if(km_percorrido > 200){
        km_percorrido *= .25
    }else{
        km_percorrido *= .3
    }
}

const total = dias_aluguel + km_percorrido

console.log("Valor total a ser pago: R$ " + total + ",00")
