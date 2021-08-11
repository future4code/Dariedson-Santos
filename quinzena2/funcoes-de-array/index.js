/*
1-
Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
realize as operações pedidas nos itens abaixo utilizando as funções de array 
map e filter:
*/
const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]


// RESPOSTA A

function nomes(array){
	console.log(array.nome)
}

let dogs = pets.filter(nomes)

// RESPOSTA B  

function selecionarRaca(tipo){
	if(tipo.raca === "Salsicha")
		return tipo
}

let tipoSalsicha = pets.filter(selecionarRaca)
console.log(tipoSalsicha)


// RESPOSTA C 

function exibirPoodles(dog){
	if(dog.raca === "Poodle"){
		console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.nome}`)
	}
}

let selecionarPoodles = pets.filter(exibirPoodles)
console.log(selecionarPoodles)

/*-----------------------------------------------------------------------------------

Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo
utilizando as funções de array map e filter:
*/

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// RESPOSA A

function nomeProdutos(nomeProduto){
	console.log(nomeProduto.nome)
}

let somenteNomes = produtos.filter(nomeProdutos)
console.log(somenteNomes)

// RESPOSTA B

function descontoProdutos(itemDesconto){
	let precoDesconto = itemDesconto.preco * 5 / 100
	let valorAlterado = (itemDesconto.preco - precoDesconto)
	console.log(`${itemDesconto.nome} ${valorAlterado.toFixed(2)}`)
}

let descontinho = produtos.map(descontoProdutos)
console.log(descontinho)

//RESPOSTA C 

function apenasBebidas(itemBebida){
	if(itemBebida.categoria === "Bebidas"){
		console.log(itemBebida)
	}
}

let somenteBebidas = produtos.filter(apenasBebidas)
console.log(somenteBebidas)

// RESPOSTA D 

function temYpe(checaProduto){
	if(checaProduto.nome.includes("Ypê")){
		console.log(checaProduto)
	}
}

let checaYpe = produtos.filter(temYpe)
console.log(checaYpe)


function fraseCompra(produtosYpe){
	console.log(`Compre ${produtosYpe.nome} por ${produtosYpe.preco}`)
}

let fraseVendas = checaYpe.filter(fraseCompra)
console.log(fraseVendas)

