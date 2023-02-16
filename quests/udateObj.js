function updateObj (obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    keys1.forEach(function(item, i) {
        keys2.forEach(function(secondItem, secondI) {
            if (keys1[i] === keys2[secondI]) {
                obj1[item] = obj2[secondItem];
            }
        })
    });

    return obj1;
}

obj1 = {
    foo: 'foo',
    bar: 'bar'
}

obj2 = {
    bar: 'foo',
    some: 'somesome'
}

console.log(updateObj(obj1, obj2)); // {foo: 'foo', bar: 'foo'}