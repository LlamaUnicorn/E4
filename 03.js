const noPrototype = function() {
    return Object.create(null)
}

console.log(noPrototype())