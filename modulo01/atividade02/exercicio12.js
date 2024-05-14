//Starting from now on in English

var array = []

for(let i = 0; i < 10; ++i){
    if(i == 0 || i == 1){
        array[i] = 1
    }else{
        array[i] = array[i-1] + array[i - 2]
    }
    
}


for(i = 0; i < 10; ++i){
    console.log(array[i])    
}

