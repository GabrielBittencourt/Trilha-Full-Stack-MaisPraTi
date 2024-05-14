var array = []

for(let i = 0; i < 15; ++i){
    if(i == 0 || i == 1){
        array[i] = 1
    }else{
        array[i] = array[i-1] + array[i - 2]
    }
    
}

