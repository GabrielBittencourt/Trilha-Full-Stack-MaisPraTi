const prompt = require('prompt-sync')()

var array = []


for(let i = 0; i < 7; ++i){
    array[i] = prompt("Digite o nome de uma pessoa: ")
}

console.log(array.reverse())

