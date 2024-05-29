document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
 
    form.addEventListener("submit", function(event) {
        event.preventDefault();
 
        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();
 
        if (!isValidEmail(email)) {
            alert("Por favor, insira um endereço de e-mail válido.");
            return;
        }
 
        // Se o e-mail for válido, envie o formulário
        this.submit();
    });
 
    // Função para validar o formato do e-mail
    function isValidEmail(email) {
        // Regex para validar o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});