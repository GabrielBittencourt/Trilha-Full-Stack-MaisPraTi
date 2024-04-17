const prompt = require('prompt-sync')();

let macas = parseInt(prompt('Digite o número de maças: '))

if(macas >= 12){
    macas *= .25
}else{
    macas *= .3
}

console.log("Valor total: R$ " + macas + " reais")