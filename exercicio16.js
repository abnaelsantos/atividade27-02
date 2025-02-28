let quantidadePessoas = 20;
let cadaPacoteAtendePessoa = 4;
let quantidadePacotes;

function calcularQuantidadePipoca(){
    var calcularQuantidadePipoca = quantidadePessoas / cadaPacoteAtendePessoa;
    quantidadePacotes = calcularQuantidadePipoca;
    return quantidadePacotes;
}

console.log("Será necessário",calcularQuantidadePipoca(quantidadePacotes),"pacotes de pipocas.");