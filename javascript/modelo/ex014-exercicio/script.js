function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 19
    msg.innerHTML = `Àgora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
        //BOM DIA
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
        //BOA TARDE
        
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
        //BOA NOITE

        
    }
}