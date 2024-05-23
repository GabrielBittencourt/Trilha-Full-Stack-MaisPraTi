let obj1 = {
    name: "Gabriel",
    age: 33,
    sex: "masculino"
};

let obj2 = {
    name: "Gabriel Bittencourt",
    height: 1.67,
    weight: 64,
};

function newObj(obj1, obj2) {
    let objNew = {}
    for(let key in obj1) {
        objNew[key] = obj1[key]
    }
    for(let key in obj2) {
        objNew[key] = obj2[key]
    }
    return objNew
}

console.log(newObj(obj1, obj2))