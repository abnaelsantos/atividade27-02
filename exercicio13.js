let valorProduto = 50.00;
let taxaImposto = 18; // valor em porcentagem
let valorImposto;

function calcularImposto(){
    var calcularImposto = taxaImposto / 100 * (valorProduto);
    valorImposto = calcularImposto;
    return valorImposto;
}

console.log("O valor do imposto do produto é:",calcularImposto(valorImposto),"reias.");