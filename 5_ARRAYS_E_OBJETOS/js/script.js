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
  c: [],
};
console.log(obj2, obj);
console.log(obj2);

// conhencendo melhor os objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car)); //chave e valor

// mutaçao

const a = {
  name: "João",
};
const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 21;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// Lopps em arrays

const users = ["João", "Matheus", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuario: ${users[i]}`);
}

// push o pop

const array = ["a", "b", "c"];

array.push("d");

console.log(array);
console.log(array.length);

array.pop();
console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);
console.log(array);

// array shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("x", "q", "r");

letters.unshift("z");

console.log(letters);

// indexOf e lastindexof

const mylements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"];

console.log(mylements.indexOf("Maçã"));
console.log(mylements.indexOf("Abacate"));

console.log(mylements.lastIndexOf("Abacate"));

console.log(mylements.lastIndexOf("Mamão"));

// slice

const testSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testSlice.slice(2, 4);

console.log(subArray);

console.log(testSlice);

const subArray2 = testSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testSlice.slice(2);

console.log(subArray4);

// forEach

const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
  console.log(`O numero é ${numero}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post ${post.title}, da categoria: ${post.category}`);
});

// include

const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW");
}

// reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

// trim

const trimTest = "   testando   \n";

console.log(trimTest);

console.log(trimTest.trim());

// padstart

const testPadStart = "1";

const newNumber = testPadStart.padStart(4, "0");

console.log(testPadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// split

const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// join

const fraseDeNovo = arrayDaFrase.join("     ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Telcado", "Monitor"];

const fraseDaCompra = `Precisamos comprar ${itensParaComprar.join(", ")}.`;

console.log(fraseDaCompra);

// repeat

const palavra = "Testando ";

console.log(palavra.repeat(5));

// rest operator (...)

const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(somaInfinita(1, 2, 3));
console.log(somaInfinita(1, 20, 33, 12222, 54023, 238746));

// for...of FOR OF

const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// destructuring em objetos

const userDetails = {
  firstName: "João",
  lastName: "Dias",
  job: "Programador",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// renomear variaveis

const { firstName: primeiroNome } = userDetails;

console.log(firstName);

console.log(userDetails);

// destruturing em arrays

const myList = ["Avião", "submarino", "Carro", "Moto"];

const [veiculoA, veiculoB, veiculoC, veiculoD] = myList;

console.log(veiculoA, veiculoC);

// JSON

const myJSon =
  '{"name": "João", "age": 21, "skills": ["Javascript", "Python"]}';

console.log(myJSon);

// JSon para objs e objs para json

const myObjct = JSON.parse(myJSon);

console.log(myObjct);
console.log(myObjct.name);

// Json invalido

// const badJson = '{"name": João, "age": 21}'

// const myBadObjct = JSON.parse(badJson)

myObjct.isOpenToWork = true;

console.log(myObjct);

const myNewJson = JSON.stringify(myObjct);

console.log(myNewJson);
