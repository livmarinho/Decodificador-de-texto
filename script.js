
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

// Função de criptografia
// Função de criptografia
function encryptText(text) {
    return text
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
}

// Função de descriptografia
function decryptText(text) {
    return text
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
}

// Função para validar caracteres acentuados
function containsAccent(text) {
    const accentPattern = /[áéíóúâêîôûàèìòùãõ]/i;
    return accentPattern.test(text);
}

// Função para manipular a criptografia
function handleEncryption() {
    const input = document.querySelector('.text-input').value;
    if (containsAccent(input)) {
        alert('Não é permitido usar acentos. Por favor, digite apenas letras sem acento.');
        return;
    }
    const output = encryptText(input);
    const messageArea = document.querySelector('.mensagem');
    const messageText = document.querySelector('.mensagem-texto');
    const messageParagraph = document.querySelector('.mensagem-paragrafo');

    messageArea.value = output;
    messageText.innerText = 'Texto criptografado:';
    messageParagraph.innerText = 'Parabéns!';

    // Ocultar imagem e texto na área de mensagem
    messageArea.style.backgroundImage = 'none'; // Remove o fundo da imagem
    messageText.style.display = 'block'; // Mostra o texto
    messageParagraph.style.display = 'block'; // Mostra o parágrafo
}

// Função para manipular a descriptografia
function handleDecryption() {
    const input = document.querySelector('.text-input').value;
    if (containsAccent(input)) {
        alert('Não é permitido usar acentos. Por favor, digite apenas letras sem acento.');
        return;
    }
    const output = decryptText(input);
    const messageArea = document.querySelector('.mensagem');
    const messageText = document.querySelector('.mensagem-texto');
    const messageParagraph = document.querySelector('.mensagem-paragrafo');

    messageArea.value = output;
    messageText.innerText = 'Texto descriptografado:';
    messageParagraph.innerText = 'Texto descriptografado com sucesso.';

    // Mostrar imagem e texto na área de mensagem
    messageArea.style.backgroundImage = 'url("img/High quality products 1 1@2x.png")'; // Restaura o fundo da imagem
    messageText.style.display = 'block'; // Mostra o texto
    messageParagraph.style.display = 'block'; // Mostra o parágrafo
}

// Função para copiar o texto para a área de transferência
function copyToClipboard() {
    const messageArea = document.querySelector('.mensagem');
    messageArea.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

// Adiciona eventos aos botões
document.querySelector('.botao-criptografia').addEventListener('click', handleEncryption);
document.querySelector('.botao-descriptografia').addEventListener('click', handleDecryption);
document.querySelector('.botao-copiar').addEventListener('click', copyToClipboard);
