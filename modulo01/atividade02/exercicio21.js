const prompt = require('prompt-sync')()

function calculateIdealWeight(height, sex) {
    let ideal
    if(sex.toLowerCase() === 'masculino'){
        ideal = 72.7 * height - 58
    }else if(sex.toLowerCase() === 'feminino'){
        ideal = 62.1 * height - 44.7
    }else{
        console.log("Sexo invalido")
    }
    return ideal.toFixed(2)
}

let sex = prompt("Digite o sexo da pessoa (masculino) ou (feminino): ")
let height = parseFloat(prompt("Digite a altura da pessoa: "))

const idealWeight = calculateIdealWeight(height, sex)

console.log("Peso ideal: " + idealWeight)