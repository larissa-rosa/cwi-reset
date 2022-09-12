imc = peso / altura**2

console.log('IMC =', imc)

if (imc < 18.5){
  classificacao = 'Magreza'
  grau = 0
}
else if(imc <= 24.99){
  classificacao = 'Normal'
  grau = 0
}
else if(imc <= 29.99){
  classificacao ='Sobrepeso'
  grau = 1
}
else if(imc <= 39.99){
  classificacao = 'Obesidade' 
  grau = 2
}
else{
  classificacao = 'Obesidade grave'
  grau = 3
}

console.log('Classificação:', classificacao)

if (grau > 0){
  console.log('Cuidado! Você está acima do peso recomendado pela OMS.')
}

if (grau == 3){
  console.log('É importante procurar um médico para avaliar sua saúde.')
}
