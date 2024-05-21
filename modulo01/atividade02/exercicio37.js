const prompt = require('prompt-sync')()

let template = []
let student = []

for(let i = 0; i < 20; ++i){
      template[i] = prompt("Digite a letra da questão certa: ")
}

for(let i = 0; i < 50; ++i){
    count = 0
    for(let j = 0; j < 20; ++j){
        student[j] = prompt("Digite o gabarito do aluno " + (i+1) + ": ")
        if(student[j] == template[j]){
            ++count
        }
    }
    console.log("Número de acertos do aluno " + (i+1) +": " + count)
    if(count >= 12){
        console.log("APROVADO")
    }else{
        console.log("REPROVADO")
    }
}

