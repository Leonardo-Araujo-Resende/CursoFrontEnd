//Selecoes


//Inputs adicionar
const inputTarefa = document.querySelector("#input-adicionar-tarefa");
const botaoInputTarefa = document.querySelector("#adicionar-tarefa-botao");

//Inputs pesquisar
const inputPesquisa = document.querySelector("#input-pesquisar");
const botaoInputPesquisa = document.querySelector("#pesquisar-botao");

//Lista de Tarefas
const listaTarefas = document.querySelector(".tarefas");

//Botoes Edicao
const botaoConcluidoEdicao = document.querySelector("#concluido-edicao");
const botaoCancelarEdicao = document.querySelector("#cancelar-edicao");

const tarefaEditada = document.querySelector("#titulo-edicao span");
const nomeTarefaEditadaInput = document.querySelector("#nome-tarefa-editar");

//Botao pesquisar
const inputPesquisarTarefa = document.querySelector("#input-pesquisar");


//Container
const containerTarefas = document.querySelector(".container");
const containerEditarTarefas = document.querySelector(".edicao-tarefa");

//Filtro
const filtroTarefas = document.querySelector("#filtro");

//Funções

const adicionarTarefa = (textoTarefa, done = false, save = true) => {
    const tarefa = document.createElement("div");
    tarefa.classList.add("tarefa")
    if(done === true) tarefa.classList.add("done");

    const tarefaTitulo = document.createElement("p");
    tarefaTitulo.textContent = textoTarefa;
    tarefa.appendChild(tarefaTitulo);

    const botaoConcluido = document.createElement("i");
    botaoConcluido.classList.add("fa-solid","fa-check");
    tarefa.appendChild(botaoConcluido);

    const botaoEditar = document.createElement("i");
    botaoEditar.classList.add("fa-solid", "fa-pencil");
    tarefa.appendChild(botaoEditar);

    const botaoExcluir = document.createElement("i");
    botaoExcluir.classList.add("fa-solid","fa-delete-left");
    tarefa.appendChild(botaoExcluir);

    listaTarefas.appendChild(tarefa);

    inputTarefa.value = "";

    //Salvando Local Storage
    if(save)salvaTarefasLocalStorage({nome: textoTarefa, done:false});

    
}

function filtrarTarefas(filtro){
    let todasTarefas = document.querySelectorAll(".tarefa");

    switch(filtro){
        case "todos":
            todasTarefas.forEach(tarefa =>{
                tarefa.style.display = "flex";
            })
            return;

        case "feitos":
            todasTarefas.forEach(tarefa =>{
                if(tarefa.classList.contains("done")) tarefa.style.display = "flex";
                else tarefa.style.display = "none";
            })
            return;

        case "afazer":
            todasTarefas.forEach(tarefa =>{
                if(tarefa.classList.contains("done")) tarefa.style.display = "none";
                else tarefa.style.display = "flex";
            })
            return;
    }
}

function pesquisarTarefa(nome){

    let todasTarefas = document.querySelectorAll(".tarefa");

    if(nome.length === 0){
        todasTarefas.forEach(tarefa =>{
            tarefa.style.display = "flex";
        });
    }
    else{
        todasTarefas.forEach(tarefa =>{
            let tituloTarefa = tarefa.querySelector("p").innerText.toLowerCase();

            if(!tituloTarefa.includes(nome)) tarefa.style.display = "none";
            
        })
    }

}


//Eventos

//Adicionar tarefa
botaoInputTarefa.addEventListener("click", (e)=> {
    if(inputTarefa.value)adicionarTarefa(inputTarefa.value);
})

inputTarefa.addEventListener("keyup", (e)=>{
    if(inputTarefa.value && e.key === "Enter"){
        adicionarTarefa(inputTarefa.value);
    }
})

//Finalizar Excluir
var tituloTarefa;
document.addEventListener("click", (e) =>{

    //Finalizar
    if(e.target.classList.contains("fa-check")){
        e.target.closest("div").classList.toggle("done");

        const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; //Pega array de tarefas ou vazio

        tarefas.forEach(tarefa => {
            if(tarefa.nome === e.target.closest("div").querySelector("p").textContent) tarefa.done = true;
            console.log("a");
        })

        localStorage.setItem("tarefas", JSON.stringify(tarefas)); //Sobscreve com nova tarefa
    }
    //Desfinalizar  
    if(e.target.classList.contains("fa-delete-left")){

        if(e.target.closest("div").classList.contains("tarefa")){
            e.target.closest("div").remove();

            const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; //Pega array de tarefas ou vazio

            tarefas.forEach(tarefa => {
                if(tarefa.nome === e.target.closest("div").querySelector("p").textContent) tarefa.done = false;
            })

            localStorage.setItem("tarefas", JSON.stringify(tarefas)); //Sobscreve com nova tarefa
        }
    }

    if(e.target.classList.contains("fa-pencil")){
        tituloTarefa = e.target.closest("div").querySelector("p").textContent;
        configurarTelaEditarTarefa(tituloTarefa);
        trocarTelaEditarTarefa();
    }

})

// Trocar/Destrocar para editar tarefa 
function trocarTelaEditarTarefa(){
    containerTarefas.classList.toggle("hide");
    containerEditarTarefas.classList.toggle("hide");
}

//Mudar nome tarefa
function configurarTelaEditarTarefa(nomeTarefa){
    tarefaEditada.textContent = nomeTarefa;
    nomeTarefaEditadaInput.value = tituloTarefa;
}

//Botao cancelar edicao
botaoCancelarEdicao.addEventListener("click", ()=> {
    trocarTelaEditarTarefa();
})

//Concluir edicao
botaoConcluidoEdicao.addEventListener("click", ()=>{
    let todasTarefas = document.querySelectorAll(".tarefa p");
    todasTarefas.forEach(tarefa => {
        if(tarefa.textContent === tituloTarefa){
            if(nomeTarefaEditadaInput.value){
                tarefa.textContent = nomeTarefaEditadaInput.value;
                const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; //Pega array de tarefas ou vazio

                tarefas.forEach(tarefa => {
                    if(tarefa.nome === tituloTarefa) tarefa.nome = nomeTarefaEditadaInput.value;
                })

                localStorage.setItem("tarefas", JSON.stringify(tarefas)); //Sobscreve com nova tarefa
            }
            trocarTelaEditarTarefa();
            nomeTarefaEditadaInput.value = "";
            return;
        }
    });
})

//Pesquisar tarefa

inputPesquisarTarefa.addEventListener("keyup",(e)=>{
    const nome = e.target.value;
    pesquisarTarefa(nome.toLowerCase());

})

//filtrar tarefas

filtroTarefas.addEventListener("change", (e) =>{
    filtrarTarefas(e.target.value);

})


//Local Storage

function salvaTarefasLocalStorage(tarefa){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; //Pega array de tarefas ou vazio

    tarefas.push(tarefa); //Adiciona tarefa

    localStorage.setItem("tarefas", JSON.stringify(tarefas)); //Sobscreve com nova tarefa
};

function carregaTarefa(){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; //Pega array de tarefas ou vazio

    tarefas.forEach(tarefa => {
        adicionarTarefa(tarefa.nome, tarefa.done, false);
    })

}

carregaTarefa();