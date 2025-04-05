let formaPagamento = 0;
let preco = 100;
let precoFinal;

if (formaPagamento === 0) {
    // Débito - 10% de desconto
    precoFinal = preco * 0.90;
    console.log("Pagamento no débito. Preço com 10% de desconto: R$" + precoFinal.toFixed(2));

} else if (formaPagamento === 1) {
    // Dinheiro ou Pix - 15% de desconto
    precoFinal = preco * 0.85;
    console.log("Pagamento em dinheiro ou pix. Preço com 15% de desconto: R$" + precoFinal.toFixed(2));

} else if (formaPagamento === 2) {
    // Cartão até 2x - preço normal
    precoFinal = preco;
    console.log("Pagamento em até 2x no cartão. Preço: R$" + precoFinal.toFixed(2));

} else {
    // Acima de 2x - 10% de juros
    precoFinal = preco * 1.10;
    console.log("Pagamento acima de 2x. Preço com 10% de juros: R$" + precoFinal.toFixed(2));
}