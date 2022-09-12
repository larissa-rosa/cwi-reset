
saldo = 1000
compraCalca = -99.90
recebeSalario = 2500
doacao = -0.10
saldo = saldo + compraCalca + recebeSalario + doacao
compraArCondicionado = -0.25 * saldo
saldo = saldo + compraArCondicionado
pagamentoDivida = 0.5 * saldo
saldo = saldo - pagamentoDivida

console.log(saldo)