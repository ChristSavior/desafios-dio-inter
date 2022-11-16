// 2. Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

var numeros = 0;


for (let i = 0; i <= 1000; i++) {
    numeros++;
    var numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
}

const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log(numerosPares);