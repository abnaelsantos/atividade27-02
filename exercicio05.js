let precoCombustivel = 5.50;
let distancia = 100;
let consumo = 10;
let valorCombustivel;

function custoCombustivel ( valor){
    var custoCombustivel = (distancia / consumo) * precoCombustivel;
    var valorCombustivel = custoCombustivel;
    return valorCombustivel;
}

console.log(" O preço gasto foi de ", custoCombustivel(valorCombustivel), " reias.");
