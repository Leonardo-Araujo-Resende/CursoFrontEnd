//Relogio
const horas = document.querySelector("#hora .valor")
const minutos = document.querySelector("#minuto .valor")
const segundos = document.querySelector("#segundo .valor")

//Styles cores
const root = document.documentElement;


const mode1 = document.querySelector("#mode1")
const mode2 = document.querySelector("#mode2")
const mode3 = document.querySelector("#mode3")
const mode4 = document.querySelector("#mode4")  
const mode5 = document.querySelector("#mode5")

//Funcoes mudar cores
mode1.addEventListener('click', function() {
  const color1 = getComputedStyle(document.querySelector('#mode1')).backgroundColor;
  const color2 = getComputedStyle(document.querySelector('#mode1')).borderColor;

  root.style.setProperty('--cor1', color1); 
  root.style.setProperty('--cor2', color2); 
});
mode2.addEventListener('click', function() {
  const color1 = getComputedStyle(document.querySelector('#mode2')).backgroundColor;
  const color2 = getComputedStyle(document.querySelector('#mode2')).borderColor;

  root.style.setProperty('--cor1', color1); 
  root.style.setProperty('--cor2', color2);  
});
mode3.addEventListener('click', function() {
  const color1 = getComputedStyle(document.querySelector('#mode3')).backgroundColor;
  const color2 = getComputedStyle(document.querySelector('#mode3')).borderColor;

  root.style.setProperty('--cor1', color1); 
  root.style.setProperty('--cor2', color2); 
});
mode4.addEventListener('click', function() {
  const color1 = getComputedStyle(document.querySelector('#mode4')).backgroundColor;
  const color2 = getComputedStyle(document.querySelector('#mode4')).borderColor;

  root.style.setProperty('--cor1', color1); 
  root.style.setProperty('--cor2', color2); 
});
mode5.addEventListener('click', function() {
  const color1 = getComputedStyle(document.querySelector('#mode5')).backgroundColor;
  const color2 = getComputedStyle(document.querySelector('#mode5')).borderColor;

  root.style.setProperty('--cor1', color1); 
  root.style.setProperty('--cor2', color2); 
});

//Funcao inverter cores
botaoInverter = document.querySelector("#inverter");

  botaoInverter.addEventListener("click", function() {

      const cor1 = getComputedStyle(document.documentElement).getPropertyValue('--cor1');
      const cor2 = getComputedStyle(document.documentElement).getPropertyValue('--cor2');

      document.documentElement.style.setProperty('--cor1', cor2);
      document.documentElement.style.setProperty('--cor2', cor1);
  });




const relogio = setInterval(function time(){

    let dataHoje = new Date();

    let horaHoje = dataHoje.getHours();
    let minutoHoje = dataHoje.getMinutes();
    let segundoHoje = dataHoje.getSeconds();

    if(horaHoje < 10) horaHoje = '0' + horaHoje;
    if(minutoHoje < 10) minutoHoje = '0' + minutoHoje;
    if(segundoHoje < 10) segundoHoje = '0' + segundoHoje;


    horas.textContent = horaHoje;
    minutos.textContent = minutoHoje;
    segundos.textContent = segundoHoje;
    

});

