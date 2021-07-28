/*exercício de interpretação de código  1 
a : 
10
50

b: se retirar os dois console.log vai ser retornado o mesmo resultado
10
50

exercício de interpretação de código 2

a primeira variavel pede para o usuario digitar um texto

depois tem uma função que vai mandar o texto retornar todo em letras minusculas 
e tem a função .includes() procura a palvra cenoura

no final tem outra variavel que chama a função para transformar as palavras em letras
minusculas e procurar pela pavra cenoura

e no final manda exibir o que foi pedido para a função fazer com o comando console.log


essa função tem o objetivo de retornar a frase em letras minusculas e procurar pela palavra
cenoura 

O QUE ACONTECE NAS FRASES:
i.   Eu gosto de cenoura vai retornar true e a frase vai ficar igual pois ja está
em letras minusculas e vai retornar true

ii.  CENOURA é bom pra vista vai retornar a frase cenoura é bom pra vista e vai retornar true
porque apesar de a frase ter a palavra cenoura em letras maiusculas ele transformou em minusculas
e vai retornar true também 

iii. Cenouras crescem na terra vai retornar a frase cenouras crescem na terra e false porque 
ele vai procuprar pela palavra cenoura no singular



exercício de escrita de código 1
a:
*/
function exibirMinhasInfoPessoal(){
	console.log("Eu sou Dariedson, tenho 27 anos, moro em Paulista/PE e sou estudante.")
}

exibirMinhasInfoPessoal()

function exibirInfosComParametro(nome, idade, cidade, profissao){
	const nomeDaPessoa = 'Laís'
	const idadeDaPessoa = 23
	const cidadeDaPessoa = 'São Paulo'
	const profissaoDaPessoa = 'instrutora'
	const dadosDaPessoa = (`eu sou ${nomeDaPessoa}, tenho ${idadeDaPessoa} anos, moro em Rua Guarapari 190 e sou ${profissaoDaPessoa}`)
	return dadosDaPessoa
}

console.log(exibirInfosComParametro())


//exercício de escrita de código 2
// a
function somarDoisNumeros(){
	let num1 = Number(prompt("Insira um número"))
	let num2 = Number(prompt("Insira outro número"))
	const somaDoisNumeros = num1 + num2
	return somaDoisNumeros
}

console.log(somarDoisNumeros())


//b 
function compararDoisNumeros(){
	let primeiroNumero = Number(prompt("Insira Uum número"))
	let segundoNumero = Number(prompt("Insira outro Número"))
		if (primeiroNumero >= segundoNumero){
			console.log("o primeiro numero é maior ou igual ao segundo")
		}
			else{
				console.log("o primeiro numero é menor que o segundo")
			}

} 

compararDoisNumeros()


//c
function compararBooleano(){
	let numeroEhPar = Number(prompt("Insira um número"))
	let verificaSeEhPar = numeroEhPar % 2 === 0
	console.log(verificaSeEhPar)
}

compararBooleano()


// d
function umFrase(){
	const frase = prompt("Escreva uma frase")
	const tamanhoFrase = frase.length
	const fraseMaiuscula = frase.toUpperCase()
	console.log(`Èssa foi a frase que você escreveu ${frase},  e ela tem o tamnho de ${tamanhoFrase}, essa é a exibição dela em letras maiúsculas ${fraseMaiuscula}`)
}

umFrase()


//exercício de escrita de código 3

function calculadora(){
	const numeroUm = 30
	const numeroDois = 3
	const soma = numeroUm + numeroDois
	const subtracao = numeroUm - numeroDois
	const multiplicacao = numeroUm * numeroDois
	const divisao = numeroUm / numeroDois
	console.log(`numeros inseridos: ${numeroUm} e ${numeroDois}`)
	console.log(`soma: ${soma}`)
	console.log(`diferença: ${subtracao}`)
	console.log(`multiplicacao ${multiplicacao}`)
	console.log(`divisão: ${divisao}`)
}

calculadora()