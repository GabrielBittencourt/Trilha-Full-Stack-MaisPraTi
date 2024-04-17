const prompt = require('prompt-sync')();

const celsius = prompt('Digite a temperatura em Celsius: ')

let fahrenheit = celsius * 1.8 + 32

console.log("Temperatura em Fahrenheit: " + fahrenheit)

