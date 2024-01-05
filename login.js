// Emails e seus códigos
const emails = {
  "email1@example.com": "codigo1",
  "email2@example.com": "codigo2",
  //...
  "email20@example.com": "codigo20"
};

// Função de login
function login(event) {
  event.preventDefault();

  // Obter os valores de email e código
  const email = document.getElementById("emailInput").value;
  const code = document.getElementById("codeInput").value;

  // Verificar se o email existe e se o código corresponde
  if (emails.hasOwnProperty(email) && emails[email] === code) {
    // Redirecionar para a página principal
    window.location.href = "pagina_principal.html";
  } else {
    // Exibir mensagem de erro
    alert("Email ou código inválido");
  }
}

// Adicionar o evento de submit ao formulário
const form = document.getElementById("loginForm");
form.addEventListener("submit", login);
