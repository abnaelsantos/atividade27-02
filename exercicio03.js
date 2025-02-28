var nome = "Abnael";
let distanciaPercorrida = 100; // valor em km
let tempoGasto = 10; // valor em minutos
let velocidadeMedia;

function calcularDistancia(carro) {
    var calcularDistancia = distanciaPercorrida / tempoGasto;
    var velocidadeMedia = calcularDistancia;
    return velocidadeMedia;
}

console.log(" A velociade do motorista",nome, "é de:", calcularDistancia(velocidadeMedia),"km/h");