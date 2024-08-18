// strict
// "use strict";

// opa = teste;

const opa = "teste";

// const undefiend = 10;

// delete [].length;

// console.log()

let a = 1;
let b = 2;

if (a === 1) {
  a = b + 2;
}

console.log(a);

for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}

if (a > 5) {
  a = 25;
}

console.log(a);

// debugger

let c = 1;
let d = 2;

if (c === 1) {
  c = d + 2;
}
// debugger;

for (let i = 0; i < d; i++) {
  c = c + 2;
}

console.log("Executou o Loop");

// debugger;

if (c > 5) {
  c = 25;
}

// Tratamento de dados

function checkNumber(n) {
  const result = Number(n);

  if (Number.isNaN(result)) {
    console.log("Valor incorreto!");
    return;
  }
  console.log("Valor correto!");
  return result;
}
checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("Teste");


// excptions
let x = 10

if( x != 11) {
    //throw new Error("O valor x não pode ser diferente de 11")
}

// try catch

try {
    const soma = x + y
} catch (error) {
    console.log(`Erro no Programa: ${erro}`)
}

// finally
try {
    const value = checkNumber("asd");
  
    if (!value) {
      throw new Error("Valores inválidos!");
    }
  } catch (error) {
    console.log(`Opa, aconteceu um problema: ${error}`);
  } finally {
    console.log("O Código foi executado!");
  }
  

// assertion

function checkArray(arr) {
    if (arr.length === 0) {
      throw new Error("O array precisa ter elementos!");
    } else {
      console.log(`O array tem ${arr.length} elementos!`);
    }
  }
  
  // checkArray([]);
  
  checkArray([1, 2, 3]);