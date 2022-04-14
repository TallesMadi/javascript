function calculo() {
    var massa = window.document.querySelector('input#nummassa')
    var alt = window.document.querySelector('input#numalt')
    var res = window.document.querySelector('div#res')
    var t1 = window.document.querySelector('tr.t1')
    var t2 = window.document.querySelector('tr.t2')
    var t3 = window.document.querySelector('tr.t3')
    var t4 = window.document.querySelector('tr.t4')
    var t5 = window.document.querySelector('tr.t5')
    var t6 = window.document.querySelector('tr.t6')
    var d1 = window.document.querySelector('td.d1')
    var d2 = window.document.querySelector('td.d2')
    var d3 = window.document.querySelector('td.d3')
    var d4 = window.document.querySelector('td.d4')
    var d5 = window.document.querySelector('td.d5')
    var d6 = window.document.querySelector('td.d6')
    var d7 = window.document.querySelector('td.d7')
    var d8 = window.document.querySelector('td.d8')
    var d9 = window.document.querySelector('td.d9')
    var d10 = window.document.querySelector('td.d10')
    var d11 = window.document.querySelector('td.d11')
    var d12 = window.document.querySelector('td.d12')
    var nmassa = Number(massa.value)
    var nalt = Number(alt.value)
    var ini = (nalt / 100) * (nalt / 100)
    var fim = nmassa / ini
    res.style.border = '1px solid black'
    res.innerHTML = fim
    if (fim <= 0) {
        res.innerHTML = `Valores como ${nmassa.toFixed(2)} e ${nalt.toFixed(2)} podem estar errados! <br> <strong style='font-size: 4em'>&#9888;</strong>`
        res.style.color = 'red'
        t6.style.backgroundColor = 'azure'
        t1.style.backgroundColor = 'white'
        t2.style.backgroundColor = 'azure'
        t3.style.backgroundColor = 'white'
        t4.style.backgroundColor = 'azure'
        t5.style.backgroundColor = 'white'
        d11.style.color = '#0096D6'
        d12.style.color = '#0096D6'
        d1.style.color = '#0096D6'
        d2.style.color = '#0096D6'
        d3.style.color = '#0096D6'
        d4.style.color = '#0096D6'
        d5.style.color = '#0096D6'
        d6.style.color = '#0096D6'
        d7.style.color = '#0096D6'
        d8.style.color = '#0096D6'
        d9.style.color = '#0096D6'
        d10.style.color = '#0096D6'
    }
    else if (1 <= fim && fim < 18.5) {
        res.innerHTML = `IMC = ${fim.toFixed(2)} <br> Abaixo do peso ideal`
        //t1.style.backgroundColor = 'red'
        t1.style.backgroundColor = 'lightblue'
        t2.style.backgroundColor = 'azure'
        t3.style.backgroundColor = 'white'
        t4.style.backgroundColor = 'azure'
        t5.style.backgroundColor = 'white'
        t6.style.backgroundColor = 'azure'
        d1.style.color = 'white'
        d2.style.color = 'white'
        d3.style.color = '#0096D6'
        d4.style.color = '#0096D6'
        d5.style.color = '#0096D6'
        d6.style.color = '#0096D6'
        d7.style.color = '#0096D6'
        d8.style.color = '#0096D6'
        d9.style.color = '#0096D6'
        d10.style.color = '#0096D6'
        d11.style.color = '#0096D6'
        d12.style.color = '#0096D6'
        res.style.color = 'black'
    }
    else if (18.5 <= fim && fim < 24.9) {
        res.innerHTML = `IMC = ${fim.toFixed(2)} <br> Peso normal`
        t2.style.backgroundColor = '#36E001'
        t1.style.backgroundColor = 'white'
        t3.style.backgroundColor = 'white'
        t4.style.backgroundColor = 'azure'
        t5.style.backgroundColor = 'white'
        t6.style.backgroundColor = 'azure'
        d3.style.color = 'white'
        d4.style.color = 'white'
        d1.style.color = '#0096D6'
        d2.style.color = '#0096D6'
        d5.style.color = '#0096D6'
        d6.style.color = '#0096D6'
        d7.style.color = '#0096D6'
        d8.style.color = '#0096D6'
        d9.style.color = '#0096D6'
        d10.style.color = '#0096D6'
        d11.style.color = '#0096D6'
        d12.style.color = '#0096D6'
        res.style.color = 'black'
    }
    else if (24.9 <= fim && fim <= 29.9) {
        res.innerHTML = `IMC = ${fim.toFixed(2)} <br> Sobrepeso`
        t3.style.backgroundColor = '#FFF001'
        t1.style.backgroundColor = 'white'
        t2.style.backgroundColor = 'azure'
        t4.style.backgroundColor = 'azure'
        t5.style.backgroundColor = 'white'
        t6.style.backgroundColor = 'azure'
        d5.style.color = 'white'
        d6.style.color = 'white'
        d1.style.color = '#0096D6'
        d2.style.color = '#0096D6'
        d3.style.color = '#0096D6'
        d4.style.color = '#0096D6'
        d7.style.color = '#0096D6'
        d8.style.color = '#0096D6'
        d9.style.color = '#0096D6'
        d10.style.color = '#0096D6'
        d11.style.color = '#0096D6'
        d12.style.color = '#0096D6'
        res.style.color = 'black'
    }
    else if (30 <= fim && fim <= 34.9) {
        res.innerHTML = `IMC = ${fim.toFixed(2)} <br> Obesidade grau I`
        t4.style.backgroundColor = '#FFB900'
        t1.style.backgroundColor = 'white'
        t2.style.backgroundColor = 'azure'
        t3.style.backgroundColor = 'white'
        t5.style.backgroundColor = 'white'
        t6.style.backgroundColor = 'azure'
        d7.style.color = 'white'
        d8.style.color = 'white'
        d1.style.color = '#0096D6'
        d2.style.color = '#0096D6'
        d3.style.color = '#0096D6'
        d4.style.color = '#0096D6'
        d5.style.color = '#0096D6'
        d6.style.color = '#0096D6'
        d9.style.color = '#0096D6'
        d10.style.color = '#0096D6'
        d11.style.color = '#0096D6'
        d12.style.color = '#0096D6'
        res.style.color = 'black'
    }
    else if (35 <= fim && fim <= 39.9) {
        res.innerHTML = `IMC = ${fim.toFixed(2)} <br> Obesidade grau II`
        t5.style.backgroundColor = '#FF5C01'
        t1.style.backgroundColor = 'white'
        t2.style.backgroundColor = 'azure'
        t3.style.backgroundColor = 'white'
        t4.style.backgroundColor = 'azure'
        t6.style.backgroundColor = 'azure'
        d9.style.color = 'white'
        d10.style.color = 'white'
        d1.style.color = '#0096D6'
        d2.style.color = '#0096D6'
        d3.style.color = '#0096D6'
        d4.style.color = '#0096D6'
        d5.style.color = '#0096D6'
        d6.style.color = '#0096D6'
        d7.style.color = '#0096D6'
        d8.style.color = '#0096D6'
        d11.style.color = '#0096D6'
        d12.style.color = '#0096D6'
        res.style.color = 'black'
    }
    else if (fim >= 40 && fim <= 100) {
        res.innerHTML = `IMC = ${fim.toFixed(2)} <br> Obesidade grau III / Obesidade mórbida`
        t6.style.backgroundColor = '#F10507'
        t1.style.backgroundColor = 'white'
        t2.style.backgroundColor = 'azure'
        t3.style.backgroundColor = 'white'
        t4.style.backgroundColor = 'azure'
        t5.style.backgroundColor = 'white'
        d11.style.color = 'white'
        d12.style.color = 'white'
        d1.style.color = '#0096D6'
        d2.style.color = '#0096D6'
        d3.style.color = '#0096D6'
        d4.style.color = '#0096D6'
        d5.style.color = '#0096D6'
        d6.style.color = '#0096D6'
        d7.style.color = '#0096D6'
        d8.style.color = '#0096D6'
        d9.style.color = '#0096D6'
        d10.style.color = '#0096D6'
        res.style.color = 'black'
    }
    else if (fim > 100) {
        res.innerHTML = `Valores como ${nmassa.toFixed(2)} e ${nalt.toFixed(2)} podem estar errados! <br> <strong style='font-size: 4em'>&#9888;</strong>`
        res.style.color = 'red'
        t6.style.backgroundColor = 'azure'
        t1.style.backgroundColor = 'white'
        t2.style.backgroundColor = 'azure'
        t3.style.backgroundColor = 'white'
        t4.style.backgroundColor = 'azure'
        t5.style.backgroundColor = 'white'
        d11.style.color = '#0096D6'
        d12.style.color = '#0096D6'
        d1.style.color = '#0096D6'
        d2.style.color = '#0096D6'
        d3.style.color = '#0096D6'
        d4.style.color = '#0096D6'
        d5.style.color = '#0096D6'
        d6.style.color = '#0096D6'
        d7.style.color = '#0096D6'
        d8.style.color = '#0096D6'
        d9.style.color = '#0096D6'
        d10.style.color = '#0096D6'
    }
    else {
        res.innerHTML = `ERRO! <br> Algum valor acima está incorreto/ausente <br> <strong style='font-size: 4em'>&#9888;</strong>`
        res.style.color = 'red'
        t6.style.backgroundColor = 'azure'
        t1.style.backgroundColor = 'white'
        t2.style.backgroundColor = 'azure'
        t3.style.backgroundColor = 'white'
        t4.style.backgroundColor = 'azure'
        t5.style.backgroundColor = 'white'
        d11.style.color = '#0096D6'
        d12.style.color = '#0096D6'
        d1.style.color = '#0096D6'
        d2.style.color = '#0096D6'
        d3.style.color = '#0096D6'
        d4.style.color = '#0096D6'
        d5.style.color = '#0096D6'
        d6.style.color = '#0096D6'
        d7.style.color = '#0096D6'
        d8.style.color = '#0096D6'
        d9.style.color = '#0096D6'
        d10.style.color = '#0096D6'
    }
}