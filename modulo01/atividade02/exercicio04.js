const prompt = require('prompt-sync')()

const lado_a = parseInt(prompt('Digite o tamanho do primeiro segmento: '))
const lado_b = parseInt(prompt('Digite o tamanho do segundo segmento: '))
const lado_c = parseInt(prompt('Digite o tamanho do terceiro segmento: '))


if((lado_a + lado_b > lado_c) && (lado_a + lado_c > lado_b) && (lado_c + lado_b > lado_a)){
    console.log("É possível formar um triângulo com os segmentos fornecidos")
}else{
    console.log("Não é possível formar um triângulo com os segmentos fornecidos")
}

