// Lista de emails e códigos armazenados
const storedEmails = ['email1@example.com', 'email2@example.com'];
const storedCodes = ['code123', 'code456'];

// Função para verificar o login
function login(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const codeInput = document.getElementById('code');
  const errorMessage = document.getElementById('errorMessage');

  const email = emailInput.value;
  const code = codeInput.value;

  // Verifica se o email e o código estão armazenados
  const index = storedEmails.indexOf(email);
  if (index !== -1 && storedCodes[index] === code) {
    // Login bem-sucedido, redireciona para a página principal
    window.location.href = 'pagina_principal.html';
  } else {
    // Login inválido, exibe mensagem de erro
    errorMessage.textContent = 'Email ou código inválido.';
  }
}

// Adiciona o evento de submit ao formulário
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', login);
