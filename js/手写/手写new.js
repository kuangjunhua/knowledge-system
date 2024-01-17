function Person(name, age){
  this.name = name;
  this.age = age;
}

// const p = new Person("Tom",18);
// console.log(p);

function newFunction(constructor,...rest){
  if(typeof constructor !== 'function'){
    throw new Error('new operator function the firdt param must be a function');
  }

  var obj = Object.create(constructor.prototype);
  var result = constructor.apply(obj,rest);
  return result && typeof result === 'object' ? result : obj;
}

const p = newFunction(Person,"Tom",18);
console.log(p);