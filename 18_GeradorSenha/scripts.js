

//Selector 

const botaoCliqueAqui = document.querySelector("#ajuda span");
const divGeradorSenha = document.querySelector(".gerador-senha");

const botaoCriarSenha = document.querySelector("#criar-senha");
const divSenhaCriada = document.querySelector(".senha-gerada");

const botaoCopiarSenha = document.querySelector("#copiar-senha");
const inputQntCaracteres = document.querySelector("#qnt-caracteres");

const paragrafoSenhaGerada = document.querySelector("#senha-gerada-tela");

//Checkboxs
const letrasCheckBox = document.querySelector("#letras");
const numerosCheckBox = document.querySelector("#numeros");
const simbolosCheckBox = document.querySelector("#simbolos");

//Funcoes

function noParameters(){
    botaoCriarSenha.textContent = "Selecione alguma opção!";

    setTimeout(()=>{
        botaoCriarSenha.textContent = "Criar senha";
    }, 2000)
}


function getNumero(){
    const numeros = "0123456789";
    return numeros[Math.floor(Math.random() * numeros.length)];
}

function getLetra(){
    const letras = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    return letras[Math.floor(Math.random() * letras.length)];
}

function getSimbolo(){
    const simbolos = "!@#$%&*|[]{}<>:;+-"
    return simbolos[Math.floor(Math.random() * simbolos.length)];
}


function gerarSenha(tamanhoSenha, getNumero, getLetra, getSimbolo){

    let senhaGerada = "";

    let geradores = [];

    if(numerosCheckBox.checked) geradores.push(getNumero);
    if(letrasCheckBox.checked) geradores.push(getLetra);
    if(simbolosCheckBox.checked) geradores.push(getSimbolo);

    if(geradores.length === 0){
        noParameters();
        return "";
    }

    for(i = 0; i < tamanhoSenha; i ++){
        senhaGerada += geradores[Math.floor(Math.random() * geradores.length)]();
    }

    return senhaGerada;
}

//Eventos

botaoCliqueAqui.addEventListener("click", (e)=>{
    divGeradorSenha.classList.toggle("hide");
})

botaoCriarSenha.addEventListener("click", (e)=>{
    
    if(inputQntCaracteres.value){
        if(inputQntCaracteres.value <= 0) inputQntCaracteres.value = 10;
        if(inputQntCaracteres.value > 40) inputQntCaracteres.value = 40;
        const senhaCriada = gerarSenha(inputQntCaracteres.value ,getNumero, getLetra, getSimbolo);

        if(senhaCriada !== ""){
            paragrafoSenhaGerada.textContent = senhaCriada;
            divSenhaCriada.classList.remove("hide");
        }
    }
    
})

botaoCopiarSenha.addEventListener("click", (e)=>{
    

    const password = paragrafoSenhaGerada.textContent;

    navigator.clipboard.writeText(password).then(()=>{
        botaoCopiarSenha.textContent = "Senha copiada!";

        setTimeout(() => {
            botaoCopiarSenha.textContent = "Copiar"
            divSenhaCriada.classList.add("hide");
        }, 2000);

    })


})