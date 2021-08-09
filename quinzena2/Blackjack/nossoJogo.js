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
 comprarCarta()
 console.log("Bem vindo ao jogo de Blackjack!")

 const iniciarJogo = confirm("Quer iniciar uma nova rodada?")

 if (iniciarJogo === true){
 	let cartaUsuario1 = comprarCarta()
 	let cartaUsuario2 = comprarCarta()
 	let cartaPc1 = comprarCarta()
 	let cartaPc2 = comprarCarta()
 	let somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
 	let somaPc = cartaPc1.valor + cartaPc2.valor
 	const jogoEmpate = somaUsuario === somaPc
 	console.log(`${cartaUsuario1.valor} ${cartaUsuario2.valor}  usuario tirou ${somaUsuario}`)
 	console.log(`${cartaPc1.valor} ${cartaPc2.valor} o computador tirou ${somaPc}`)
 		if(somaUsuario === somaPc){
 			console.log("empate")
 		}else if (somaUsuario > somaPc){
 			console.log("o usuario venceu")
 		}else if (somaUsuario < somaPc){
 			console.log("o computador ganhou")
 		}
 	
 }else{
 	console.log("O jogo acabou")
 }