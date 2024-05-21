let matrice = []

for(let i = 0; i < 7; ++i) {
    for(let j = 0; j < 7; ++j){
        if(i == j){
            matrice.push(1)
        }else{
            matrice.push(0)
        }
    }
}

console.log("Matriz identidade 7x7: ")
for(let i = 0; i < matrice.length; i += 7) {
    console.log(matrice.slice(i, i + 7).join(", "));
}
