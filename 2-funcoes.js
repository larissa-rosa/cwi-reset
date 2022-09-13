function imprimir(a) { //imprime a mensagem informada
  console.log(a)
}

function mesmoNome(nomeDoFulano, nomeDoBeltrano){ //verifica se os nomes informados são iguais
  return nomeDoFulano == nomeDoBeltrano
}

function maiorDeIdade(idade){ //verifica se a idade informada é maior ou igual a 18
  return idade >= 18
}

function valorComJuros(valorBoleto){ //retorna o valor do boleto com juros de 10%
  return valorBoleto * 1.1
}

function mediaAritmetica(itens){ //retorna a média aritmética de um número indefinido de itens informados
  somaItens = 0
  for(i = 0; i < itens.length; i++){
    somaItens += itens[i]
  } 
  return somaItens / itens.length
}

function margemBruta(receitaLiquidaVendas, custoProdutosVendidos){ //calcula a margem bruta a partir da receita líquida de vendas e custo dos produtos vendidos e dá o valor final em porcentagem
  lucroBruto = receitaLiquidaVendas - custoProdutosVendidos
  return (lucroBruto / receitaLiquidaVendas) * 100
}

cwi = "CWI"
reset = "Reset"
imprimir(mesmoNome(cwi, cwi))   // true
imprimir(mesmoNome(cwi, reset)) // false

imprimir("---")

imprimir(maiorDeIdade(30)) // true
imprimir(maiorDeIdade(18)) // true
imprimir(maiorDeIdade(5))  // false

imprimir("---")

imprimir(valorComJuros(100))   // 110
imprimir(valorComJuros(984.5)) // 1082.95

imprimir("---")

imprimir(mediaAritmetica([1]))             // 1
imprimir(mediaAritmetica([1, 4, 10]))      // 5
imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3

imprimir("---")

imprimir(margemBruta(1000000, 500000))      // 50
imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]