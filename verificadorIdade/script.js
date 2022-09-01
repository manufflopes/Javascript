function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let imgPessoas = document.querySelector('img#idade')
    let imgGeraçao = document.querySelector('img#geraçao')
    let resposta = document.querySelector('div#resposta')
    if (
        fano.value.length == 0 ||
        Number(fano.value) > ano ||
        Number(fano.value) == 0
    ) {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ' '
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 3) {
                imgPessoas.src = './imagens/idades/bebeH.png'
                imgGeraçao.src = './imagens/geraçao/alpha.png'
                
            } else if (idade < 10) {
                imgPessoas.src = './imagens/idades/menino.png'
                imgGeraçao.src = './imagens/geraçao/alpha.png'
            } else if (idade < 15) {
                imgPessoas.src = './imagens/idades/adolescH.png'
                imgGeraçao.src = './imagens/geraçao/geraçaoZ.png'
            } else if (idade < 25) {
                imgPessoas.src = './imagens/idades/jovemH.png'
                imgGeraçao.src = './imagens/geraçao/geraçaoZ.png'
            } else if (idade < 40) {
                imgPessoas.src = './imagens/idades/adultH.png'
                imgGeraçao.src = './imagens/geraçao/millenial.png'
            } else if (idade < 65) {
                imgPessoas.src = './imagens/idades/meiaIdadeH.png'
                imgGeraçao.src = './imagens/geraçao/geraçaoX.png'
            } else {
                imgPessoas.src = './imagens/idades/idosoH.png'
                imgGeraçao.src = './imagens/geraçao/babyBoomers.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 3) {
                imgPessoas.src = './imagens/idades/bebeM.png'
                imgGeraçao.src = './imagens/geraçao/alpha.png'
            } else if (idade < 10) {
                imgPessoas.src = './imagens/idades/menina.png'
                imgGeraçao.src = './imagens/geraçao/alpha.png'
            } else if (idade < 15) {
                imgPessoas.src = './imagens/idades/adolescM.png'
                imgGeraçao.src = './imagens/geraçao/geraçaoZ.png'
            } else if (idade < 25) {
                imgPessoas.src = './imagens/idades/jovemM.png'
                imgGeraçao.src = './imagens/geraçao/geraçaoZ.png'
            } else if (idade < 40) {
                imgPessoas.src = './imagens/idades/adultM.png'
                imgGeraçao.src = './imagens/geraçao/millenial.png'
            } else if (idade < 65) {
                imgPessoas.src = './imagens/idades/meiaIdadeM.png'
                imgGeraçao.src = './imagens/geraçao/geraçaoX.png'
            } else {
                imgPessoas.src = './imagens/idades/idosoM.png'
                imgGeraçao.src = './imagens/geraçao/babyBoomers.png'
            }
        }
    }
   
    calculo.innerHtml = `Você é do gênero ${genero} e tem ${idade} anos. Pertence à geração ${epoca}.`
}
