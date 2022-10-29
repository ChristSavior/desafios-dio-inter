
/* Booleans - Condicionais que são apenas verdadeiro ou falso*/

// Ímpar ou par
 const numero = 10;

const numeroPar = (numero % 2) === 0;

if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar');
}

// Código impar ou par compactado
const numero = 10;

if ((numero % 2) === 0) {
    console.log('Par');
} else {
    console.log('Impar');
}


// Número divisível por 5
const numero = 10;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}




