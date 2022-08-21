const obj = {
    string: 'string',
}


const checkProperties = function(property, obj) {
    return property in obj;
}

console.log(checkProperties('string', obj))
console.log(checkProperties('str', obj))