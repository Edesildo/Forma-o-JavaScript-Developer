const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);

let soma = 0;

for (let index = 0; index < notas.length; index++) {
    const nota = notas[index];
    soma = soma + nota;

}

const media = soma / notas.length;
console.log(media);