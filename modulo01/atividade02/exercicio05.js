const prompt = require('prompt-sync')();

const jogada = parseInt(prompt('Digite sua jogada (1 - Pedra | 2 - Papel | 3 - Tesoura): '))

if((jogada < 1) || (jogada > 3)){
    console.log("Jogada escolhida inválida")
    return
}

const maquina = Math.floor(Math.random() * 3) + 1
console.log(maquina)

if((jogada == 1) && (maquina == 1)){
    console.log("Você jogou Pedra e a máquina jogou Pedra, portanto empate")
}else if((jogada == 1) && (maquina == 2)){
    console.log("Você jogou Pedra e a máquina jogou Papel, portanto a máquina venceu")
}else if((jogada == 1) && (maquina == 3)){
    console.log("Você jogou Pedra e a máquina jogou Tesoura, portanto você venceu")
}

if((jogada == 2) && (maquina == 1)){
    console.log("Você jogou Papel e a máquina jogou Pedra, portanto você venceu")
}else if((jogada == 2) && (maquina == 2)){
    console.log("Você jogou Papel e a máquina jogou Papel, portanto empate")
}else if((jogada == 2) && (maquina == 3)){
    console.log("Você jogou Papel e a máquina jogou Tesoura, portanto a máquina venceu")
}

if((jogada == 3) && (maquina == 1)){
    console.log("Você jogou Tesoura e a máquina jogou Pedra, portanto a máquina venceu")
}else if((jogada == 3) && (maquina == 2)){
    console.log("Você jogou Tesoura e a máquina jogou Papel, portanto você venceu")
}else if((jogada == 3) && (maquina == 3)){
    console.log("Você jogou Tesoura e a máquina jogou Tesoura, portanto empate")
}

