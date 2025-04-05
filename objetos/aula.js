class Pessoa {
    nome;
    idade;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

}


const pessoa = new Pessoa('Edesildo',24);

const pessoa2 = new Pessoa('Jose',34);

console.log(pessoa2)

pessoa.descrever();

console.log(pessoa)