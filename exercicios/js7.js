fim = -1
if (fim <= 0) {
    console.log(`Valores como ${nmassa.toFixed(2)} e ${nalt.toFixed(2)} podem estar errados!`)
}
else if (0 < fim && fim < 18.5) {
    console.log( `IMC = ${fim.toFixed(2)} <br> Abaixo do peso ideal`)
}
else if (18.5 <= fim && fim < 24.9) {
    console.log( `IMC = ${fim.toFixed(2)} <br> Peso normal`)
}
else if (24.9 <= fim && fim <= 29.9) {
    console.log( `IMC = ${fim.toFixed(2)} <br> Sobrepeso`)
}
else if (30 <= fim && fim <= 34.9) {
    console.log( `IMC = ${fim.toFixed(2)} <br> Obesidade grau I`)
}
else if (35 <= fim && fim <= 39.9) {
    console.log( `IMC = ${fim.toFixed(2)} <br> Obesidade grau II`)
}
else if (fim >= 40) {
    console.log( `IMC = ${fim.toFixed(2)} <br> Obesidade grau III / Obesidade mórbida`)
}