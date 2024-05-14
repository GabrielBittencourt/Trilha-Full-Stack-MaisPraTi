const prompt = require('prompt-sync')();

var array = []


for(let i = 0; i < 20; ++i){
    array[i] = Math.floor(Math.random() * 100)
}

console.log("Números gerados: " + array)
console.log("Vetor ordenado: " + array.sort((a, b) => a - b))

