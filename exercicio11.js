let parede = 100; // esse valor é em metros quadrados
let umLitroCobre = 6; // esse valor é em metros quadrados
let quantidadeTinta;

function calcularQuantidadeTinta(){
    var calcularQuantidadeTinta = Math.ceil(parede / umLitroCobre); // math.ceil arredonda para cima.
    quantidadeTinta = calcularQuantidadeTinta;
    return quantidadeTinta;
}

console.log("Será necessário",calcularQuantidadeTinta(quantidadeTinta), "latas de tintas");