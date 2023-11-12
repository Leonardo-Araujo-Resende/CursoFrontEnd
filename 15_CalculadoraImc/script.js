//Inputs
const altura = document.querySelector('#height');
const peso = document.querySelector('#weight')

const botaoCalcular = document.querySelector('#calcular')

//Resultados
const resultadoImc = document.querySelector('.titulo-resultado')
const situacao = document.querySelector('.situacao span')

const imcDiv = document.querySelector('.imc')
const classificacaoDiv = document.querySelector('.classificacao')
const obesidadeDiv = document.querySelector('.obesidade')

//Hides
const calculadora = document.querySelector('.calculadora')
const resultado = document.querySelector('.resultado')

//Botao voltar
const botaoVoltar = document.querySelector('.voltar')

//Botao limpas
const botaoLimpar = document.querySelector('#limpar')

botaoLimpar.addEventListener("click", function(){
    altura.value = '';
    peso.value = '';
})

//Verificacao
let boolCriado = 0;

botaoCalcular.addEventListener("click", function(){
    
    valorAltura = altura.value
    valorPeso = peso.value


    const imc = (valorPeso / (valorAltura * valorAltura)).toFixed(2); //2 casas decimais
    resultadoImc.textContent = "Seu IMC: " + imc;

    let situacaoTexto;

    if(imc < 18.5)situacaoTexto = "Cuidado! Você está abaixo do peso ideal!"

    else if(imc >= 18.5 && imc <= 25) situacaoTexto = "Você está no peso ideal!"

    else if(imc > 25 && imc <= 30) situacaoTexto = "Cuidado! Você esta com sobrepeso!"

    else if(imc > 30 && imc <= 35) situacaoTexto = "Cuidado! Você esta com obesidade moderada!"

    else if(imc > 35 && imc <= 40) situacaoTexto = "Cuidado! Você esta com obesidade severa!"

    else situacaoTexto = "Cuidado! Você está com obesidade morbida!"

    situacao.textContent = situacaoTexto

    const linhasImc = ["IMC < 18,5", "18,5 < IMC < 25", "25 < IMC < 30", "30 < IMC < 35", "35 < IMC <40", "IMC > 40"]
    const linhasClassificacao = ["Magreza", "Ideal", "Sobrepreso", "Obesidade", "Obesidade severa", "Obesidade morbida"]
    const linhasObesidade = ["0", "0", "I", "II" , "III", "IIII"]

    if(boolCriado === 0){
        for(const i of linhasImc){
            var aux = document.createElement("p");
            aux.textContent = i;
            imcDiv.appendChild(aux);
        }

        for(const i of linhasClassificacao){
            var aux = document.createElement("p");
            aux.textContent = i;
            classificacaoDiv.appendChild(aux);
        }

        for(const i of linhasObesidade){
            var aux = document.createElement("p");
            aux.textContent = i;
            obesidadeDiv.appendChild(aux);
        }
        boolCriado ++;
    }

    calculadora.classList.toggle("hide");
    resultado.classList.toggle("hide");
})

botaoVoltar.addEventListener("click", function(){
    calculadora.classList.toggle("hide");
    resultado.classList.toggle("hide");
})