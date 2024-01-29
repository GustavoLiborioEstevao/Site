function verificarEmail() {
    var emailInput = document.getElementById("emailCliente").value;
    var senhaInput = document.getElementById("form2Example28").value;

    if (emailInput.includes("@") && !emailInput.startsWith("@") && emailInput.includes(".") && senhaInput.length > 0) {
        
        var nomeUsuario = emailInput.split('@')[0];
        document.getElementById("continuar").innerText = nomeUsuario;
        document.getElementById("continuar").disabled = true;

        // Armazena o email no localStorage
        localStorage.setItem('userEmail', nomeUsuario);
        
        // Redireciona para a página inicial
        window.location.href = "pagina.html";

    } else {
        // Exibe mensagem de erro se o email ou a senha não forem válidos
        document.getElementById("emailIncorreto").innerHTML = "*E-mail ou senha incorretos";
    }
}

function termos(){
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
