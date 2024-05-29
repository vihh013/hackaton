document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('loginForm');
 
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário para validação
 
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
 
        if (nome === "" || email === "" || senha === "" || endereco === "") {
            alert("Por favor, preencha todos os campos.");
        } else if (!validateEmail(email)) {
            alert("Por favor, insira um email válido.");
        } else {
            alert("Formulário enviado com sucesso!");
            form.submit(); // Envia o formulário se tudo estiver correto
        }
    });
 
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});




