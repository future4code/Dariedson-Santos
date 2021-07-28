/*exercício de interpretação de código 1

a.  undefined
b.  null
8 c.  11
11 d.  3
14 e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]0: 31: 192: 53: 64: 75: 86: 97: 108: 119: 1210: 13length: 11__proto__: Array(0)concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}__proto__: Object
f.  9


exercício de interpretação de código 2
SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

//exercício de escrita de código

const emailDoUsuario = prompt("qual seu email?")
const nomeDoUsuario = prompt("Qual seu nome?")
console.log(`O email ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario} !`)



let minhasComidasFavoritas = ['pão de queijo' , 'coxinha' , 'lasanha' , 'pizza' , 'torta salgada']
console.log(`Minhas conmidas favoritas são: `)
console.log(minhasComidasFavoritas[0])
console.log(minhasComidasFavoritas[1])
console.log(minhasComidasFavoritas[2])
console.log(minhasComidasFavoritas[3])
console.log(minhasComidasFavoritas[4])
let suaComidaFavorita = prompt("qual a sua comida favorita")
minhasComidasFavoritas.splice(1 , 1 , suaComidaFavorita)
console.log(minhasComidasFavoritas[0])
console.log(minhasComidasFavoritas[1])
console.log(minhasComidasFavoritas[2])
console.log(minhasComidasFavoritas[3])
console.log(minhasComidasFavoritas[4])



let listaDeTarefas = []
const tarefa0 = prompt("digite a primra tarefa")
const tarefa1 = prompt("digite a segunda tarefa")
const tarefa2 = prompt("Digite a terceira tarefa")
listaDeTarefas = [tarefa0 , tarefa1, tarefa2]
console.log(listaDeTarefas[0] , listaDeTarefas[1] , listaDeTarefas[2])
const tarefaFeita = prompt("Digite o número da tarefa que você já realizou começando pelo número 0")
listaDeTarefas.splice(tarefaFeita , 1)
console.log(listaDeTarefas[0] , listaDeTarefas[1])
/*não usei o método .length porque já que foi pedido para o usuário escolher apenas um número
para ser retirado da lista então foi só  colocar listaDeTarefas[0] e listaDeTarefas[1]
*/












