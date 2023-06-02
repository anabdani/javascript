let num = [5, 8, 2, 3]
num.push(1)
num.sort()
console.log(`o valor tem ${num.length} posiçoes`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pod = num.indexOf(8) 
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor esta na posição ${pos}`)
}
