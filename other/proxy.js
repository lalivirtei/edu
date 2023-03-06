// -- 1
let userUno = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, reciever) {
      if (prop in target) {
        return Reflect.get(target, prop, reciever);
      } else {
        throw new Error('No such prop, dude!');
      }
    }
  });
}

userUno = wrap(userUno);

// console.log(user.name); // John
// console.log(user.age); // Ошибка: такого свойства не существует

// -- 2

let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, reciever) {
    if (prop < 0) {
      // return Reflect.get(target, (target.length + prop), reciever);
      return target[target.length + +prop]
    } else {
      return Reflect.get(...arguments);
    }
  }
});

// console.log(array[-1]); // 3
// console.log(array[-2]); // 2

// -- 3

function makeObservable(target) {
  let handlers = Symbol('handlers');
  target[handlers] = [];

  target.observe = function (handler) {
    target[handlers].push(handler);
  }

  return new Proxy(target, {
    set(target, prop, value, reciever) {
      let success = Reflect.set(...arguments);
      if (success) {
        target[handlers].forEach(handler => {
          handler(prop, value);
        });
        return true;
      } else {
        return false;
      }
    }
  })
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.observe(() => console.log('works!'))

user.name = "John"; // выводит: SET name=John
user.surname = "Obidaya";