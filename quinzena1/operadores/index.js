/*
1- exercício de interpretação de código
a - false
b - b false 
c - false
d - booleano


2 - exercício de interpretação de código 
nesse código falta o Number ates do prompt, para transfrmar uma string em número
porque sem o Number ele não faz a soma, só vai concatenar as strings
no caso de a pessoa colocar o numero 1 na variável primeiroNumero 
e 2 na variável segundoNumero o resultado vai ser 12 


3- exercício de interpretação de código
o código está assim

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

e deve ficar assim

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

*/


//exercício de escrita de código 1
const idadeUsuario = Number(prompt("qual a sua idade?"))
const idadeMelhorAmigo = Number(prompt("qual a idade do seu melhor amigo?"))
const idadeEhMaior = idadeUsuario > idadeMelhorAmigo
console.log("sua idade é maior do que a do seu melhor amigo? " , idadeEhMaior)
const diferencaDeIdade = idadeUsuario - idadeMelhorAmigo
console.log(diferencaDeIdade)


//exrcício de escrita de código 2
const numeroPar = Number(prompt("Insira um número par"))
const restoDaDivisao = numeroPar % 2
console.log(restoDaDivisao)/*sempre que colocar um número par o resto da divisão será zero
e sempre que colocar um número impar o resto da divisão será um*/


//exercício de escrita de código 3
const quantosAnosVoceTem = Number(prompt("Quantos anos você tem?"))
const idadeEmMeses = quantosAnosVoceTem * 12
const idadeEmDias = quantosAnosVoceTem * 365 
const idadeEmHoras = idadeEmDias * 24
console.log("a sua idade em meses é " , idadeEmMeses , " a sua idade em dias é " , idadeEmDias , " a sua idade em horas é " , idadeEmHoras)


//exercício de escrita de código 4
const numeroUm = Number(prompt("Insira um número: "))
const numeroDois = Number(prompt("Insira outro número: "))
console.log("o primeiro número é maior que segundo? " , numeroUm > numeroDois)
console.log("o primeiro número igual ao segundo? " , numeroUm === numeroDois)
console.log("o primeiro número é divisível pelo segundo? " , (numeroUm % numeroDois) === 0)
console.log("o segundo número é divisível pelo primeiro" , (numeroDois % numeroUm) === 0)



//desafios 1
//a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
const grausF = 77
const transformandoEmK = (grausF - 32)* 5/9 + 273.15
console.log("77 graus Celsius transformados em Fahrenheit é =" , transformandoEmK)
//b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
const grausC = 80
const transformandoEmF = (grausC * 9/5) + 32
console.log("80 graus Celsius transformados em Fahrenheit é = " ,transformandoEmF)
//c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
let grausCC
grausCC = 30
const trasformandoCEmK = grausCC + 273.15
const transformandoCEmF = (grausCC * 9/5) + 32
console.log("30 graus Celsius transformados em Fahrenheit é = " , trasformandoCEmK , " 30 graus Celsius transformado em Graus Kevin é = " , transformandoCEmF)
//d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
grausCC = Number(prompt("Insira o valor em graus celsius que deseja converter"))
const transformaF = (grausCC * 9/5) + 32
const transformaK = grausCC + 273.15
console.log(grausCC , "transformados em graus F e K são respectivamente" , transformaF , " e " , transformaK)


//desafios 2
const valorKw = 0.05 * 280
console.log("o valor a ser pago por uma casa que consumiu 280KW é = " , valorKw , " reais")
const descontoKw = valorKw / 100
const resultadokw = valorKw - (descontoKw * 15)
console.log("com o desconto de 15% o valor a ser pago é =" , resultadokw , " reais")


//desafios 3
//a
const libras = 20
const transfEmKg = libras / 2.2046
console.log(libras , "lb equivalem a " , transfEmKg , " kg")
//b
const oncas = 10.5
const oncaEmKg = oncas / 35.274
console.log(oncas , "oz equivalem a" , oncaEmKg , "kg")
//c
const milha = 100
const milhaParaMetros = milha / 0.00062137
console.log(milha , "mi equivalem a " , milhaParaMetros , " m")
//d
const pesFt = 50
const pesEmMetros = pesFt / 3.2808
console.log(pesFt , "ft equivalem a " , pesEmMetros , " m")
//e
const galao = 103.56
const galaoEmLitros = galao * 3.78541
console.log(galao , "gal equivalem a " , galaoEmLitros , " l")
//f 
const xicara = 450
const xicaraParaLitros = (xicara * 6) / 25
console.log(xicara , "xic equivalem a " , xicaraParaLitros , " l")
//g
let insiraXicaras = Number(prompt("Insira a quantidade de xícaras para converter em litros")) 
const xicarasEmLitros = (insiraXicaras * 6) / 25
console.log(insiraXicaras , "xic equivalem a " , xicarasEmLitros , ' l')




