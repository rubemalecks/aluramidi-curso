
// função para simplesmente tocar o som a partir da id
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla') // pega todas as teclas


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]; //acessar a tecla individualmente
    const instrumento = tecla.classList[1]; // instrumento = 2º item do seu classlist

    const idAudio = `#som_${instrumento}`; //template string -> som_2ªitem_classlist

    tecla.onclick = function () { // quando clicado vai chamar a função para tocar o som
        tocaSom(idAudio);
    }

    tecla.onkeydown = function () {
        tecla.classList.add('ativa')
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}

