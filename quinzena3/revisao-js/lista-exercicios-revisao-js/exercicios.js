// EXERCÍCIO 01
let arrayUm = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let arrayDois = []
function inverteArray(array){
  for(let i = arrayUm.length; i > 0; i--){
    arrayDois.push(arrayUm[i])
  }
  return arrayDois
}inverteArray(arrayDois)


// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let paresElevados = []
  let resultadoElevados = []
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
        paresElevados.push(array[i])
      }
    }
    for(let i = 0; i < paresElevados.length; i ++){
      resultadoElevados.push(paresElevados[i] ** 2)
    }return resultadoElevados
}console.log(retornaNumerosPares(array))
// EXERCÍCIO 03
function retornaNumerosPares(pares) {
  let resultadoPares = []
  for(let i = 0; i < pares.length; i++){
    if(pares[i] % 2 === 0){
      resultadoPares.push(pares[i])
    }
  }return resultadoPares

}console.log(retornaNumerosPares(pares))

// EXERCÍCIO 04
function retornaMaiorNumero(maior) {
  let resultadoMaior = -99999999999999999999999999
  for(let i = 0; i < maior.length; i++){
    if(maior[i] > resultadoMaior){
      resultadoMaior = maior[i]
    }
  }return resultadoMaior

}console.log(retornaMaiorNumero(maior))

// EXERCÍCIO 05
function retornaQuantidadeElementos(quantidade) {
  let resultadoQuantidade = (quantidade.length)
    return resultadoQuantidade
}console.log(retornaQuantidadeElementos(quantidade))

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
   const booleano1 = true
   const booleano2 = false
   const booleano3 = !booleano2 
   const booleano4 = !booleano3 
  let letraA = booleano1 && booleano2 && !booleano4

  let letraB = (booleano1 && booleano2) || !booleano3 

  let letraC = (booleano2 || booleano3) && (booleano4 || booleano1)

  let letraD = !(booleano2 && booleano3) || !(booleano1 && booleano3)

  let letraE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  const respostaExpressoes = [letraA, letraB, letraC, letraD, letraE]
  return respostaExpressoes
}console.log(retornaExpressoesBooleanas)
// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let  numerosPares = []
  numerosPares.length = n
  for(let i = 0; i < numerosPares.length; i+=2){
    numerosPares.push(i)
  }
  return numerosPares
}
console.log(retornaNumerosPares(numerosPares))

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if(a == b && b ==c){
    return "Equilátero"
  }else if(a == b || a == c || c == b){
    return "Isósceles"
  }else{
    return "Escaleno"
  }
}
checaTriangulo(a, b, c)
// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }



}


// EXERCÍCIO 10
function segundoMaiorEMenor(segundoMaiorESegundoMenor) {


}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {


  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep","Anne Hathaway","Emily Blunt","Stanley Tucci"],
  }
  return (filme)

}filmeFavorito()

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."

  
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro:  (2 * (lado1 + lado2)),
    area: lado1 * lado2
  }
  return retangulo

}criaRetangulo(lado1, lado2)

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
