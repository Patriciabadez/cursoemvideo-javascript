function verificar() {
    // window.alert('FUNCIONOU!')
    var data = new Date()
    var ano = data.getFullYear() // PEGA ANO ATUAL
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute ('src','menino.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute ('src','jovem-m.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute ('src','homem.jpg')
            } else {
                //Idoso
                img.setAttribute ('src','idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute ('src','menina.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute ('src','jovem-f.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute ('src','mulher.jpg')
            } else {
                //Idoso
                img.setAttribute ('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}