// Definição das variáveis
const precoCombustivel = 5.49; // Preço do combustível por litro
const consumoMedio = 12; // Consumo médio do carro (km por litro)
const distancia = 300; // Distância da viagem em km

// Cálculo do custo da viagem
const custoViagem = (distancia / consumoMedio) * precoCombustivel;

// Exibir o resultado
console.log(`O custo da viagem será de R$ ${custoViagem.toFixed(2)}`);
