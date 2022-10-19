var array = [1, 2, 4, 8]

let somaArray = array.reduce(
    (valorPrevio, valorAtual) => valorPrevio + valorAtual
)
console.log(somaArray);