/*Exercícios de interpretação de código
1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    ```jsx
    let a = 10
    let b = 10

    console.log(b)

    b = 5
    console.log(a, b)
    ```
RESPOSTA:
10 
10 5
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    ```jsx
    let a = 10
    let b = 20
    let c
    c = a
    b = c
    a = b

    console.log(a, b, c)
    ```

RESPOSTA:
10 10 10

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.

    ```jsx
    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)
    ```

RESPOSTA
o programa pede ao usuário para digitar a quantidade de horas trabalhadas e em seguida pergunta quanto o usuário
recebe por dia, o programa vai dividir o valor que o usuário ganha por dia pelo total de horas trabalhadas
no dia e vai retornar o quanto o usuário ganha por hora trabalhada exibindo o resultado através de um alert.
nomes para as variáveis poderiam ser horasDeTrabalhoPorDia e valorDeUmDia

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
1. Construa um programa, seguindo os seguintes passos:

    a) Declare uma variável para armazenar um nome, sem atribuir um valor.

    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

    f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

    g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu


RESPOSTA:
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
/*
##################################################################################################################
2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado cada uma em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

    a) Crie três novas variáveis, contendo as respostas

    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

    ```
    Você está usando uma roupa azul hoje? - SIM
    ```
RESPOSTA:
*/
let gostaDeFutebol = prompt("Voce Gosta de Futebol Respoda Sim ou Não?")
let voceTrabalha = prompt ("Você Trabalha? Responda Sim ou Não")
let voceEstuda = prompt ("Você Estuda? Respoda Sim ou Não")

let respostaFutebol = (gostaDeFutebol)
let respostaTrabalha = (voceTrabalha)
let respostaEstuda = (voceEstuda)

console.log("Voce Gosta de Futebol? =" , respostaFutebol)
console.log("Você Trabalha? =" , respostaTrabalha)
console.log("Você Estuda? =" , respostaEstuda)
/*
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
3. Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial

    ```jsx
    let a = 10
    let b = 25
    ```

    Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

    Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.

    ```jsx
    let a = 10
    let b = 25

    // Aqui faremos uma lógica para trocar os valores

    // Depois de trocados, teremos o seguinte resultado:
    console.log("O novo valor de a é", a) // O novo valor de a é 25
    console.log("O novo valor de b é", b) // O novo valor de b é 10
    ```

    Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `a = 25` e `b = 10` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).

RESPOSTA:
*/


let a = Number(prompt("Escreva um número para a variável A"))
let b = Number(prompt("Escreva um número para a variável B"))
let c = a
a = b
b = c

console.log(a , b)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
