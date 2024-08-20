//  setTimeout

console.log("Ainda não executou");

setTimeout(function () {
  console.log("Requisição assincorona");
}, 2000);

console.log("Ainda não executou2");

// setInterval
console.log("Ainda não começou");

// setInterval(function () {
//   console.log("Intervalo assincrono");
// }, 3000);

console.log("Ainda não começou 2");

// promises

const promessa = Promise.resolve(5 + 5);

console.log("Algum codigo");

promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })
  .then((value) => -1)
  .then((value) => console.log(`Agora é ${value}`));

console.log("Outro codigo");

// falha ba promise

Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores inválidos!");
    }
  })
  .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// reject promise
function checkNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O numero é maior que 10`);
    } else {
      reject(new Error("Numero muito baixo"));
    }
  });
}

const a = checkNumber(20);

const b = checkNumber(10);



a.then((v) => console.log(`O resultado é: ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

b.then((v) => console.log(`O resultado é: ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);