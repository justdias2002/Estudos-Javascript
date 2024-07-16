// Variaveis
let nome = "João";

console.log(nome);

nome = "João Dias";

console.log(nome);

const idade = 21;
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);


// mais sobre variaveis

// let 2teste = "invalido"; 
// let @teste = "invalido";

let a = 3, b = 2, c = 10;
console.log(a * b)

const nomecompleto = "João Dias";

const nomeCompleto = "João Victor";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "ok";

let $teste = "olk"

console.log(_teste, $teste);

// prompt

// const age =  prompt("Digite a sua idade:");

// console.log(`Você tem ${age} anos.`)


// // alert
// alert("Testando")


// math
console.log(Math.max(5, 2, 1 , 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

// console

console.log("Teste");

console.error("erro!")

console.warn("aviso!"); 



// if

const m = 10;

if(m > 5){

    console.log("M maior que 5!")

}

const user = "joão";

if(user === "joão") {
    console.log("Bem vindo João")
}

// else

const loggedIn = false;

if(loggedIn) {
    console.log("Esta autenticado");
}
else {
    console.log("Não esta autenticado");
}


const q = 10
const w = 15

if(q >5 && w > 20) {
    console.log("numeros mais altos")
}
else{
    console.log("Os numeros nao sao mais altos")
}

// else if

if(1 > 2){
    console.log("Teste")
} else if(2 > 3){
    console.log("Teste 2")
}else if(5 > 1){
    console.log("agora Sim")
}

const userName = "João"
const userAge = 21;

if(userName === "José"){
    console.log("Bem vindo josé")
}else if(userName === "João" && userAge === 21){
    console.log("Bem vindo João")
}else{
    console.log("Nenhuma condição foi aceita!")
}

// Estrutura de repitção

let p = 0

while(p < 5){
    console.log(`Repetindo ${p}`)
    p = p + 1;
}

// loop infinito

// let x = 10

//  while(x > 5) {
//      console.log(`Imprimindo ${x}`)
// }

// do while

let o = 9;

do{
    console.log(`valor de o ${o}`);
    o--;
} while(o > 1);

// for 
for(let t = 0; t < 10; t++){
    console.log("repetindo alog....")
}

let r = 0
for(r; r > 0; r = r -1){
    console.log(`O r esta dfiminundi ${r}`);
}