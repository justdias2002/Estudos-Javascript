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
  console.log("Evento 1");
});

btnInsindeContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

// removendo padrao
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("Não alterou a pagina");
});

// eventos de teclado
document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});
document.addEventListener("keydown", (e) => {
  console.log(`Apertou a tecla ${e.key}`);
});

// eventos de Mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
  console.log("Pressionou o Botão");
});

mouseEvents.addEventListener("mouseup", () => {
  console.log("Soltou o Botão");
});

mouseEvents.addEventListener("dbclick", () => {
  console.log("Clique duplo");
});

// movimento do mouse

document.addEventListener("mousemove", (e) => {
  // console.log(`No eixo x: ${e.x}`)
  // console.log(`No eixo y: ${e.y}`)
});

// evento de foco
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log("Em foco");
});

// debounce
const debounce = (f, delay) => {
  let timeout;

  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      f.apply(arguments);
    }, delay);
  };
};

window.addEventListener("mousemove", debounce(()=> {
    console.log("Executando a cada 400ms")
}, 400))