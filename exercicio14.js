let temperaturaDia1 = 37;
let temperaturaDia2 = 25;
let temperaturaDia3 = 30;
let temperaturaDia4 = 33;
let temperaturaDia5 = 32;
let temperaturaDia6 = 31;
let temperaturaDia7 = 20;
let mediaTemperatura;

function calcularMedia(){
    var calcularMedia = temperaturaDia1 + temperaturaDia2 + temperaturaDia3 + temperaturaDia4 +
    temperaturaDia5 + temperaturaDia6 + temperaturaDia7;
    mediaTemperatura = calcularMedia / 7;
    return mediaTemperatura.toFixed(2); // toFixed arredonda o número em 2 duas casa decimais.
}

console.log("A média das temperaturas e de:",calcularMedia(mediaTemperatura),"graus.");