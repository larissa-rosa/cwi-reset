soma = 0
i = 0
Array = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]
while(i < Array.length){
  soma += Array[i]
  i++
}
media = soma / Array.length
console.log("Média:", media)