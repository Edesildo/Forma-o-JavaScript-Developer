let numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
  const element = numeros[i];

  if (element % 2 === 0) {
    console.log(`${element} é par`);
  } else {
    console.log(`${element} não é par`);
  }
}
