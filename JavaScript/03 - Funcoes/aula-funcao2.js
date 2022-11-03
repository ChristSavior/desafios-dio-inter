/*function escrevaMeuNome(nome) {
    console.log('Seu nome é: ' + nome);

}
function escrevaMeuSobrenome(sobrenome) {
    console.log('Seu sobrenome é: ' + sobrenome);
}

escrevaMeuNome('Rodrigo');
escrevaMeuSobrenome('Guilherme');






function maiorDeIdade(idade) {
    if (idade <= 17) {
        console.log('Você tem ' + idade + ' anos e não é maior de idade');
    } else {
        console.log('Você tem ' + idade + ' anos e é maior de idade');
    }
}

maiorDeIdade(18);
*/

function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome('Rodrigo') + ' e eu sou de maior.')
  } else {
    console.log(escrevaMeuNome('Rodrigo') + ' e eu não sou de maior.');
  }
}

verificarIdade(17);