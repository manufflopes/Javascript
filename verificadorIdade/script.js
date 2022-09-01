function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')

    let alertar = document.querySelector('p#alert')
    let resposta = document.querySelector('div#resposta')
    // let imgAlert = document.createElement('img')
    // imgAlert.setAttribute('id', 'foto')
    // img.setAttribute('src', './imagens/robot.png')
    if (
        fano.value.length == 0 ||
        Number(fano.value) > ano ||
        Number(fano.value) == 0
    ) {
        //window.alert(`alertar.appendChild(imgAlert)`)
        // window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ' '
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        let imgG = document.createElement('img')
        imgG.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', './imagens/idades/bebeH.png')
                imgG.setAttribute('src', './imagens/geracao/alpha.png')
            } else if (idade < 10) {
                img.setAttribute('src', './imagens/idades/menino.png')
                imgG.setAttribute('src', './imagens/geracao/alpha.png')
            } else if (idade < 15) {
                img.setAttribute('src', './imagens/idades/adolescH.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoZ.png')
            } else if (idade < 25) {
                img.setAttribute('src', './imagens/idades/jovemH.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoZ.png')
            } else if (idade < 40) {
                img.setAttribute('src', './imagens/idades/adultH.png')
                imgG.setAttribute('src', './imagens/geracao/millenial.png')
            } else if (idade < 65) {
                img.setAttribute('src', './imagens/idades/meiaIdadeH.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoX.png')
            } else {
                img.setAttribute('src', './imagens/idades/idosoH.png')
                imgG.setAttribute('src', './imagens/geracao/babyBoomers.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', './imagens/idades/bebeM.png')
                imgG.setAttribute('src', './imagens/geracao/alpha.png')
            } else if (idade < 10) {
                img.setAttribute('src', './imagens/idades/menina.png')
                imgG.setAttribute('src', './imagens/geracao/alpha.png')
            } else if (idade < 15) {
                img.setAttribute('src', './imagens/idades/adolescM.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoZ.png')
            } else if (idade < 25) {
                img.setAttribute('src', './imagens/idades/jovemM.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoZ.png')
            } else if (idade < 40) {
                img.setAttribute('src', './imagens/idades/adultM.png')
                imgG.setAttribute('src', './imagens/geracao/millenial.png')
            } else if (idade < 65) {
                img.setAttribute('src', './imagens/idades/meiaIdadeM.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoX.png')
            } else {
                img.setAttribute('src', './imagens/idades/idosoM.png')
                imgG.setAttribute('src', './imagens/geracao/babyBoomers.png')
            }
        }
        //resposta.innerHtml = `Você é do gênero ${genero} e tem ${idade} anos. `
        resposta.appendChild(img)
        img.style.width = '250px'
        resposta.appendChild(imgG)
        imgG.style.width = '250px'
    }
}
//Pertence à geração ${epoca}.
