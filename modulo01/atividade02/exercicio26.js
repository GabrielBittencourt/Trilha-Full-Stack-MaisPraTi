let matriceA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
  
let matriceB = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
  
  

var matriceProduct = []
for (var i = 0; i < matriceA.length; ++i){
    matriceProduct[i] = []
        for (var j = 0; j < matriceB[0].length; ++j) {
            var sum = 0
            for (var k = 0; k < matriceA[0].length; ++k) {
                sum += matriceA[i][k] * matriceB[k][j]
            }
            matriceProduct[i][j] = sum
        }
}

console.log("Matriz Produto P:")
console.log(matriceProduct)
    