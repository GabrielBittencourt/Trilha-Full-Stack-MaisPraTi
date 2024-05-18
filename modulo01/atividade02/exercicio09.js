const prompt = require('prompt-sync')()
let salary
let sexo
let total_homens = 0
let total_mulheres = 0
let controle = 0

do {
    salary = parseFloat(prompt('Digite o salario: '))    
    sexo = prompt("Digite o sexo (M ou H): ")
    sexo = sexo.toUpperCase();
    if(sexo == "M"){
        total_mulheres += salary
    }else{
        total_homens += salary
    }
    console.log("Total pago aos homens: " + total_homens)
    console.log("Total pago às mulheres: " + total_mulheres)
    controle = parseInt(prompt("Gostaria de continuar? (0 - Não | 1 - Sim): "))
} while (controle == 1)
