let num = [5, 8, 2, 9, 3]

//insere mais um numero 
num.push(1)

//coloca os numeros em ordem
num.sort()

//mostra os numeros
console.log(num)

//mostra a posição
console.log(`O vetor tem ${num.length} posições`)

// mostra o valor do vetor
console.log(`O primeiro valor do vetor é ${num[1]}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('o valor não foi encontrado!')
} else {
    console.log(`O valor 2 esta na posição ${pos} `)
}
