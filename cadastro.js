document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var cadastrarBtn = document.getElementById("cadastrarBtn");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            console.log("Dados enviados com sucesso!");
            // Aqui você pode adicionar a lógica para enviar os dados para o servidor

            // Opcionalmente, você pode limpar os campos após o envio dos dados
            clearFormFields();

            // Redireciona para o link desejado na mesma janela após o envio bem-sucedido
            window.location.href = 'login.html';
        }
    });

    cadastrarBtn.addEventListener("click", function (event) {
        // Verifica se o formulário está válido antes de redirecionar
        if (!validateForm()) {
            console.log("Por favor, preencha todos os campos corretamente antes de cadastrar.");
            // Impede o comportamento padrão do botão, que é submeter o formulário
            event.preventDefault();
        }
    });

    function validateForm() {
        // ... código de validação do formulário ...

        // Exemplo de validação (substitua pelo seu código de validação real)
        var nome = document.querySelector("#nome").value.trim();
        var email = document.querySelector("#email").value.trim();
        var senha = document.querySelector("#senha").value.trim();
        var cpf = document.querySelector("#cpf").value.trim();

        return nome !== "" && email !== "" && senha !== "" && isValidCPF(cpf);
    }

    function clearFormFields() {
        // Utiliza Bootstrap para obter os campos de formulário
        var nomeInput = document.querySelector("#nome");
        var emailInput = document.querySelector("#email");
        var senhaInput = document.querySelector("#senha");
        var cpfInput = document.querySelector("#cpf");

        // Reseta os campos usando Bootstrap
        nomeInput.value = "";
        emailInput.value = "";
        senhaInput.value = "";
        cpfInput.value = "";
    }

    function isValidCPF(cpf) {
        // Adicione aqui a lógica de validação do CPF
        // Pode usar a função que você já tinha definido isValidCPF ou implementar uma nova
        // ...

        return true; // Retorne true se o CPF for válido
    }
});
