// function carregar() {
//     let mensagem = document.querySelector('div#mensagem')
//     let imagens = document.querySelector('img#horario')
//     const data = new Date()
//     const hora = data.getHours()
//     const minutes = data.getMinutes()
//     const day = new Date().toLocaleDateString()

//     mensagem.innerHTML = `Agora são <strong>${hora}:${minutes}</strong> do dia <strong>${day}</strong>.`

//     if (hora >= 6 && hora < 12) {
//         imagens.src = './imagens/fotomanha.png'
//         document.body.style.background = '#f0c06d'
//     } else if (hora >= 12 && hora < 18) {
//         imagens.src = './imagens/fotoentardecer.png'
//         document.body.style.background = '#edbca2'
//     } else if (hora >= 18 && hora < 24) {
//         imagens.src = `./imagens/fotonoite.png`
//         document.body.style.background = '#374051'
//     } else {
//         imagens.src = './imagens/fotomadrugada.png'
//         document.body.style.background = '#0d0a0b'
//     }
// }
