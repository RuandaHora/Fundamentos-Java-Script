const peso1= 1.0
const peso2= Number('2.0')

console.log(peso1, peso2)
console.log('')

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1= 9.871
const avaliacao2= 6.871

const total = avaliacao1*peso1+avaliacao2*peso2 
const media = total/(peso1+peso2)
console.log('')
console.log(media.toFixed(2))
console.log(media.toString(2))// Essa função converte esse numero em Binário.
console.log(typeof (media))
console.log(typeof Number);
console.log(typeof String)
console.log(typeof console.log)
/* 
1º isInteger-> Para saber se o numero é inteiro. Se for o resultado sai "True" se não for sai "False".
2º toFixed-> Para definir as casas decimais após o ponto flutuante.
3º toString-> Converse em numero binario.
*/
