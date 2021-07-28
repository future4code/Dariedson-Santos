// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const alturaRetangulo = Number(prompt("Qual a altura do triangulo? "))
  const larguraRetangulo = Number(prompt("Qual a largura do triangulo? "))
  console.log(alturaRetangulo * larguraRetangulo)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtualIdade = Number(prompt("Insira  ano atual"))
  const anoDeNascimentoIdade = Number(prompt("insira o ano que você nasceu"))
  console.log(anoAtualIdade - anoDeNascimentoIdade)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const pesoImc = Number(prompt("Escreva seu peso em kg"))
  const alturaImc = Number(prompt("escreva sua altura em metros"))
  const formulaPrimeiraParte = alturaImc * alturaImc
  const formulaImc = pesoImc / formulaPrimeiraParte 
  console.log(formulaImc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nomeUsuario = prompt("qual o seu nome?")
  const idadeUsuario = prompt("qual a sua idade?")
  const emailUsuario = prompt("qual seu email?")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const primeiraCor = prompt("escreva a primneira cor")
  const segundaCor = prompt("escreva a segunda cor")
  const terceiraCor = prompt("escreva a terceira cor")
  const juntandoCores = [primeiraCor , segundaCor , terceiraCor]
  console.log(juntandoCores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const umaPalavra = prompt("escreva uma palvra para ser transformada em letras miúsculas")
  const transformaEmMaiusculo = umaPalavra.toUpperCase()
  console.log(transformaEmMaiusculo)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo = Number(prompt("insira o custo do espetaculo"))
  const valorIngresso = Number(prompt("quanto custa cada ingresso?"))
  const quantidadeDeIngressos = custoEspetaculo / valorIngresso
  console.log(quantidadeDeIngressos)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const primeiraString = prompt("escreva a primeira string")
  const segundaString = prompt("escreva a segunda string")
  const comparandoTamanhoString = primeiraString.length === segundaString.length
  console.log(comparandoTamanhoString)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const umaString = prompt("escreva aqui uma palavra")
  const outraString = prompt("escreva outra palavra")
  const comparandoStrings = umaString.toUpperCase() === outraString.toUpperCase()
  console.log(comparandoStrings)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtualRg = Number(prompt("em que ano estamos? "))
  const anoDeNascimentoRg = Number(prompt("em que ano você nasceu?"))
  const anoEmissaoRg = Number(prompt("em que ano foi emitio seu RG?"))
  const pegarIdadeRg = anoAtualRg - anoDeNascimentoRg
  const pegarTempoDeEmissao = anoAtualRg - anoEmissaoRg
  const checa20A = pegarIdadeRg <= 20 && pegarTempoDeEmissao >= 5
  const checaDe20A50 = pegarIdadeRg > 20 && pegarIdadeRg <= 50 && pegarTempoDeEmissao >= 10
  const checaAcimaDe50A = pegarIdadeRg >= 51 && pegarTempoDeEmissao > 15
  const precisaRenovar = checa20A || checaDe20A50 || checaAcimaDe50A
  console.log(precisaRenovar)
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const anoEhBissexto = Number(prompt("Insira um ano para saber se ele é bissexto"))
  const checandoAnoBissexto = (anoEhBissexto % 4 === 0) && (anoEhBissexto % 100 != 0) || (anoEhBissexto % 400 === 0)
  console.log(checandoAnoBissexto)

}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const condicaoIdade = prompt("você tem mais de 18 anos?")
  const condicaoEscolaridade = prompt("você possui ensino médio completo?")
  const condicaoHorario = prompt("você possui disponibilidade exclusiva durante os horários do curso?")
  const condicaoInscricao1 = condicaoIdade === 'sim'
  const condicaoInscricao2 = condicaoEscolaridade === 'sim'
  const condicaoInscricao3 = condicaoHorario === 'sim'
  const podeSeInscrever = condicaoInscricao1 && condicaoInscricao2 && condicaoInscricao3
  console.log(podeSeInscrever)
}