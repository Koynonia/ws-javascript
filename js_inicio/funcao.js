
// Fixar o valor da variável no caso de null
function somar(a, b = 0) {
    // Se o valor não for passado para b, assume o 2
    //console.log(a + (b || 2))
    console.log(a + b)
}

let x = somar(3)
console.log(x)

somar()

function subtrair(a, b) {
    return a - b
}

// Function Declaration
function multiplicar1(a, b) {
    return a * b
}

// Function Expression
const multiplicar2 = function (a, b) { // função anônima
    return a * b
}

console.log(multiplicar1(4, 5))
console.log(multiplicar2(4, 5))

let y = subtrair(594, 185)
console.log(y)

// Característico do javascript
console.log('' || 'Está vazio pois interpreta como falso...\n')

// Função dentro de outra função
function executar(fn) {
    if (typeof fn === 'function') {
        console.log('Executando...')
        fn(3, 500)
    }
}

executar(somar)