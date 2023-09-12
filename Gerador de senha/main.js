let bolinha = document.getElementById('input__container')
const botaoGerar = document.getElementById('btn__container')

let spanSenha = document.getElementById('quantidade__caracteres')
let spanSenhaGerada = document.getElementById('senha__valor')

let charset = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM?!@#$%&"
let novaSenha =""
let caramba = document.getElementById('divSome')
let charitas = document.querySelector('.senha__valor')

spanSenha.innerHTML = bolinha.value

bolinha.oninput = function(){
    spanSenha.innerHTML = this.value;
}

function geradorDeSenha(){
    let pass = ""
    for(let i = 0, n = charset.length; i < bolinha.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    caramba.classList.remove('hide')
    caramba.classList.add('senha')
    spanSenhaGerada.innerHTML = pass;
    novaSenha = pass
}

function copiaSenha(){
    alert("Sua senha foi copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}


