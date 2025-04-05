const nota1 = 5;
const nota2 = 3;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;
const mediaFormatada = media.toFixed(2);

if (media < 5) {
    console.log(`O aluno foi reprovado pois a média é ${mediaFormatada}`);
} else if (media <= 7) {
    console.log(`O aluno está de recuperação pois a média foi ${mediaFormatada}`);
} else {
    console.log(`O aluno passou de semestre pois a média foi ${mediaFormatada}`);
}
