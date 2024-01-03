$(document).ready(function() {
    var emails = ["email1@example.com", "email2@example.com"]; // Insira aqui os emails válidos
    var codigos = ["codigo1", "codigo2"]; // Insira aqui os códigos correspondentes

    $("#loginForm").submit(function(event) {
        event.preventDefault();
        var email = $("#emailInput").val();
        var senha = $("#passwordInput").val();

        // Verifica se o email e a senha correspondem
        var index = emails.indexOf(email);
        if (index !== -1 && codigos[index] === senha) {
            // Redirecionar para a página principal
            window.location.href = "pagina_principal.html";
        } else {
            // Exibir mensagem de erro
            $("#message").text("Email ou senha incorretos");
        }
    });
});
 
