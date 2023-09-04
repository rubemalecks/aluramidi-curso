
const tel = document.querySelector('input[type="tel"]');

const listaTeclas = document.querySelectorAll('input[type="button"]')

for (let i = 0; i < listaTeclas.length; i++){
    const tecla = listaTeclas[i];

    tecla.onclick = function () {
        tel.value = tel.value+tecla.value
    }
}