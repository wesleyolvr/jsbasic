function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var genero=''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade  = ano - Number(fano.value)
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                img.setAttribute('src','criancahomem.png')
            } else if (idade <21){
                img.setAttribute('src','jovemhomem.png')

            } else if(idade <50){
                img.setAttribute('src','adultohomem.png')

            } else {
                img.setAttribute('src','velhohomem.png')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                img.setAttribute('src','criancamulher.png')

            } else if (idade <21){
                img.setAttribute('src','jovemmulher.png')

            } else if(idade <50){
                img.setAttribute('src','adultamulher.png')
            } else {
                img.setAttribute('src','velhamulher.png')
            }
        }
    }
    res.style.textAlign= 'center'
    res.innerHTML= `detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

}