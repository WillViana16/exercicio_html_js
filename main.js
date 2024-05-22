document.getElementById('campos').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne a submissão do formulário
    
    // Obtém os valores dos campos de entrada e os converte para números
    const campoA = parseFloat(document.getElementById('primeiro-campo').value);
    const campoB = parseFloat(document.getElementById('segundo-campo').value);
    
    // Verifica se os valores são números válidos
    /*if (isNaN(campoA) || isNaN(campoB)) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }*/
    
    // Define as mensagens
    const mensagemSucesso = `O número inserido no Campo B "${campoB}" é maior que o número inserido no Campo A "${campoA}".`;
    const mensagemErro = `Esse resultado não é válido`;
    
    // Compara os números e exibe a mensagem apropriada
    if (campoB > campoA) {
        alert(mensagemSucesso);
    } else {
        alert(mensagemErro);
    }
    
    // Opcional: Exibe o formulário no console (para depuração)
    console.log(document.getElementById('campos'));
});
