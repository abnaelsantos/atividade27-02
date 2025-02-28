let prato1 = 50.00;
let prato2 = 25.00;
let prato3 = 35.00;
let prato4 = 42.00;
let prato5 = 55.00;
let gorjeta = 10; // valor em porcentagem
let valorConta;

function calcularConta(){
    var calcularConta = prato1 + prato2 + prato3 + prato4 + prato5;
    valorConta = calcularConta + calcularConta * (gorjeta / 100);
    return valorConta;
}

console.log("O valor da conta com o a gorjeta é de:",calcularConta(valorConta), "reias");