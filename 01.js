const parent = {
    property1: 'prop1'
}


const child = Object.create(parent);
child.ownPropery1 = 'prop2'


const checkOwnProperty = function(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) console.log(key + ': ' + obj[key])
    }
}

checkOwnProperty(child)