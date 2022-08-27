var paleta = document.querySelector('input');
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = paleta.value;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {

pincel.clearRect(0, 0, 600, 400);
}

var raio = 19;
var fatorCrescimento = 0;

function atualizaTela() {

limpaTela();

if(raio > 30) {

    fatorCrescimento = -1;
    
} else if (raio < 20) {

    fatorCrescimento = 1;

}

raio = raio + fatorCrescimento;

desenhaCirculo(300, 200, raio);

}

setInterval(atualizaTela, 20);