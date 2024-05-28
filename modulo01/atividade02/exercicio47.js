function transformedObject(obj, func){
    let newObj = {}
  
    for(let key in obj){
      if(obj[key]){
        newObj[key] = func(obj[key])
      }
    }
    return newObj
  }

let originalObject = {a: 1, b: 2, c: 3, d: 4}
  
function sum(x){
    return x + 2
}

let newObject = transformedObject(originalObject, sum)
console.log("Objeto Original:", originalObject)
console.log("Objeto Transformado:", newObject)
  