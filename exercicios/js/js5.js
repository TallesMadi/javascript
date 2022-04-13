var c = 1
while (c <= 6) {
    console.log(`Passo ${c}!`)
    c++ 
}

var b = 7
do {
    console.log(`Passo ${b}!`)
    b++
}  while (b <= 12)

for (var a = 13; a <= 18; a++) {
    console.log(`Passo ${a}!`)
}
/*Três formas de fazer o mesmo código */


let num = [67, 23, 2]
num[3] = 7
num.push(13)
for (var n = 0; n <= num.length - 1; n++) {
console.log(`Item ${num[n]}`)
}

for (let pos in num) {
    console.log(num[pos])
}

console.log(`7 está na ${num.indexOf(7)}° posição`)

if (num.indexOf(67) == -1) {
    console.log('Valor não encontrado!')
}
else {
    console.log(`O valor está na ${num.indexOf(67)}° posição!`)
}