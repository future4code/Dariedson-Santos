/*Exercícios de interpretação de código
1. resposta:
10 
10 5


2. resposta:
10 10 10


3. resposta:
o programa pede ao usuário para digitar a quantidade de horas trabalhadas e em seguida pergunta quanto o usuário
recebe por dia, o programa vai dividir o valor que o usuário ganha por dia pelo total de horas trabalhadas
no dia e vai retornar o quanto o usuário ganha por hora trabalhada exibindo o resultado através de um alert.
nomes para as variáveis poderiam ser horasDeTrabalhoPorDia e valorDeUmDia
*/ 






/*
2- Exercícios de escrita de código
a-
*/



let nome
let idade
console.log(nome , idade)/* o resultado foi undefined porque as variáveis foram criadas mas 
não foi atribuido nenhum valor a elas.*/
nome = prompt ("Qual o seu nome?")
idade = prompt ("qual a sua idade?")
console.log(typeof nome , typeof idade) /* os dois retornaram string e number, porque o prompt sempre retorna string 
mas eu usei o comando Number para converter de string para number (por ser pedido uma idade futuramente posso usar
esse valor digitado pelo usuário para fazer alguma operação matemática)*/
console.log("Olá" , nome , "você tem" , idade , "anos")


//Exercício 2 

let gostaDeFutebol = prompt("Voce Gosta de Futebol Respoda Sim ou Não?")
let voceTrabalha = prompt ("Você Trabalha? Responda Sim ou Não")
let voceEstuda = prompt ("Você Estuda? Respoda Sim ou Não")

let respostaFutebol = (gostaDeFutebol)
let respostaTrabalha = (voceTrabalha)
let respostaEstuda = (voceEstuda)

console.log("Voce Gosta de Futebol? =" , respostaFutebol)
console.log("Você Trabalha? =" , respostaTrabalha)
console.log("Você Estuda? =" , respostaEstuda)



let a = Number(prompt("guarde A"))
let b = Number(prompt("guiarde B"))
let c = a
a = b
b = c

console.log(a , b)