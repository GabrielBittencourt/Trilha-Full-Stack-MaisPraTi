const prompt = require('prompt-sync')()

var name = []
var age = []


for(let i = 0; i < 9; ++i){
    name[i] = prompt("Digite o " + (i +1) + "° nome: ")
    age[i] = parseInt(prompt("Digite a " + (i +1) + "ª idade: "))
}

console.log("Menores de idade:")

for(let i = 0; i < 9; ++i) {
    if(age[i] < 18){
        console.log(name[i] + " têm " + age[i] + " anos")
    }
}

