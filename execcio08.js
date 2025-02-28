let valorPremio = 5000;
let quantidadePessoas = 5;
let valorReceber;

function calcularValorreceber(){
    var calcularValorreceber = valorPremio / quantidadePessoas;
    valorReceber = calcularValorreceber;
    return valorReceber;
}

console.log("Cada pessoa irá receber o valor de:", calcularValorreceber(valorReceber)," reias");