const prompt = require('prompt-sync')();

const codigo = prompt('Digite o código de origem do produto: ')

switch(true){
    case (codigo == 5 || codigo == 6):
        console.log("Região Nordeste")
        break
    case (codigo == 7 || codigo == 8 || codigo == 9):
        console.log("Região Sudeste")
        break
    case (codigo >= 10 && codigo <= 20):
        console.log("Região Centro-Oeste")
        break
    case (codigo >= 25 && codigo <= 50):
        console.log("Região Nordeste")
        break
    default:
        console.log("Fora dos intervalos - Produto Importado")
}
