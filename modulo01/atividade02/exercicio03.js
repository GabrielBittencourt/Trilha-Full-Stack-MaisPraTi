const prompt = require('prompt-sync')();

const distancia = parseInt(prompt('Digite a distância que deseja percorrer: '))
let valor = 0

if(distancia > 200){
    valor = 0.45 * distancia
}else{
    valor = 0.5 * distancia
}
console.log("Valor da passagem: R$ " + valor + ",00")
