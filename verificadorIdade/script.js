function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')

    let resposta = document.querySelector('div#resposta')

    if (
        fano.value.length == 0 ||
        Number(fano.value) > ano ||
        Number(fano.value) == 0
    ) {
        //ajustar Alerta ao ano
        let imgAlerta = document.createElement('img')
        imgAlerta.setAttribute('id', 'foto')
        imgAlerta.setAttribute('src', './imagens/robot.png')
        imgAlerta.innerHTML = `Verifique se os dados no campo "Ano de Nascimento estão corretos.`
        imgAlerta.appendChild(imgAlerta)
        //  img.style.width = '250px'
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ' '
        let geracao = ' '
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        let imgG = document.createElement('img')
        imgG.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', './imagens/idades/bebeH.png')
                imgG.setAttribute('src', './imagens/geracao/alpha.png')
                geracao = 'Alpha'
            } else if (idade < 10) {
                img.setAttribute('src', './imagens/idades/menino.png')
                imgG.setAttribute('src', './imagens/geracao/alpha.png')
                geracao = 'Alpha'
            } else if (idade < 15) {
                img.setAttribute('src', './imagens/idades/adolescH.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoZ.png')
                geracao = 'Z'
            } else if (idade < 25) {
                img.setAttribute('src', './imagens/idades/jovemH.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoZ.png')
                geracao = 'Z'
            } else if (idade < 40) {
                img.setAttribute('src', './imagens/idades/adultH.png')
                imgG.setAttribute('src', './imagens/geracao/millenial.png')
                geracao = 'Millenial'
            } else if (idade < 65) {
                img.setAttribute('src', './imagens/idades/meiaIdadeH.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoX.png')
                geracao = 'X'
            } else {
                img.setAttribute('src', './imagens/idades/idosoH.png')
                imgG.setAttribute('src', './imagens/geracao/babyBoomers.png')
                geracao = 'Baby Boomers'
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 3) {
                img.setAttribute('src', './imagens/idades/bebeM.png')
                imgG.setAttribute('src', './imagens/geracao/alpha.png')
                geracao = 'Alpha'
            } else if (idade < 10) {
                img.setAttribute('src', './imagens/idades/menina.png')
                imgG.setAttribute('src', './imagens/geracao/alpha.png')
                geracao = 'Alpha'
            } else if (idade < 15) {
                img.setAttribute('src', './imagens/idades/adolescM.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoZ.png')
                geracao = 'Z'
            } else if (idade < 25) {
                img.setAttribute('src', './imagens/idades/jovemM.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoZ.png')
                geracao = 'Z'
            } else if (idade < 40) {
                img.setAttribute('src', './imagens/idades/adultM.png')
                imgG.setAttribute('src', './imagens/geracao/millenial.png')
                geracao = 'Millenial'
            } else if (idade < 65) {
                img.setAttribute('src', './imagens/idades/meiaIdadeM.png')
                imgG.setAttribute('src', './imagens/geracao/geracaoX.png')
                geracao = 'X'
            } else {
                img.setAttribute('src', './imagens/idades/idosoM.png')
                imgG.setAttribute('src', './imagens/geracao/babyBoomers.png')
                geracao = 'Baby Boomers'
            }
        }

        resposta.innerHTML = `Você é do gênero ${genero}, tem ${idade} ano(s).<br>Pertence à Geração ${geracao}.`

        resposta.style.fontSize = '25px'

        resposta.appendChild(img)
        img.style.width = '150px'
        resposta.appendChild(imgG)
        imgG.style.width = '150px'
    }
}
