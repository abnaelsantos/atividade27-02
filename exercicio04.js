let estoque = 100;
let pedido = 50;

console.log( producao(estoque, pedido));

function producao(estoque, pedido){
if ( estoque > pedido){
    console.log(" Há estoque na fabrica");
}
else{
    console.log(" Não há estoque na fabrica");
}

}