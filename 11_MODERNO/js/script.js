// var , let, const

var x = 10;
var y = 20;

if (y > 10) {
  var x = 5;
  console.log(x);
}
console.log(x);

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}
console.log(a);

function logName() {
  const name = "Perdo";
  console.log(name);
}

const name = "João";
logName();

console.log(name);

// arrow function
const sum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    return `Hello ${name}`;
  } else {
    return "Hello";
  }
};
console.log(greeting("João"));
console.log(greeting());

const user = {
  name: "Theo",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 1000);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 1000);
  },
};
user.sayUserName();
user.sayUserNameArrow();

// filter
const arr = [1, 2, 3, 4, 5, 6];
const highNumbers = arr.filter((n) => {
  if (n > 3) {
    return n;
  }
});
console.log(highNumbers);

const users = [
  { name: "João", available: true },
  { name: "Sol", available: false },
  { name: "Maria", available: true },
  { name: "Felipe", available: false },
  { name: "Matheus", available: true },
];

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

// map

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira ", price: 150, category: "Eletro" },
  { name: "Fogão", price: 1999.99, category: "Eletro" },
  { name: "Calça", price: 69.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

// template literals
const userName = "João";
const age = 21;
console.log(`O nome do usuario é ${userName} e ele tem ${age} anos`);

// destructig

const fruits = ["Maçã", "Mamão", "Abacate"];

const [f1, f2, f3] = fruits;
console.log(f1, f3);

const productDetails = {
  name: "Mouse",
  price: 39.9,
  category: "Periferico",
  color: "Cinza",
};

const { name: productName, price, category, color } = productDetails;

console.log(
  `O nome do produto é ${productName} e ele custa ${price} e é da cor ${color}`
);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a1, 4];

console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 100000, price: 49000 };

const car = { ...carName, ...carBrand, ...otherInfos };

console.log(car);

// 8 classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa gola V", 20);

console.log(shirt.productWithDiscount(10));
