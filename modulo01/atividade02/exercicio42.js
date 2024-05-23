let data = {
    number: 33,
    string: "Gabriel",
    array: []
};

function newData(data){
    let dataNew = {
        string: data.string
    }
    return dataNew
}

console.log(newData(data))