document.addEventListener("DOMContentLoaded", function() {
    const botao = document.querySelector(".forms button");
    const input = document.querySelector(".forms input");
    const qrCodeImagem = document.querySelector(".imagem img")
    const container = document.querySelector(".container")

    function gerarQrcode(){
        const texto = input.value;
        
        if(!texto){
            botao.innerHTML = "É preciso digitar algo!"
            return;
        }
        
        botao.innerHTML = "Gerando código..."

        qrCodeImagem.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${texto}`

        qrCodeImagem.addEventListener('load', () =>{ //Esperar carregar
            container.classList.add("ativo");
            botao.innerHTML = "Gerar outro QR Code"
        })

    }
    
    //Gerar QR Code
    botao.addEventListener("click", function() {
        gerarQrcode();
    });


    input.addEventListener("keydown", (e) =>{
        if(e.code === "Enter"){
            gerarQrcode();
        }
    })

    //Limpar QR Code
    input.addEventListener("keyup", () =>{
        if(!input.value){
            container.classList.remove("ativo");
        }
    })

  });
  