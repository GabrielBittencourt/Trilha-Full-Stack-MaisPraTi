const prompt = require('prompt-sync')();

let valor1 = prompt('Digite o primeiro valor: ')
let valor2 = prompt('Digite o segundo valor: ')
let valor3 = prompt('Digite o terceiro valor: ')
let valor4 = prompt('Digite o quarto valor: ')
let valor5 = prompt('Digite o quinto valor: ')

console.log("Tabuada do número " + valor1 + ":")
for(let i = 1; i <= valor1; ++i){
    console.log(i + " X " + valor1 + " = " + valor1*i)
}

console.log("Tabuada do número " + valor2 + ":")
for(let i = 1; i <= valor2; ++i){
    console.log(i + " X " + valor2 + " = " + valor2*i)
}

console.log("Tabuada do número " + valor3 + ":")
for(let i = 1; i <= valor3; ++i){
    console.log(i + " X " + valor3 + " = " + valor3*i)
}

console.log("Tabuada do número " + valor4 + ":")
for(let i = 1; i <= valor4; ++i){
    console.log(i + " X " + valor4 + " = " + valor4*i)
}

console.log("Tabuada do número " + valor5 + ":")
for(let i = 1; i <= valor5; ++i){
    console.log(i + " X " + valor5 + " = " + valor5*i)
}