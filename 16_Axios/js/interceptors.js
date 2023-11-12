// Requisicao
//Função executa antes de fazer a requisicao
postFetch.interceptors.request.use(
    function(config){
        console.log("Antes da requisicao...");
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

//Resposta
//Função executa antes de chegar a resposta
postFetch.interceptors.response .use(
    function(response){
        console.log("Antes da resposta...");
        return response;
    },
    function(error){
        console.log("Depois da resposta")
        return Promise.reject(error);
    }
)