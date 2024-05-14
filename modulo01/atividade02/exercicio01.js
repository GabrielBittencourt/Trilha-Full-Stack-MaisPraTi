const prompt = require('prompt-sync')();

const cigarros_por_dia = prompt('Digite a quantidade de cigarros fumados por dia: ')
const anos_fumando = prompt('Digite a quantidade de anos que fuma: ')

let total_cigarros = cigarros_por_dia * anos_fumando * 365
let hours_perdidas = total_cigarros / 6 
let dias_perdidos = Math.floor(hours_perdidas / 24)



console.log("Dias de vida perdidos: " + dias_perdidos)

