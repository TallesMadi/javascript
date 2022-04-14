function clicar() {
    var sex = window.document.getElementsByName('radsex')
    var a = new Date
    var hoje = a.getFullYear()
    var foto = window.document.querySelector('div#foto')
    var num = window.document.querySelector('input#txtnum')
    var res = window.document.querySelector('div#res')
    var ano = Number(num.value)
    var idade = hoje - ano
    if (sex[0].checked) {
        gen = 'Homem'
    }
    else {
        gen = 'Mulher'
    }
    if (idade >= 0 && idade <= 6) {

        res.innerHTML = `Você ainda é um bebê...Como você digitou isso?`
        foto.innerHTML = `<img src="imagem/bebe.jpg" alt="bebe">`
    }
    else if (idade >= 7 && idade <=12) {
        if (gen == 'Homem') {
            res.innerHTML = `Você é uma criança com ${idade} anos!`
            foto.innerHTML = `<img src="imagem/crianca.jpg" alt="crianca">`}
        else {
            res.innerHTML = `Você é uma criança com ${idade} anos!`
            foto.innerHTML = `<img src="imagem/crianca.f.jpg" alt="crianca">`
        }
    }
    else if (idade >= 13 && idade <= 17) {
        if (gen == 'Homem') {
            res.innerHTML = `Você é um adolescente com ${idade} anos!`
            foto.innerHTML = `<img src="imagem/adolescente.jpg" alt="adolescente">`}
        else {
            res.innerHTML = `Você é uma adolescente com ${idade} anos!`
            foto.innerHTML = `<img src="imagem/adolescente.f.jpg" alt="adolescente">`
        }
    }
    else if (idade >= 18 && idade <=39) {
        if (gen == 'Homem') {
            res.innerHTML = `Você é um jovem adulto com ${idade} anos!`
            foto.innerHTML = `<img src="imagem/jovem.jpg" alt="jovem">`}
        else {
            res.innerHTML = `Você é uma jovem adulta com ${idade} anos!`
            foto.innerHTML = `<img src="imagem/jovem.f.jpg" alt="jovem">`}
    }
    else if (idade >= 40 && idade <= 59) {
        if (gen == 'Homem') {
        res.innerHTML = `Você é um adulto tem ${idade} anos!`
        foto.innerHTML = `<img src="imagem/adulto.jpg" alt="adulto">`}
        else {
            res.innerHTML = `Você é uma adulta tem ${idade} anos!`
            foto.innerHTML = `<img src="imagem/adulta.jpg" alt="adulto">`
        }
    }
    else if (idade >= 60 && idade <=120) {
        if (gen == 'Homem') {
        res.innerHTML = `Você é um idoso com ${idade} anos!`
        foto.innerHTML = `<img src="imagem/idoso.jpg" alt="velha">`}
        else {
            res.innerHTML = `Você é uma idosa com ${idade} anos!`
            foto.innerHTML = `<img src="imagem/idosa.jpg" alt="velha">`
        }
    }
    else if (idade > 120) {
        res.innerHTML = `Ano inválido`
        foto.innerHTML = ``
    }
    else if (idade < 0) {
        res.innerHTML = `Você digitou o ano incorreto...ou ainda não nasceu!`
        foto.innerHTML = ``
    }
}