const btnEnviar = document.querySelector("#btnEnviar");
const txtEmail = document.querySelector("#txtEmail");
const email = document.querySelector("#email");
let emailok = false

function enviar(){    
    if(emailok == true){
        alert('Email Cadastrado')
        email.value =''
    }else{
        alert('Digite um email valido para prosseeguir')
    }
}

function validaEmail(){   
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        txtEmail.innerText = "Email Válido"
        emailok=true
    }else{
        txtEmail.innerText = "Email inválido"
        emailok = false
    }
}
