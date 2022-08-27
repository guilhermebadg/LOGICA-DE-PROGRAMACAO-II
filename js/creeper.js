var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = 'darkgreen';
pincel.fillRect(200, 50, 350, 300);

pincel.fillStyle = 'black';
pincel.fillRect(250, 110, 90, 90);
pincel.fillRect(410, 110, 90, 90);
pincel.fillRect(340, 200, 70, 100);
pincel.fillRect(300, 250, 40, 100);
pincel.fillRect(410, 250, 40, 100);

