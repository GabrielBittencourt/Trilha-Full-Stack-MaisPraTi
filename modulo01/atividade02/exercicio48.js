function combineInventory(storeA, storeB){
    let newStoreInventory = {}
  
    for(let key in storeA){
      if(storeA[key]){
        newStoreInventory[key] = storeA[key]
      }
    }
    for(let key in storeB){
        if(storeB[key]){
            if(newStoreInventory[key]){
                newStoreInventory[key] += storeB[key]
            }else{
            newStoreInventory[key] = storeB[key]
            }
        }
  }
  return newStoreInventory
}

let storeAInventory = {Shirts: 1, Socks: 2, ImortalShirt: 3, pants: 4}
let storeBInventory = {Jacket: 1, Gloves: 5, ImortalShirt: 6, pants: 50}

console.log("Inventário único: ", combineInventory(storeAInventory, storeBInventory))  