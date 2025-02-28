let valorAssinatura = 200.00;
let servicoAnual = 12; // quantidade de meses
let valorTotal;

function calcularValorAnual(){
    var calcularValorAnual = valorAssinatura * servicoAnual;
    valorTotal = calcularValorAnual;
    return valorTotal;
}

console.log("O valor da assinatura anual é de:",calcularValorAnual(valorTotal),"reias.");