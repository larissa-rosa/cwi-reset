nomeCompleto = 'Larissa Rosa';
apelido = 'Lali';
idade = 29;
dataNascimento = '07 de março de 1993';
localNascimento = 'Porto Alegre';
altura = 1.59;
trabalhando = true;

apresentacao =
  'Meu nome é ' +
  nomeCompleto +
  ' (sou conhecido[a] como ' +
  apelido +
  ') e tenho ' +
  idade +
  ' anos. Nasci no dia ' +
  dataNascimento +
  ', na cidade de ' +
  localNascimento +
  '. Tenho ' +
  altura +
  'm de altura e atualmente estou ' +
  (trabalhando ? 'empregado' : 'desempregado') +
  '.';

console.log(apresentacao);
