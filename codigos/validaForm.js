formulario = document.querySelector('#formulario');

cxEmail = document.querySelector('#email');
cxSenha = document.querySelector('#senha');
cxErroEmail = document.querySelector('#erro-email')
cxErroSenha = document.querySelector('#erro-senha');

cxEmail.addEventListener('focusout', function(e){
    validarEmail();
})

cxSenha.addEventListener('focusout', function(e){
    validarSenha();
})

function validarEmail(){
    email = cxEmail.value;
    cxErroEmail.style.display = validarCampoVazio(email);
}

function validarSenha(){
    senha = cxSenha.value;
    cxErroSenha.style.display = validarCampoVazio(senha);
}

function validarCampoVazio(campo){
    if(campo == ""){
        return "block";
    }else{
        return "none";
    }
}