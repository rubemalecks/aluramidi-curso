function falaCor(idCor) {
    document.querySelector(idCor).play();
}

const listaCores = document.querySelectorAll('.cores'); // pega as cores
let contador = 0;

while (contador < listaCores.length) {
    const cor = listaCores[contador]; // pega A COR
    const corAtual = cor.classList[1]; // pega o classlist

    const idCor = `#audio_${corAtual}`; // template string para mexer com o id

    cor.onclick = function () {
        falaCor(idCor);
    }
    contador += 1;
}

