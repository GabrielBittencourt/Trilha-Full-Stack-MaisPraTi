let array = ["name", "role", "sex", "sex", "sex", "role"]
let obj = {}

for(let i = 0; i < array.length; ++i){
    let str = array[i]
    if(obj[str]){
      ++obj[str]
    }else{
      obj[str] = 1
    }
}

console.log(obj)