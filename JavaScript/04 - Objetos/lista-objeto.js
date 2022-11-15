/* 1- Crie uma classe para representar carros.

Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
    - Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/


class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }
    
    calcularGastoPercurso(distancia, precoCombustivel) {
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    } 

}


const uno = new Carro('fiat', 'branco', 1/12);
const corolla = new Carro('toyota', 'preto', 1/8);
 
console.log(uno.calcularGastoPercurso(70, 5));
console.log(corolla.calcularGastoPercurso(70, 5));



