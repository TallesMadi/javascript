let lista = [2, 5, 7, 8]
let n1 = 1
lista.push(n1)
console.log(Math.min.apply(Math, lista))
var tot = lista.length
if (lista.length == 0) {
    console.log(`Lista Vazia!`)
}
else {
    console.log(`${lista}`)
    console.log(`Existe ${tot} números registrados!`) 
}