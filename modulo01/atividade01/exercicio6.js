const prompt = require('prompt-sync')();

let ladoa = parseInt(prompt('Digite o lado A: '))
let ladob = parseInt(prompt('Digite o lado B: '))
let ladoc = parseInt(prompt('Digite o lado C: '))

if(ladoa < ladob + ladoc && ladob < ladoa + ladoc && ladoc < ladoa + ladob){
    if((ladoa==ladob && ladoa!=ladoc) || (ladoa == ladoc && ladoa!=ladob) || (ladob == ladoc && ladoa!=ladob)){
        console.log("Triângulo Isósceles")
    }
    if(ladoa!=ladob && ladoa != ladoc && ladob != ladoc){
        console.log("Triângulo Escaleno")
    }
    if(ladoa==ladob && ladoa==ladoc){
        console.log("Triângulo Equilátero")
    }
}
else{
    console.log("Não é um triângulo")
}