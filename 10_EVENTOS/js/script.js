// adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Clicou aqui");
});

// removendo eventos

const secondBtn = document.querySelector("#btn");

function imprimirImagem() {
  console.log("teste");
}

secondBtn.addEventListener("click", imprimirImagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirImagem);
});

// argumento especial chamado event

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// propragaçao

const containerBtn = document.querySelector("#btn-container");
const btnInsindeContainer = document.querySelector("#div-btn");


containerBtn.addEventListener("click", () => {
  console.log("Evento 1")
})

btnInsindeContainer.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("Evento 2")
})