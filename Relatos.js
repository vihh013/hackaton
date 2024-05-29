document.addEventListener('DOMContentLoaded', function () {
    let relatosDiv = document.getElementById('relatos');
    let popup = document.getElementById('popup');
    let overlay = document.getElementById('overlay');
    let popupMessage = document.getElementById('popupMessage');

    // Função para mostrar o popup com mensagem
    function mostrarPopup(mensagem) {
        popupMessage.innerText = mensagem;
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }

    // Função para fechar o popup
    function fecharPopup() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }

    // Função para validar e enviar o relato
    function enviarRelato() {
        const nomeInput = document.getElementById('nomeInput').value.trim();
        const enderecoInput = document.getElementById('enderecoInput').value.trim();
        const horarioInput = document.getElementById('horarioInput').value.trim();
        const relatoInput = document.getElementById('relatoInput').value.trim();

        if (nomeInput === '' || enderecoInput === '' || horarioInput === '' || relatoInput === '') {
            mostrarPopup("Todos os campos são obrigatórios!");
            return;
        }

        const relato = {
            nome: nomeInput,
            letra: nomeInput.charAt(0).toUpperCase(),
            texto: relatoInput,
            localizacao: enderecoInput,
            timestamp: horarioInput
        };

        adicionarRelato(relato);

        // Limpa os campos após enviar o relato
        document.getElementById('nomeInput').value = '';
        document.getElementById('enderecoInput').value = '';
        document.getElementById('horarioInput').value = '';
        document.getElementById('relatoInput').value = '';
    }

    // Função para adicionar um relato na lista
    function adicionarRelato(relato) {
        const relatoDiv = document.createElement('div');
        relatoDiv.classList.add('relato');
        relatoDiv.innerHTML = `
            <div class="relato-header">
                <div class="avatar">
                    <span>${relato.letra}</span>
                </div>
                <div class="relato-content">
                    <h3>${relato.nome}</h3>
                    <p>${relato.texto}</p>
                    <small>${relato.localizacao}</small>
                </div>
            </div>
            <div class="relato-footer">
                ${relato.timestamp}
            </div>
        `;
        relatosDiv.prepend(relatoDiv); // Adiciona o relato no início da lista

        // Mostra mensagem de sucesso
        mostrarPopup("Relato enviado com sucesso!");

        // Fecha o popup após 3 segundos
        setTimeout(fecharPopup, 3000);
    }

    // Event listener para o botão de enviar relato
    document.getElementById('enviarRelatoBtn').addEventListener('click', enviarRelato);

    // Event listener para o botão de fechar popup
    document.getElementById('fecharPopupBtn').addEventListener('click', fecharPopup);
});