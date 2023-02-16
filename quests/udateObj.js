function updateObj(obj1, obj2) {
    for(const key in obj1) {
        if(obj2.hasOwnProperty(key)) {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}

obj1 = {
    foo: '1',
    bar: '2'
}

obj2 = {
    bar: '3',
    some: 'pigaliza'
}

console.log(updateObj(obj1, obj2)); // {foo: 'foo', bar: 'foo'}