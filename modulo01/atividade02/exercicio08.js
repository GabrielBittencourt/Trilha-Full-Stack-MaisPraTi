const prompt = require('prompt-sync')();

let horas_atividade = parseInt(prompt('Digite quantas horas de atividade durante o mês: '))

if(horas_atividade < 10){
    horas_atividade *= 2
}else if((horas_atividade >= 10) && (horas_atividade < 20)){
    horas_atividade *= 5
} else{
    horas_atividade *=10
}

const valor = horas_atividade * .05

console.log("Total de pontos ganhos: " + horas_atividade)
console.log("Total de dinheiro ganho: R$ " + valor + ",00")
