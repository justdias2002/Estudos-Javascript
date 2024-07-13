// Number
console.log(typeof 2);
console.log(typeof 2.1);
console.log(typeof 3112);

// Ops aritmetica com numbers
console.log(2 + 5);
console.log(7 - 5);
console.log(2 * 5);
console.log(10 / 5);

console.log(2 + (4 *2));

// special numbers

console.log(typeof Infinity);
console.log(typeof -Infinity);

console.log(12 * "sds");

console.log(typeof NaN);

// Strings

console.log("Um texto");
console.log('Mais um texto');
console.log('13');


console.log(typeof "Um texto");
console.log(typeof 'Mais um texto');
console.log(typeof '13');

// Simbolols empeciasi em string
console.log("Testando a \nquebra de linha")
console.log("Espaçamento \t de tab")

// concatenação um recurso que une 1 ou mais textos

console.log("Oi, " + "tudo " + "bem?");
console.log(`Testando ' + 'com ' + 'crase`);

// Template string
console.log(`A soma de 2 + 2 é: ${2+2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// Booleans V ou F

console.log(true);
console.log(5 > 20);
console.log(30 > 10);
console.log(typeof false);

console.log(5 <= 5);
console.log(5 > 5);
console.log(10 == 10);
console.log(10 == 9);

console.log(10 != 9);

// identicos

console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// Operdadores logicos && OR e !
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "João" === 1);

console.log(5 > 2 || "João" === 1);

console.log(5 > 2 || 5 > 100);

console.log(!true);

console.log(!5 > 2);

// empty values

console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// mudança de tipos

console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);
 