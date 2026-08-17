// Gravador de voz

const statusGravacao=document.getElementById('status-gravacao');
const btnGravador=document.getElementById('btn-gravador');



//  Primeiro evento de mouse mudar a cor para vermelho e mudar o status

btnGravador.addEventListener('pointerdown' , () => {
btnGravador.textContent="🔴 Gravando...Não solte!";
btnGravador.style.backgroundColor="#e74c3c";
statusGravacao.textContent=" Status: Capturando áudio...";
});



// Segundo evento de mouse mudar para a cor original e mudar o status
btnGravador.addEventListener( 'pointerup', () => {
    btnGravador.textContent="🎤 Clique e Segure para Gravar "
    btnGravador.style.backgroundColor="#3498db";
    statusGravacao.textContent=" Status: Gravação concluída e enviada!";




});

// Quando a gravação for parada
gravador.addEventListener('stop', () => {

    // Cria um arquivo de áudio usando as partes que foram gravadas
    const audioBlob = new Blob(partesAudio, {
        type: 'audio/webm'
    });

    // Cria um endereço temporário para o áudio
    const audioURL = URL.createObjectURL(audioBlob);

    // Coloca o áudio no reprodutor
    playerAudio.src = audioURL;

    // Mostra o reprodutor de áudio na tela
    playerAudio.style.display = 'block';

});
