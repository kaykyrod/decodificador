let resultadoCriptografado = '';

function criptografar() {
    let texto = document.querySelector('#campo_texto').value;
    resultadoCriptografado = texto.replaceAll('e', 'enter')
                                  .replaceAll('i', 'imes')
                                  .replaceAll('a', 'ai')
                                  .replaceAll('o', 'ober')
                                  .replaceAll('u', 'ufat');

    document.querySelector('.campo_resultado').style.textAlign = 'start';
    document.querySelector('.campo_resultado').innerHTML = resultadoCriptografado;

    console.log(resultadoCriptografado);
}

function descriptografar() {
    let resultadoDescriptografado = resultadoCriptografado.replaceAll('enter', 'e')
                                                          .replaceAll('imes', 'i')
                                                          .replaceAll('ai', 'a')
                                                          .replaceAll('ober', 'o')
                                                          .replaceAll('ufat', 'u');

    document.querySelector('.campo_resultado').innerHTML = resultadoDescriptografado;

    console.log(resultadoDescriptografado);
}


