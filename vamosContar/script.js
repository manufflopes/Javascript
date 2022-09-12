function contar() {
    let start = Number(document.querySelector('#txtStart').value)
    let end = Number(document.querySelector('#txtEnd').value)
    let step = Number(document.querySelector('#txtStep').value)
    let resp = document.querySelector('#resp')
    resp.innerHTML = `Contando...  `
    for (let counter = start; counter <= end; counter += step) {
        resp.innerHTML += `${counter} `
    }
}
