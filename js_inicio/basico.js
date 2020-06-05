console.log('Olá Mundo!')

console.log('\n[  Operadores unários               ] >>>>>>>>>>>>')

let x = 1
console.log(x)

console.log('\n[  Operadores binários              ] >>>>>>>>>>>>')
console.log('(Aritméticos, Atribuição, Relacionais, Lógicos)')

let a = 3
let b = 557
let resultado = a % b //infix
console.log(resultado)

a = 3
a += 3
a = a + 3
a *= 7
console.log(a + '\n')

console.log('\n[  Operadores Lógicos > < >= <= !=  ] >>>>>>>>>>>>')
console.log(3 > 2)
console.log(!(3 < 2))
console.log(!!' ')
console.log(2 == '2') // Comparação -> compara o conteúdo
console.log(2 === '2') // Comparação restrita -> compara o tipo
console.log(2 !== '2')
console.log(2 != '2')

// console.log(3 + 4 * 5 + 6)

console.log('\n[  Operadores ternários             ] >>>>>>>>>>>>')

let temSol = true
let estouComDinheiro = false
let vouSair = temSol || estouComDinheiro
let resolucao = vouSair ? 'Ebaaa!' : 'Que chato!'
console.log(resolucao)


console.log('\n[  Estruturas de Repetição          ] >>>>>>>>>>>>')

for (let i = 0; i <= 100; i += 10) {
    console.log(i)
}

console.log('\n[  Array                            ] >>>>>>>>>>>>')

// Array ->     0    1    2    3    4
const notas = [6.5, 7.7, 3.2, 8.1, 9.7] // undefined

console.log(notas[3])

console.log('\n[  Modo 1 : For                     ] >>>>>>>>>>>>')

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

console.log('\n[  Modo 2 : For                     ] >>>>>>>>>>>>')

for (let nota of notas) {
    console.log(nota)
}

console.log('\n[  Modo 3 : For                     ] >>>>>>>>>>>>')

notas.forEach(nota => console.log(nota))