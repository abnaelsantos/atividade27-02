let valorProduto = 1000.00;
let desconto = 10; // Valor do desconto é de 10%
let valorPago;

function valorFinal(){
    var valorFinal = (desconto / 100) * valorProduto;
    valorPago = valorFinal;
    return valorPago;
}

console.log("Valor final com desconto é de:",valorFinal(valorPago), "reias");
