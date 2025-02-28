let valorProduto = 1000.00;
let desconto = 10; // Valor em porcentagem
let valorPago;

function valorFinal(){
    var valorFinal = valorProduto - valorProduto * (desconto / 100) ;
    valorPago = valorFinal;
    return valorPago;
}

console.log("Valor final com desconto é de:",valorFinal(valorPago), "reias");
