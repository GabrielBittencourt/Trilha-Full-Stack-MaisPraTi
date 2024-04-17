const prompt = require('prompt-sync')();

const codigo = prompt('Digite o código de origem do produto: ')

if(codigo == 5 || codigo == 6){
    console.log("Região Nordeste")
}else if(codigo == 7 || codigo == 8 || codigo == 9){
    console.log("Região Sudeste")
}else if(codigo >= 10 && codigo <= 20){
    console.log("Região Centro-Oeste")
}else if(codigo >= 25 && codigo <= 50){
    console.log("Região Nordeste")
}else{
    console.log("Fora dos intervalos - Produto Importado")
}