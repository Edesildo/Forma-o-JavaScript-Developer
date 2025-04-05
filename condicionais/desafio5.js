let peso = 100;
let altura = 1.90;

let imc = peso / Math.pow(altura, 2);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc < 30) {
        classificacao = 'Acima do peso';
    } else if (imc < 40) {
        classificacao = 'Obeso';
    } else {
        classificacao = 'Obesidade Grave';
    }

    console.log(`Seu IMC é ${imc.toFixed(2)} - Classificação: ${classificacao}`);