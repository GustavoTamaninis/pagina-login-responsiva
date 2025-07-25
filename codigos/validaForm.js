cxEnvio = document.querySelector('#entrar');
cxRecuperarSenha = document.querySelector('#recuperar-senha');

cxEmail = document.querySelector('#email');
cxSenha = document.querySelector('#senha');

cxEmailVazio = document.querySelector('#email-vazio');
cxEmailInvalido = document.querySelector('#email-invalido');
cxSenhaVazia = document.querySelector('#senha-vazia');
cxSenhaInvalida = document.querySelector('#senha-invalida');

cxEnvio.addEventListener('click', function(e){
    e.preventDefault();
})

cxRecuperarSenha.addEventListener('click', function(e){
    e.preventDefault();
})

cxEmail.addEventListener('focusout', function(e){
    valEmail();
})

cxSenha.addEventListener('focusout', function(e){
    valSenha();
})

function valEmail(){
    let email = cxEmail.value;
    cxEmailVazio.style.display = valCampoVazio(email);
    if(valCampoVazio(email) == 'block'){
        cxEmailInvalido.style.display = "none";
    }else{
        cxEmailInvalido.style.display = valFormatEmail(email);
    }
}

function valSenha(){
    let senha = cxSenha.value;
    cxSenhaVazia.style.display = valCampoVazio(senha);
    if(valCampoVazio(senha) == 'block'){
        cxSenhaInvalida.style.display = 'none';
    }else{
        cxSenhaInvalida.style.display = valFormatSenha(senha);
    }
}

function valCampoVazio(campo){
    if(campo == ""){
        return "block";
    }else{
        return "none";
    }
}

function valFormatEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(email)){
        return "none";
    }else{
        return "block";
    }
}

function valFormatSenha(senha){
    if(senha.length < 8){
        return 'block';
    }else{
        return 'none';
    }
}
