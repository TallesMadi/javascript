var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom Dia!')
}
else if (12 <= hora && hora < 18) {
    console.log('Boa Tarde!')
}

else {
    console.log('Boa Noite!')
}
