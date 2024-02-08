let resultadoCriptografado = '';

function criptografar() {
    let texto = document.querySelector('#campo_texto').value;
    resultadoCriptografado = texto.replaceAll('e', 'enter')
                                  .replaceAll('i', 'imes')
                                  .replaceAll('a', 'ai')
                                  .replaceAll('o', 'ober')
                                  .replaceAll('u', 'ufat');

    document.querySelector('.campo_resultado').style.textAlign = 'start';
    document.querySelector('.campo_resultado').textContent = resultadoCriptografado;

    return resultadoCriptografado;
}


function descriptografar() {
    let resultadoDescriptografado = resultadoCriptografado.replaceAll('enter', 'e')
                                                          .replaceAll('imes', 'i')
                                                          .replaceAll('ai', 'a')
                                                          .replaceAll('ober', 'o')
                                                          .replaceAll('ufat', 'u');

    document.querySelector('.campo_resultado').innerHTML = resultadoDescriptografado;

    return resultadoDescriptografado;
}




function copiar() {
    let teste = document.querySelector('.campo_resultado').value;
    console.log(teste);


    /*
    let teste = criptografar();
    let teste2 = descriptografar();
    console.log(teste, teste2);
    //let textoCopiado = document.querySelector('.campo_resultado').value;

    //navigator.clipboard.writeText(textoCopiado);

    //alert('texto copiado:' + textoCopiado);*/
}
