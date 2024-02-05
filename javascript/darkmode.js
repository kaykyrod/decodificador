let temaPadrao = true;

function alterarTema() {

    if (temaPadrao) {
        // Modo Escuro
        let aluraLogo = document.querySelector('.logo_alura');
        let corTema = document.querySelector('.botao_tema');
        let exclamacao = document.querySelector('.exclamacao_aviso');
    
        aluraLogo.src = 'assets/alura_logo_dark.png';
        corTema.src = 'assets/cor_tema_dark.png';
        exclamacao.src = 'assets/exclamacao_dark.png';
    
        let r = document.querySelector(':root');
        r.style.setProperty('--cor-fundo', '#343A40');
    
        document.querySelector('#campo_texto').style.color = '#FFFFFF'
        document.querySelector('.campo_resultado').style.backgroundColor = '#868E96';
        document.querySelector('.texto_erro2').style.backgroundColor = '#868E96';
        document.querySelector('.botoes_aviso').style.color = '#E9ECF8';
        document.querySelector('.botao_criptografar').style.backgroundColor = '#052051';
        document.querySelector('.botao_descriptografar').style.color = '#FFFFFF';
        document.querySelector('.botao_descriptografar').style.backgroundColor = '#495057';
        document.querySelector('.botao_descriptografar').style.borderColor = '#FFFFFF';
        document.querySelector('.rodape').style.backgroundColor = '#052051';
    } else {
        // Modo Claro
        let aluraLogo = document.querySelector('.logo_alura');
        let corTema = document.querySelector('.botao_tema');
        let exclamacao = document.querySelector('.exclamacao_aviso');
    
        aluraLogo.src = 'assets/alura_logo.png';
        corTema.src = 'assets/cor_tema.png';
        exclamacao.src = 'assets/exclamacao.png';
    
        let r = document.querySelector(':root');
        r.style.setProperty('--cor-fundo', '#EFF1FA');
    
        document.querySelector('#campo_texto').style.color = '#0A3871'
        document.querySelector('.campo_resultado').style.backgroundColor = '#FFFFFF';
        document.querySelector('.texto_erro2').style.backgroundColor = '#FFFFFF';
        document.querySelector('.botoes_aviso').style.color = '#495057';
        document.querySelector('.botao_criptografar').style.backgroundColor = '#0A3871';
        document.querySelector('.botao_descriptografar').style.color = '#0A3871';
        document.querySelector('.botao_descriptografar').style.backgroundColor = '#D8DFE8';
        document.querySelector('.botao_descriptografar').style.borderColor = '#0A3871';
        document.querySelector('.rodape').style.backgroundColor = '#052051';
    }

    temaPadrao = !temaPadrao;

}
