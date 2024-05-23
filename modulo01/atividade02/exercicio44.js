let obj = {
    name: "Gabriel",
    age: 33,
    sex: "masculino",
    role: "desenvolvedor"
};

function stringCount(obj) {
    let count = 0
    for(let key in obj) {
        if(typeof obj[key] === 'string'){
            ++count
        }
    }
    return count
}

console.log("Número de chaves do tipo String no objeto: " + stringCount(obj))