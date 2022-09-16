function contar() {
    let start = Number(document.querySelector('#txtStart').value)
    let end = Number(document.querySelector('#txtEnd').value)
    let step = Math.abs(Number(document.querySelector('#txtStep').value))
    let resp = document.querySelector('#resp')
    if (!start || !end || !step) {
        window.alert(`[ERRO] Faltam dados !`)
    } else {
        resp.innerHTML = `Counting...  <br>`
        if (start < end) {
            //contagem crescente
            for (let counter = start; counter <= end; counter += step) {
                resp.innerHTML += ` ${counter} \u{1F449} `
            }
        } else {
            //contagem descrescente
            for (let counter = start; counter >= end; counter -= step) {
                resp.innerHTML += ` ${counter} \u{1F449} `
            }
        }
        resp.innerHTML += ` \u{1F596}.`
    }
}
function refresh() {
    window.location.reload()
}
