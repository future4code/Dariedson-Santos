/*Exercício de interpretação de código 1

1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

   
    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
  
 o código está pegando o valor anterior da variável valor e somando mais um ao valor dela
 durante 5 vezes


 Leia a códio abaixo 

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}


a) O que vai ser impresso no console?
19, 21, 23, 25, 27, 30

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se não, o que poderia ser usado para fazer isso?
nesse caso seria possivel usar o for sem o of for(let i = 0; i < lista.length; i++) 
e no console.log daria pra mandar imprimir console.log(`O elemento do index ${i} é: ${lista[i]}`)



3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

o código vai criar 4 linhas com asteriscos e cada linha aumenta um asterisco


    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }





Exercício de escrita de código 1
*/

function pets(){
let qtdDeBichos = Number(prompt('Quantos bichos de estimação você possui?'))
let nomeDoPet = []
if(qtdDeBichos === 0){
    console.log('Que pena! Você pode adotar um pet')
}else if(qtdDeBichos > 0){
	for(let i = 0; i < qtdDeBichos; i++){
		let nomes = prompt("Insira o nome dos pets")
		nomeDoPet.push(nomes)
}
}
console.log(nomeDoPet)
}
pets()


//Exercício de escrita de código 2

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function meuArray1(){
	for(let numeros of arrayOriginal){
		console.log(numeros)
	}
}
console.log("Resposta A:")
meuArray1()

function arrayDivididoPor10(){
	for(let numeros of arrayOriginal){
		console.log(numeros / 10)
	}
}

console.log("Resposta B")
arrayDivididoPor10()


function numerosPares(arrayOriginal){
	return arrayOriginal % 2 === 0 
}
console.log("Resposta C:")
let arrayPar = arrayOriginal.filter(numerosPares)
console.log((arrayPar))


function arrayComString(){
	for(let i = 0; i < arrayOriginal.length; i++)
		console.log(`O elemento do index ${i} é: ${arrayOriginal[i]}`)
}

console.log("Resposta D:")
arrayComString()


let maiorValor = 0
let menorValor = 9999999999999999
function maiorEMenorValor(){
	for(let i = 0; i < arrayOriginal.length; i++)
		if(arrayOriginal[i] > maiorValor){
			maiorValor = arrayOriginal[i]
		}
		else if(arrayOriginal[i] < menorValor){
			menorValor = arrayOriginal[i]
		}
		console.log(`o menor valor é ${menorValor} e o maior numero é ${maiorValor}`)
}

console.log("Resposta E:")
maiorEMenorValor()