// criando funçao

function minhafuncao() {
  console.log("Testando");
}

minhafuncao();

const minhafuncaoEmVariavel = function () {
  console.log("Função variavel");
};

minhafuncaoEmVariavel();

function funcaoComParametro(txt) {
  console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("Alguma coisa");

funcaoComParametro("Alguma outra função");

// return

const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);
console.log(soma(c, d));

const z = 15;
const x = 30;
const v = 45;
const n = 60;

function calcula(v1, v2) {
  return v1 * v2;
}

const result = calcula(x, v);

console.log(result);

// escopo da funçao

let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`Y dentro da fução é: ${y}`);
}

testandoEscopo();

console.log(`Y fora da função é : ${y}`);

testandoEscopo();

// nested scopes

let m = 10;
function escopoAninhado() {
  let m = 20;

  if (true) {
    let m = 30;

    if (true) {
      let m = 40;

      console.log(m);
    }
    console.log(m);
  }
  console.log(m);
}

escopoAninhado();

console.log(m);

// arrow function

const testArrow = () => {
  console.log("Esta é uma arrow function");
};

testArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Par");
    return;
  }

  console.log("Impar");
};

parOuImpar(5);

parOuImpar(10);

// arrow funciton

const raizQuadrada = (x) => {
  return x * x;
};
console.log(raizQuadrada(4));

const raizQuadradaZ = (x) => x * x;

console.log(raizQuadradaZ(5));
console.log(raizQuadradaZ(9));

// parametro opcional

const multiplication = function (m, n) {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};

console.log(multiplication(5));
console.log(multiplication(2, 8));

const greeting = (name) => {
  if (!name) {
    console.log("Olá!");
    return;
  }
  console.log(`Olá ${name}!`);
};

greeting();
greeting("João");

// argumento default

const customGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}!`;
};
console.log(customGreeting("João"));
console.log(customGreeting("João", "Bom dia!"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("Testando");
repeatText("Testando a repetição *", 5);

// closure

function someFunction() {
  let txt = "Alguma coisa";

  function display() {
    console.log(txt);
  }
  display();
}

someFunction();
