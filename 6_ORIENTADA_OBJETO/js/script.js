//  metodos

const animal = {
  nome: "Bob",
  latir: function () {
    console.log("Au Au");
  },
};

console.log(animal.nome);

animal.latir();

// aprofundamento em metodos

const pessoa = {
  nome: "João",

  getNome: function () {
    return this.nome;
  },
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Joaquim");

console.log(pessoa.getNome());

// prototype

const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(Object.getPrototypeOf(arr));

// mais sobre prototype

const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySencondObjetct = Object.create(myObject);

console.log(mySencondObjetct);
console.log(mySencondObjetct.a);

// classes basicas
const cachorro = {
  race: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.race = "Pastor Alemão";

console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.race = "Bulldog";

console.log(bulldog);
console.log(bulldog.patas);

// funçao com classe funçao construtora

function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachorro("Bob", "Vira-lata");

console.log(bob);

const jack = criarCachorro("Jack", "Doberman");

console.log(jack);

// funçoes com classse

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// classe de metodos na funçao costrutora
Cachorro.prototype.uivar = function () {
  console.log("Auuuuuu!");
};

console.log(Cachorro);
husky.uivar();

// classes es6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}
const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);
console.log(Object.getPrototypeOf(jeff));

// mais sobre classes

class Camimhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
  }
}

const scania = new Camimhao(6, "Vermelho");

console.log(scania);
scania.descreverCaminhao();

Camimhao.motor = 4;

const c2 = new Camimhao(6, "Azul");

console.log(c2);

console.log(c2.motor);

Camimhao.prototype.motor = 4.0;

const c3 = new Camimhao(6, "Azul");

console.log(c3.motor);

// Override

class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const joao = new Humano("João", 21);

console.log(joao);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não Definida";

console.log(joao.idade);

console.log(Humano.prototype.idade);
