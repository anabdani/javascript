function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano  - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero ='Homem'
            if(idade >=0 && idade < 10) {
                img.setAttribute('src','bebe menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovem homem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','homem adulto.jpg')
            } else {
                img.setAttribute('src','homem idoso.jpg')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >=0 && idade < 10) {
               img.setAttribute('src','bebe menina.jpg')
                //criança
            } else if (idade < 21) {
               img.setAttribute('src','jovem mulher.jpg')
                //jovem
            } else if (idade < 50) {
              img.setAttribute('src','mulher adulta.jpg')
                //adulto
            } else {
               img.setAttribute('src','idosa mulher')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}