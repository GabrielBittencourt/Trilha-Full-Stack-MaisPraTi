const prompt = require('prompt-sync')();

let hours_atividade = parseInt(prompt('Digite quantas hours de atividade durante o mês: '))

if(hours_atividade < 10){
    hours_atividade *= 2
}else if((hours_atividade >= 10) && (hours_atividade < 20)){
    hours_atividade *= 5
} else{
    hours_atividade *=10
}

const valor = hours_atividade * .05

console.log("Total de pontos ganhos: " + hours_atividade)
console.log("Total de dinheiro ganho: R$ " + valor + ",00")
