//Class = definição
// Instância = ocorrência (const e o que está dentro dela)


/*
console.log(rodrigo.nome);
console.log(rodrigo.idade);
console.log(rodrigo);

//

pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

//

pessoa.nome = 'Rodrigo';
pessoa.idade = 23;
pessoa.descrever();


const atributo = 'idade';
pessoa['nome'] = 'Guilherme';
pessoa.nome = 'Guilherme';

console.log(pessoa['nome']);

*/


/*
const pessoa = {
    nome: 'Rodrigo Guilherme',
    idade: 23,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};
*/

class Person {
    name;
    age;
    yearOfBirth;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.yearOfBirth = 2022 - age;
    }
    description() {
        console.log(`My name is ${this.name} and my age is ${this.age} years old.`);
    }
}



function comparePeople(p1, p2) {
    if (p1.age > p2.age) {
        console.log(`${p1.name} é mais velho(a) que ${p2.name}`);
    } else if (p2.age > p1.age) {
        console.log(`${p2.name} é mais velho(a) que ${p1.name}`);
    } else {
        console.log(`${p1.name} e ${p2.name} tem a mesma idade`);
    }
}

const rodrigo = new Person('Rodrigo', 25);
const guilherme = new Person('Guilherme', 24);


comparePeople(rodrigo, guilherme);