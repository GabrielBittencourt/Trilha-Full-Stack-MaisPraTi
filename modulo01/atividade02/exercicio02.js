const prompt = require('prompt-sync')()

const velocidade_carro = parseInt(prompt('Digite a velocidade do carro: '))

if(velocidade_carro > 80){
    let multa = 5 * (velocidade_carro - 80)
    console.log("Você foi multado. Valor da multa: R$ " + multa + ",00")
}

