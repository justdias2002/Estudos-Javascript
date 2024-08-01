// arrays
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["João", true, 2, 4.12, []];

console.log(itens);

// acessar individualmente
const arr = ["a", "b", "c", "d", "e"];

console.log(arr[0]);

console.log(arr[4]);

// propiedades

const number = [4, 6, 7];

console.log(number.length);

const myName = ["João"];

console.log(myName.length);

// metodos
const otherNumbers = [1, 2, 3];

const allNumbers = number.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);
console.log(text.indexOf("g"));

// objetos
const person = {
  name: "João",
  age: 21,
  job: "Programador",
};

console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.name.length);

// criando e deletando propriedades

const car = {
  engine: 2.0,
  brand: "VW",
  model: "Tiguan",
  km: 20000,
};
console.log(car);

car.doors = 4;
console.log(car);

delete car.km;

console.log(car);

// mais sobres objetos

const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: []
};
console.log(obj2, obj);
console.log(obj2);

// conhencendo melhor os objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));


console.log(Object.entries(car)); //chave e valor

// mutability
