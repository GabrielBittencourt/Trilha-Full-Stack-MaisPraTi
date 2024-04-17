const prompt = require('prompt-sync')();

let soma = 0;
let somaPesos = 0;

let numero = parseInt(prompt("Digite uma nota (ou 0 para terminar): "));
let peso = parseInt(prompt("Digite o peso da nota (de 1 a 10): "));

while (numero != 0) {
    soma += numero * peso;
    somaPesos += peso;

    numero = parseInt(prompt("Digite uma nota (ou 0 para terminar): "));
    if (numero == 0){
        break;
    }
    peso = parseInt(prompt("Digite o peso da nota (de 1 a 10): "));
}

if (somaPesos != 0) {
    const mediaPonderada = soma / somaPesos;
    console.log("A média ponderada das notas é: " + mediaPonderada);
} else {
    console.log("Nenhuma nota foi fornecida.");
}
