//selecao elementos
const formulario = document.querySelector("#multiplication-form")
const numero = document.querySelector("#number")
const multiplicador = document.querySelector("#multiplicador")
const tabuada = document.querySelector("#tabuada-gerada")


//funcoes
const criaTabuada = (numero, multiplicador) =>{
    tabuada.innerHTML = "";

    for( i = 0; i <= multiplicador; i ++){
        const template = `<p class="expressoes"> ${numero} x ${i} = ${numero * i} </p>`;

        const parse = new DOMParser(); //Cria objeto transforma

        const htmlTemplate = parse.parseFromString(template, "text/html"); //Transforma template de text para html

        const row = htmlTemplate.querySelector(".expressoes"); //Seleciona no html criado(linha anterior) a referencia do objeto com id entre parenteses

        tabuada.appendChild(row);   

    }
}

//eventos

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    criaTabuada(numero.value, multiplicador.value);

})