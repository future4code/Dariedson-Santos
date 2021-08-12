/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
// -----------PRIMEIRO CÓDIGO-----------
 // comprarCarta()
 // console.log("Bem vindo ao jogo de Blackjack!")

 // const iniciarJogo = confirm("Quer iniciar uma nova rodada?")

 // if (iniciarJogo === true){
 // 	let cartaUsuario1 = comprarCarta()
 // 	let cartaUsuario2 = comprarCarta()
 // 	let cartaPc1 = comprarCarta()
 // 	let cartaPc2 = comprarCarta()
 // 	let somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
 // 	let somaPc = cartaPc1.valor + cartaPc2.valor
 // 	const jogoEmpate = somaUsuario === somaPc
 // 	console.log(`${cartaUsuario1.valor} ${cartaUsuario2.valor}  usuario tirou ${somaUsuario}`)
 // 	console.log(`${cartaPc1.valor} ${cartaPc2.valor} o computador tirou ${somaPc}`)
 // 		if(somaUsuario === somaPc){
 // 			console.log("empate")
 // 		}else if (somaUsuario > somaPc){
 // 			console.log("o usuario venceu")
 // 		}else if (somaUsuario < somaPc){
 // 			console.log("o computador ganhou")
 // 		}
 	
 // }else{
 // 	console.log("O jogo acabou")
 // }
// --------------- SEGUNDO CÓDIGO -----------------

console.log(`Bem vindo ao jogo de Blackjack`)
let iniciarJogo = confirm(`Quer iniciar uma nova rodada?`)
if(iniciarJogo === true){
	let cartasUsuario = [comprarCarta(), comprarCarta()]
	let cartasPc =[comprarCarta(), comprarCarta()]
	let somaUsuario = [cartasUsuario[0].valor + cartasUsuario[1].valor]
	let somaPc = (cartasPc[0].valor + cartasPc[1].valor)
	console.log(`usuario ${cartasUsuario[0].valor} ${cartasUsuario[1].valor} pontuação = ${somaUsuario} \n computador ${cartasPc[0].valor} ${cartasPc[1].valor} pontuação = ${somaPc}`)
	if(somaUsuario > somaPc){
		console.log(`o Usuario venceu`)
	}else if(somaUsuario < somaPc){
		console.log(`O computador venceu`)
	}else{
		console.log(`o jogo terminou emapatado`)
	}
//------------PARTE DO DESAFIO ABAIXO------------------
// se sair dois As para cada jogador na primeira rodada devem ser sorteadas novas cartas
while(cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11 || cartasPc[0].valor === 11 && cartasPc[1].valor === 11){
cartasUsuario = []
cartasPc = []
cartasUsuario = [comprarCarta(), comprarCarta()]
cartasPc = [comprarCarta(), comprarCarta()]
}

if(somaUsuario <= 21){
	let novaRodada = confirm("Deseja comprar mais cartas?")
	if(novaRodada){
}





}else{
	console.log("o jogo acabou")
}
}



/*
infelizmente não consegui realizar o desafio completo :(
*/