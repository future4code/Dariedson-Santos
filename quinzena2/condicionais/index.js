/*
exercício de interpretação de código 1
a) Explique o que o código faz. Qual o teste que ele realiza? 
o código começa com uma variável pedindo para o(a) usuário(a) inserir um número para testar,
depois cria uma variável para armazenar o número inserido e transformar o que foi digitado em número porque na primeira variável
estava recebendo o número inserido como string e isso ia dar erro na hora do cálculo
agora o bloco if/else, vai verificar se o resto da divisão por 2 do número inserido é igual a 0
se for igual a 0 vai exibir a mensagem no console "Passou no teste"
se o resto da divisão não for igual a 0 vai retornar a mnsagem no console "Não passou no teste"

b) Para que tipos de números ele imprime no console "Passou no teste"? 
para números pares, porque todo número par dividido por 2, o resto é igual a 0

c) Para que tipos de números a mensagem é "Não passou no teste"? 
para qualquer número impar


exercício de interpretação de código 2
a) Para que serve o código acima?
exibe o preço da fruta que o usuário escolher

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta ", Maçã, " é ", "R$ ", 2.25

c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
vai ser impresso duas mensagens no console
O preço da fruta ", Pêra, " é ", "R$ ", 5.5 
O preço da fruta ", , " é ", "R$ ", 5
após a última mensagem o código para de executar por causa do comando brek
e na fruta ele não aparece o nome na última mensagem


exercício de interpretação de código 3
a) O que a primeira linha está fazendo?
está pedindo para o(a) usuário(a) inserir o primeiro número


b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
para o numero 10 será impresso no console "Esse número passou no teste" e um erro de variável não declarada
para o número -10 será impresso que a variável mensagem não foi declarada

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
se for inserido o número 10 será impresso no console "Esse número passou no teste" porque essa é a saída do
if para numeros maiores que 0 e também será impresso um erro porque a variável mensagem
só está definida dentro do if se tornando uma variável local, sendo assim ela não existe
fora do escopo local
se for inserido -10 será impresso somente a mensagem de erro que a variável não foi declarada
e como o número é menor que 0 não vai aparecer a dizendo que o número passou no teste

   ----------------FIM EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO---------------------------


exercício de escrita de código 1
*/

const idade = prompt("Insira a sua idade para saber se voĉe pode dirigir")
const idadeUsuario = Number(idade)
if (idadeUsuario >= 18){
	console.log("Você pode dirigir")
}else{
	console.log("Você não pode dirigir")
}

//exercício de escrita de código 2
const horarioQueEstuda = prompt(`Em qual hórario você etuda \n Insira a letra M para matutino
V para verpertino ou N para noturno`).toLowerCase()
if (horarioQueEstuda === 'm'){
	console.log("Bom Dia!")
}else if(horarioQueEstuda === 'v'){
	console.log("Boa Tarde!")
}else if(horarioQueEstuda === 'n'){
	console.log("Boa noite!")
}else{
	console.log(`ERR0R Você deve inserir uma das letras descritas \n M para matutino, V para verpeertino
		ou N para noturno`)
}

//exercício de escrita de código 3 

const horarioDaAula = prompt(`Em qual hórario você etuda \n Insira a letra M para matutino
V para verpertino ou N para noturno`).toLowerCase()

switch(horarioDaAula){
	case 'm':
	console.log("Bom Dia!")
	break
	case 'v':
	console.log("Boa Tarde!")
	break
	case 'n':
	console.log("Boa Noite!")
	break
	default:
	console.log(`ERR0R Você deve inserir uma das letras descritas \n M para matutino, V para verpeertino
		ou N para noturno`)

}



//exercício de escrita de código 4

const filme = prompt(`Escolha um gênero de filme para assistir: \n Ação, Comédia, Fantasia, Suspense, Terror,`).toLowerCase()
const valorIngresso = prompt(`Qual o valor do Ingresso \n insira o preço nesse modelo
1.00`)
if(filme === 'fantasia' && valorIngresso <= 15.00){
	console.log('Bom filme!')
}else{
	console.log("Escolha outro filme!")
}






