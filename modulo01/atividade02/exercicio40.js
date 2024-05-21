const prompt = require('prompt-sync')()

let template = []
let gambler = []
let count

for(let i = 0; i < 5; ++i){
      template[i] = parseInt(prompt("Digite o "  + (i+1) + "º numero  do gabarito: "))
}

for(let i = 0; i < 50; ++i){
    count = 0
    for(let j = 0; j < 5; ++j){
        gambler[j] = parseInt(prompt("Digite o "  + (j+1) + "º numero  do apostador: "))
        for(let k = 0; k < 5; ++k){
            if(gambler[j] == template[k]){
                ++count
            }
        }
    }    
    if(count == 5){
        console.log("Ganhador")
    }
}


