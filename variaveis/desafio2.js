/* 
   Faça um programa para calcular o valor de uma viagem.
   O programa deverá ter 5 variáveis, sendo elas:

   1 - Preço da Gasolina;
   2 - Preço do Etanol;
   3 - O tipo de combustível que está no veículo;
   4 - Gasto médio de combustível do carro por KM;
   5 - Distância em KM da viagem.
*/

const precoGasolina = 4;  // Preço por litro da Gasolina
const precoEtanol = 6;    // Preço por litro do Etanol
const kmPorLitros = 12;   // Consumo médio do carro (km por litro)
const distanciaEmKm = 279; // Distância total da viagem em km

let tipoCombustivel = 'Gasolina'; // Tipo de combustível no veículo

// Cálculo do custo da viagem
let custoViagem;

if (tipoCombustivel === 'Gasolina') {
    custoViagem = (distanciaEmKm / kmPorLitros) * precoGasolina;
} else {
    custoViagem = (distanciaEmKm / kmPorLitros) * precoEtanol;
}

// Exibir o resultado com duas casas decimais
console.log(`O custo da viagem será de R$ ${custoViagem.toFixed(2)}`);