// DESAFIOS 1

const filmeDesafio = prompt(`Escolha um gênero de filme para assistir: \n Ação, Comédia, Fantasia, Suspense, Terror,`).toLowerCase()
const valorIngressoDesafio = prompt(`Qual o valor do Ingresso \n insira o preço nesse modelo
1.00`)
if(filmeDesafio === 'fantasia' && valorIngressoDesafio <= 15.00){
	const lanchinho = prompt("Qual snack você quer comprar?")
	console.log('Bom filme!')
	console.log(`Aproveite o seu ${lanchinho}`)
}else{
	console.log("Escolha outro filme!")
}


//DESAFIOS 2

const nomeCompleto = prompt("Insira seu nome completo: ")
const tipoDeJogo = prompt("escolha o tipo de Jogo internacional ou  para doméstico").toLowerCase()
const etapaDoJogo = prompt("escolha a etapa do jogo semi-final , decisão de terceiro lugar ou Final").toLowerCase()
const categoria = prompt("Escolha a categoria 1 , 2 , 3, , 4")
const quantidadeDeIngressos = Number(prompt("Insira a quantidade de ingressos que você deseja coprar"))

console.log(`---Dados da compra --- \n 
	Nome completo: ${nomeCompleto} \n 
	Tipo do jogo: ${tipoDeJogo} \n 
	Etapa do jogo: ${etapaDoJogo} \n 
	Categoria: ${categoria} \n 
	Quantidade de ingressos: ${quantidadeDeIngressos} \n 
	---Valores--- \n`)

if(tipoDeJogo === 'do' && etapaDoJogo === 'semi-final'){
	switch (categoria){
		case '1':
		console.log('Valor do ingresso 1320')
		console.log("valor Total" , 1320  * quantidadeDeIngressos)
		break;
		case '2':
		console.log('Valor do ingresso 880')
		console.log("valor Total" , 880  * quantidadeDeIngressos)
		break;
		case '3':
		console.log('Valor do ingresso 550')
		console.log("valor Total" , 550  * quantidadeDeIngressos)
		break;
		case '1':
		console.log('Valor do ingresso 220')
		console.log("valor Total" , 220  * quantidadeDeIngressos)
		break;
	}
}else if(tipoDeJogo === 'do' && etapaDoJogo === 'terceiro lugar'){
	switch (categoria){
		case '1':
		console.log('Valor do ingresso 660')
		console.log("valor Total" , 660  * quantidadeDeIngressos)
		break;
		case '2':
		console.log('Valor do ingresso 440')
		console.log("valor Total" , 440  * quantidadeDeIngressos)
		break;
		case '3':
		console.log('Valor do ingresso 330')
		console.log("valor Total" , 330  * quantidadeDeIngressos)
		break;
		case '1':
		console.log('Valor do ingresso 170')
		console.log("valor Total" , 170  * quantidadeDeIngressos)
		break;
	}
}else if(tipoDeJogo === 'do' && etapaDoJogo === 'final'){
	switch (categoria){
		case '1':
		console.log('Valor do ingresso 1980')
		console.log("valor Total" , 1980  * quantidadeDeIngressos)
		break;
		case '2':
		console.log('Valor do ingresso 1320')
		console.log("valor Total" , 1320  * quantidadeDeIngressos)
		break;
		case '3':
		console.log('Valor do ingresso 880')
		console.log("valor Total" , 880  * quantidadeDeIngressos)
		break;
		case '1':
		console.log('Valor do ingresso 330')
		console.log("valor Total" , 330  * quantidadeDeIngressos)
		break;
	}
}


// na parte dos desafios a mente bugou na questão 2, mas fiz esse código gigante
//funciona apenas para jogos domesticos, depois pretendo arrumar este código.
// não gostei da lógica que usei e também porque ficou muito grande
// preciso encontrar uma maneira de dimiuir o ḿeu código


