const prompt = require('prompt-sync')()

let template = []
let gambler = []
let count

for(let i = 0; i < 13; ++i){
      template[i] = parseInt(prompt("Digite um número sorteado: "))
}

for(let i = 0; i < 100; ++i){
    count = 0
    for(let j = 0; j < 13; ++j){
        gambler[j] = parseInt(prompt("Digite um número apostado pelo apostador " + (i+1) + ": "))
        for(let k = 0; k < 13; ++k){
            if(gambler[j] == template[k]){
                ++count
            }
        }
    }
    console.log("Número de acertos do apostador " + (i+1) +": " + count)
    if(count == 13){
        console.log("Parabéns, você venceu!")
    }
}

