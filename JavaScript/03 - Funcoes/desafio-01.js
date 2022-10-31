
function calcularImx(peso, altura) {
    return peso / (altura * altura);
}




const peso = 65;
const altura = 1.70;
const imc = peso  / (altura * altura);
//const imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Obesidade');
} else {
    console.log('Obesidade Grave');
}





