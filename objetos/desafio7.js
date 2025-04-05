class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }
    //const custoViagem = (distancia / consumoMedio) * precoCombustivel;
    calcularPercusso(distancia,precoCombustivel){
         return distancia * this.gastoMedioPorKm * precoCombustivel;   
    }
    
}

const uno = new Carro('Fiat','Preto',1/12);
const palio = new Carro('Fiat','Azul',1/10);
console.log(uno.calcularPercusso(70,5));
console.log(palio.calcularPercusso(70,5))