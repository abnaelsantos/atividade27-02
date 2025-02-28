let quantidadeAlimento = 5; // Valor em kg
let quantidadeUsada = 250; // valor em gramas
let quatidadeRefeicao;

function calcularQuantidadeRefeicao(){
    var calcularQuantidadeRefeicao = (quantidadeAlimento * 1000) / 250;
    quatidadeRefeicao = calcularQuantidadeRefeicao;
    return quatidadeRefeicao;
}

console.log("Será servido ",calcularQuantidadeRefeicao(quatidadeRefeicao),"refeições");