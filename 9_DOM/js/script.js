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

const p = document.createElement("p");

console.log(p);

const header = title.parentElement;

header.insertBefore(p, title);

//  appendChild

const navlinks = document.querySelector("nav ul");

const li = document.createElement("li");

navlinks.appendChild(li);

// replacechild

const h2 = document.createElement("h2");

h2.textContent = "Meu novo titulo";

header.replaceChild(h2, title);

// createTextNode

const mytext = document.createTextNode("Agora vamos colocar mais um titulo");
console.log(mytext);

const h3 = document.createElement("h3");

h3.appendChild(mytext);

console.log(h3);

mainContainer.appendChild(h3);

//  trabalhando com atributions

const firstLink = navlinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "blank");

// altura e largura]

const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// posiçao do elemento

// const product1 = products[0];

// console.log(product1.getBoundingClientRect());


// alterando estilos com js

mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#333"
mainContainer.style.paddingBottom = "#15px"

// estilos em HTML colection

for(const li of listItens) {
    li.style.backgroundColor = "blue"
}