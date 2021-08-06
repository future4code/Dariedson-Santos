/* exercicio de interpretação de código 1
a) será impresso no console:
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"

exercício de interpretação de código 2

a) será ipresso no console:
{nome: "Juca", idade: 3, raca: "SRD"}
{nome: "Juba", idade: 3, raca: "SRD"}
{nome: "Jubo", idade: 3, raca: "SRD"}


b) 
a sintaxe dos três pontinhos é chamada de spread e ela pega os dados do objeto que está na frente dos pontinhos
basicamente ele permite que a gente copie os dados de um objeto para outro
no caso do código ele criou 3 objetos com os mesmos dados de idade e raça e só trocou o nomedo pet na hora da criação



exercício de interpretação de código 3
a) 
será impresso no console

false 
undefined

b)
false porque o console.log pede para mostrar o que tem na propriedade backender
que está definido como false
e undefined porque não foi criado uma propriedade com a palavra altura 


exercício de escrita de código 1
*/
// a
const pessoa = { 
	nome: "Amanda",
	apelidos: ["amandinha", "mandinha", "mandi"],
}


function mostrarNome(pessoa){
	console.log(`Meu nome é Amanda, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}


const novaPessoa = {
	...pessoa,
	apelidos: ["mandis", "dindinha", "dinha"],
}
mostrarNome(pessoa)
mostrarNome(novaPessoa)


// exercicio de escrita de código 2
// a
const dadosPessoais = {
	nome: 'Bruno',
	idade: 23,
	profissao: 'instrutor',
}

const meusDadosPessoais = {
	nome: 'Dariedson',
	idade: 27,
	profissao: 'Futuro Desenvolvedor Full Stack'
}


// b

function arrayDeDados(){
	const todosOsDados = [dadosPessoais.nome, dadosPessoais.nome.length, dadosPessoais.idade, dadosPessoais.profissao, dadosPessoais.profissao.length, meusDadosPessoais.nome, meusDadosPessoais.nome.length, meusDadosPessoais.idade, meusDadosPessoais.profissao, meusDadosPessoais.profissao.length]
	console.log(todosOsDados)
}

arrayDeDados()


// exercicio de escrita de código 3

const carrinho = []

const primeiraFruta = {
	fruta: 'manga',
	disponibilidade: true,
}

const segundaFruta = {
	fruta: 'goiaba',
	disponibilidade: true,
}

const terceiraFruta = {
	fruta: 'kiwi',
	disponibilidade: true,
}

function sacolao(frutas){
	carrinho.push(primeiraFruta, segundaFruta, terceiraFruta)
}

sacolao()
console.log(carrinho)