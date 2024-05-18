let matrice = [
    [-1, 2, 3, -4, -5, 6, -7, 8],
    [1, -2, 3, 4, -5, -6, -7, -8],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [-1, -2, -3, -4, 5, 6, 7, 8]
  ]

let c = []

for (let i = 0; i < matrice.length; ++i) {
    let count = 0
    for(let j = 0; j < matrice[i].length; ++j){
        if(matrice[i][j] < 0){
            ++count
        }
    }
    c.push(count)
}

console.log("Vetor C contendo a quantidade de elementos negativos em cada linha de M:")
console.log(c)
