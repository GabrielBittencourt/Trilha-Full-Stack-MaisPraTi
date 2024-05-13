const prompt = require('prompt-sync')();

const jogada = parseInt(prompt('Tente descobrir o número entre 1 e 5: '))

if((jogada < 1) || (jogada > 5)){
    console.log("Número escolhido inválido")
    return
}

const maquina = Math.floor(Math.random() * 5) + 1

if(jogada == maquina){
    console.log("Você acertou o número!")
}else{
    console.log("Você errou o número, o número era " + maquina)
}

