class Pessoa {
    nome;
    peso;
    altura;


    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    calcularIMC(peso,altura){
        return this.peso / Math.pow(this.altura,2);
    }
}

const pessoa = new Pessoa('Ed',70,1.75);
console.log(pessoa.calcularIMC());

