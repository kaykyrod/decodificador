let resultadoCriptografado = '';

// Função de Criptografia
function criptografar() {
    let texto = document.querySelector('#campo_texto').value;
    resultadoCriptografado = texto.replaceAll('e', 'enter')
                                  .replaceAll('i', 'imes')
                                  .replaceAll('a', 'ai')
                                  .replaceAll('o', 'ober')
                                  .replaceAll('u', 'ufat');

        document.querySelector('.campo_resultado').style.textAlign = 'start';
        document.querySelector('.campo_resultado').textContent = resultadoCriptografado;
        // Ativa o botão de copiar
        document.querySelector('.botao_copiar').disabled = false; 
}

// Função de Descriptografia
function descriptografar() {
    let texto = document.querySelector('#campo_texto').value;
    let resultadoDescriptografado = texto.replaceAll('enter', 'e')
                                         .replaceAll('imes', 'i')
                                         .replaceAll('ai', 'a')
                                         .replaceAll('ober', 'o')
                                         .replaceAll('ufat', 'u');

    document.querySelector('.campo_resultado').style.textAlign = 'start';
    document.querySelector('.campo_resultado').innerHTML = resultadoDescriptografado;
    // Ativa o botão de copiar
    document.querySelector('.botao_copiar').disabled = false;
}

// Função de Copiar o resultado
function copiar() {
    let textoCopiado = document.querySelector('.campo_resultado').textContent;
    navigator.clipboard.writeText(textoCopiado);

}
