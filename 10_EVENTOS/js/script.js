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

thirdBtn.addEventListener("click", () =>{
    console.log("Evento removido")
})