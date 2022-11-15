/* 
    2. Crie uma classe para representar pessoas ].
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas 

*/

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this. altura = altura;
    }

    calcularImc(){
      return this.peso / (this.altura * this.altura);
    }
    classificarImc(){
       const imc = this.calcularImc();
       if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso Normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obesidade');
        } else {
            return ('Obesidade Grave');
        }
    }
}

const rodrigo = new pessoa('Rodrigo', 85, 1.78);
const guilherme = new pessoa('Guilherme', 90, 1.80);

console.log(rodrigo.classificarImc());
console.log(guilherme.classificarImc());