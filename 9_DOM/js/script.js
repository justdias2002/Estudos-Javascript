console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// selecionandp por tag

const listItens = document.getElementsByName("li");

console.log(listItens);

// selecionando elemento por id

const title = document.getElementById("title");

console.log(title);

// selecionando elemento por classe

const products = document.getElementsByClassName("products");

console.log(products);

// selecionando os elementos para o css

const productsQuerry = document.querySelectorAll(".products");

console.log(productsQuerry);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

//  insertBefore
    
    const p = document.createElement('p')

    console.log(p)