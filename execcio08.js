let valorPremio = 5000;
let quantidadePessoas = 5;
let valorreceber;

function calcularValorreceber(){
    var calcularValorreceber = valorPremio / quantidadePessoas;
    var valorreceber = calcularValorreceber;
    return valorreceber;
}

console.log("Cada pessoa irá receber o valor de:", calcularValorreceber(valorreceber)," reias");