//1 Instalacao
console.log(axios)

//2 Primeiro Request

const getData = async () =>{
    try{
        const response = await postFetch.get(
            "/users",
            // 4 - Definindo headers
            {
                headers:{
                    "Content-Type": "application/json",
                    custom: "header",
               }
            }
        );
        return response;
    }
    catch(error){
        console.log(error);
    }
}

//3 Imprimindo dados

const container = document.querySelector(".container")

const printData = async () => {
    const dataUsuarios = await getData();



    dataUsuarios.data.forEach((a) => {
        const divUsuario = document.createElement("div");   

        const nomeUsuario = document.createElement("h2");
        nomeUsuario.textContent = a.name;

        const emailUsuario = document.createElement("p");
        emailUsuario.textContent = a.email;  

        divUsuario.appendChild(nomeUsuario);
        divUsuario.appendChild(emailUsuario);

        container.appendChild(divUsuario);
    });
};

printData();

//5 enviandos dados (post)

const form = document.querySelector("#formulario");

const tituloInput = document.querySelector("#title");

const idadeInput = document.querySelector("#idade");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    postFetch.post("/posts", {
        title: tituloInput.value, 
        idade: idadeInput.value, 
        userId: 10,
    });
})