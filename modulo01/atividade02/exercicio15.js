const prompt = require('prompt-sync')()

var array = []


for(let i = 0; i < 10; ++i){
    array[i] = parseInt(prompt("Digite o " + (i +1) + "° número: "))
}

for(let i = 0; i < 10; ++i){
    if(array[i] % 2 == 0){
        console.log(array[i] + " é par e está na posição " + i)        
    }
}


